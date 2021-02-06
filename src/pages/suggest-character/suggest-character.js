import React, { useState } from "react";
import { fetchWithBody } from "../../utils/fetch";
import "./suggest-character.css";

import { useHistory } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";

import { Formik } from "formik";
import * as Yup from "yup";
import MobileHeader from "../../components/mobile-header/mobile-header";

function SuggestCharacter() {
  const history = useHistory();
  const [token, setToken] = useState("");
  const [characterCheck, setCharacterCheck] = React.useState("");
  const [storyCheck, setStoryCheck] = React.useState("");
  const [reviewCheck, setReviewCheck] = React.useState("");

  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    fetch("https://aroacedb-back.herokuapp.com/permissions")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setCharacterCheck(resJson.data.character.checked);
        setStoryCheck(resJson.data.story.checked);
        setReviewCheck(resJson.data.review.checked);
      });
  }, []);

  return (
    <div className="SuggestCharacter">
      <Sidebar />
      <MobileHeader />
      <div className="suggest-container">
        <div className="suggest">
          <h2 class="title">Suggest a character</h2>
          {characterCheck ? (
            <Formik
              initialValues={{
                character_name: "",
                author: "",
                gender: "",
                importance: "",
                pairing_qpp_or_romantic: "",
                main_storyseries: "",
                type_of_rep: "",
                romantic_orientation: "",
                sexual_orientation: "",
                genre: "",
                relationships: "",
                rep_noteswarnings: "",
                cover: "",
                reference: "",
              }}
              onSubmit={(values) => {
                console.log(JSON.stringify(values, null, 2));
                fetchWithBody(
                  "https://aroacedb-back.herokuapp.com/suggest/characters",
                  "POST",
                  values
                )
                  .then((res) => res.json())
                  .then((resJson) => {
                    console.log(resJson);
                    history.push("/success");
                  });
              }}
            >
              {(props) => {
                const {
                  values,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="suggest-character-info">
                      <p>Suggestions are not being received yet!</p>
                      <div className="line">
                        <h2>
                          <input
                            id="character_name"
                            placeholder="Insert Character Name"
                            type="text"
                            value={values.character_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </h2>
                        <input
                          id="importance"
                          placeholder="Insert Character Importance"
                          type="text"
                          value={values.importance}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="line">
                        <div className="chunk">
                          <span>Author</span>
                          <input
                            id="author"
                            placeholder="Author"
                            type="text"
                            value={values.author}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="chunk">
                          <span>Gender</span>{" "}
                          <input
                            id="gender"
                            placeholder="Insert Character Gender"
                            type="text"
                            value={values.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="chunk">
                          <span>Pairing</span>
                          <input
                            id="pairing_qpp_or_romantic"
                            placeholder="Insert Pairing"
                            type="text"
                            value={values.pairing_qpp_or_romantic}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

                      <div className="line">
                        <div className="chunk">
                          <span>Series</span>
                          <input
                            id="main_storyseries"
                            placeholder="Insert Series"
                            type="text"
                            value={values.main_storyseries}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="chunk">
                          <span>Type of Rep</span>
                          <input
                            id="type_of_rep"
                            placeholder="Insert Type of Rep"
                            type="text"
                            value={values.type_of_rep}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

                      <div className="line">
                        <div className="chunk">
                          <span>Romantic orientation</span>
                          <input
                            id="romantic_orientation"
                            placeholder="Insert Romantic Orientation"
                            type="text"
                            value={values.romantic_orientation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="chunk">
                          <span>Sexual Orientation</span>
                          <input
                            id="sexual_orientation"
                            placeholder="Insert Sexual Orientation"
                            type="text"
                            value={values.sexual_orientation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

                      <div className="line">
                        <div className="chunk">
                          <span>Genre</span>
                          <input
                            id="genre"
                            placeholder="Insert Genres"
                            type="text"
                            value={values.genre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

                      <div clasName="square">
                        <p>
                          <span>Relationships</span>
                        </p>
                        <textarea
                          id="relationships"
                          placeholder="Insert Relationships"
                          type="text"
                          value={values.relationships}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div clasName="square">
                        <p>
                          <span>Notes & Warnings</span>
                        </p>
                        <textarea
                          id="rep_noteswarnings"
                          placeholder="Insert Representation Notes & Warnings"
                          type="text"
                          value={values.rep_noteswarnings}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div clasName="square">
                        <p>
                          <span>References to mention of representation</span>
                        </p>
                        <textarea
                          id="reference"
                          placeholder="Insert references"
                          type="text"
                          value={values.reference}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div clasName="square">
                        <p>
                          <span>Cover</span>
                        </p>
                        <input
                          id="cover"
                          placeholder="cover"
                          type="text"
                          value={values.cover}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div className="suggest-review">
                      <p>
                        Once the character has been accepted to the database you
                        will be able to suggest reviews and stories for them!
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit"
                    >
                      Suggest Character
                    </button>
                  </form>
                );
              }}
            </Formik>
          ) : (
            "We are not accepting character suggestions at this moment."
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestCharacter;
