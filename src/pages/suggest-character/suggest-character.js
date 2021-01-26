import React from "react";
import { fazerRequisicaoComBody } from "../../utils/fetch";
import "./suggest-character.css";

import { useHistory } from "react-router-dom";
import SidebarUser from "../../components/sidebar-user/sidebar-user";

import { Formik } from "formik";
import * as Yup from "yup";

function SuggestCharacter() {
  const history = useHistory();

  return (
    <div className="SuggestCharacter">
      <SidebarUser />
      <div className="suggest-container">
        <div className="suggest">
          <h2 class="title">Suggest a character</h2>

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
            }}
            onSubmit={(values) => {
              console.log(JSON.stringify(values, null, 2));
              fazerRequisicaoComBody(
                "https://aroacedb-back.herokuapp.com/suggest",
                "POST",
                values
              )
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);
                });
              history.push("/success");
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
                          placeholder="Character Name"
                          type="text"
                          value={values.character_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </h2>
                      <input
                        id="importance"
                        placeholder="Character Importance"
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
                          placeholder="Gender"
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
                          placeholder="Pairing"
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
                          placeholder="Series"
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
                          placeholder="Type of Rep"
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
                          placeholder="Romantic Orientation"
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
                          placeholder="Sexual Orientation"
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
                          placeholder="Genres"
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
                        placeholder="Relationships"
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
                        placeholder="Representation Notes & Warnings"
                        type="text"
                        value={values.rep_noteswarnings}
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
        </div>
      </div>
    </div>
  );
}

export default SuggestCharacter;
