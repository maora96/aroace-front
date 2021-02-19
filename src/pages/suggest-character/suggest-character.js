import React, { useState } from "react";
import { fetchWithBody } from "../../utils/fetch";
import "./suggest-character.css";
import ReactTooltip from "react-tooltip";
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
          <h2 className="title">Suggest a character</h2>
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
                    <div className="content">
                      <p>
                        Welcome to the “Suggest a Character” page. Before you
                        fill out the form, please remember all entries meet
                        these criterias:
                      </p>
                      <ul>
                        <li>
                          Prose only (no films, tv series, (web)comics, etc.)
                        </li>
                        <li>
                          Currently published original fiction (online, digital,
                          in print)
                        </li>
                        <li>Confirmed characters only</li>
                      </ul>

                      <p>
                        Every field has a tooltip, so check those out if you’re
                        unsure what to fill in! With all of that said, thank you
                        so much for your suggestion and help.
                      </p>
                    </div>
                    <div className="suggest-character-info">
                      <div className="line">
                        <h2>
                          <div className="group">
                            <span
                              className="hover"
                              data-for="tooltip-name"
                              data-tip
                            >
                              ?
                            </span>
                            <ReactTooltip
                              id="tooltip-name"
                              effect="solid"
                              place="top"
                              type="dark"
                            >
                              <div className="tooltip">Text on tooltip</div>
                            </ReactTooltip>
                          </div>
                          <input
                            id="character_name"
                            placeholder="Insert Character Name"
                            type="text"
                            value={values.character_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </h2>
                        <div className="group">
                          <span
                            className="hover"
                            data-for="tooltip-importance"
                            data-tip
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="tooltip-importance"
                            effect="solid"
                            place="top"
                            type="dark"
                          >
                            <div className="tooltip">importance</div>
                          </ReactTooltip>
                        </div>
                        <select
                          name="importance"
                          value={values.importance}
                          onChange={handleChange}
                          onBlur={handleChange}
                        >
                          <option value="" label="Select one" />
                          <option value="Lead" label="Lead" />
                          <option value="Main" label="Main" />
                          <option value="Side" label="Side" />
                        </select>
                      </div>
                      <div className="line">
                        <div className="chunk">
                          <div className="group">
                            <span
                              className="hover"
                              data-for="tooltip-author"
                              data-tip
                            >
                              ?
                            </span>
                            <ReactTooltip
                              id="tooltip-author"
                              effect="solid"
                              place="top"
                              type="dark"
                            >
                              <div className="tooltip">author</div>
                            </ReactTooltip>
                            <span>Author</span>
                          </div>
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
                          <div className="group">
                            <span
                              className="hover"
                              data-tip
                              data-for="tooltip-gender"
                            >
                              ?
                            </span>
                            <ReactTooltip
                              id="tooltip-gender"
                              effect="solid"
                              place="top"
                              type="dark"
                            >
                              <div className="tooltip">gender</div>
                            </ReactTooltip>
                            <span>Gender</span>
                          </div>

                          <select
                            name="gender"
                            value={values.gender}
                            onChange={handleChange}
                            onBlur={handleChange}
                          >
                            <option value="" label="Select gender" />
                            <option value="M" label="M" />
                            <option value="F" label="F" />
                            <option value="Enby" label="Enby" />
                          </select>
                        </div>
                        <div className="chunk">
                          <div className="group">
                            <span
                              className="hover"
                              data-for="tooltip-pairing"
                              data-tip
                            >
                              ?
                            </span>
                            <ReactTooltip
                              id="tooltip-pairing"
                              effect="solid"
                              place="top"
                              type="dark"
                            >
                              <div className="tooltip">pairing</div>
                            </ReactTooltip>
                            <span>Pairing</span>
                          </div>
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
                          <div className="group">
                            <span
                              className="hover"
                              data-for="tooltip-main-storyseries"
                              data-tip
                            >
                              ?
                            </span>
                            <ReactTooltip
                              id="tooltip-main-storyseries"
                              effect="solid"
                              place="top"
                              type="dark"
                            >
                              <div className="tooltip">series</div>
                            </ReactTooltip>
                            <span>Series</span>
                          </div>
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
                          <div className="group">
                            <span
                              className="hover"
                              data-for="tooltip-type"
                              data-tip
                            >
                              ?
                            </span>
                            <ReactTooltip
                              id="tooltip-type"
                              effect="solid"
                              place="top"
                              type="dark"
                            >
                              <div className="tooltip">type</div>
                            </ReactTooltip>
                            <span>Type of Rep</span>
                          </div>

                          <select
                            name="type_of_rep"
                            value={values.type_of_rep}
                            onChange={handleChange}
                            onBlur={handleChange}
                          >
                            <option value="" label="Select one" />
                            <option value="Word of God" label="Word of God" />
                            <option value="On Page" label="On Page" />
                            <option value="Word Used" label="Word Used" />
                          </select>
                        </div>
                      </div>

                      <div className="line">
                        <div className="chunk">
                          <div className="group">
                            <span
                              className="hover"
                              data-for="tooltip-romantic"
                              data-tip
                            >
                              ?
                            </span>
                            <ReactTooltip
                              id="tooltip-romantic"
                              effect="solid"
                              place="top"
                              type="dark"
                            >
                              <div className="tooltip">romantic</div>
                            </ReactTooltip>
                            <span>Romantic orientation</span>
                          </div>

                          <select
                            name="romantic_orientation"
                            value={values.romantic_orientation}
                            onChange={handleChange}
                            onBlur={handleChange}
                          >
                            <option value="" label="Select one" />
                            <option value="Alloromantic" label="Alloromantic" />
                            <option value="Aroflux" label="Aroflux" />
                            <option value="Aromantic" label="Aromantic" />
                            <option value="Arospec" label="Arospec" />
                            <option value="Biromantic" label="Biromantic" />
                            <option value="Greyromantic" label="Grayromantic" />
                            <option value="Demiromantic" label="Demiromantic" />
                            <option
                              value="Heteroromantic"
                              label="Heteroromantic"
                            />
                            <option value="Homoromantic" label="Homoromantic" />
                            <option value="Panromantic" label="Panromantic" />
                            <option value="Queer" label="Queer" />
                            <option value="WTFRomantic" label="WTFRomantic" />
                          </select>
                        </div>
                        <div className="chunk">
                          <div className="group">
                            <span
                              className="hover"
                              data-for="tooltip-sexual"
                              data-tip
                            >
                              ?
                            </span>
                            <ReactTooltip
                              id="tooltip-sexual"
                              effect="solid"
                              place="top"
                              type="dark"
                            >
                              <div className="tooltip">sexual field</div>
                            </ReactTooltip>
                            <span>Sexual Orientation</span>
                          </div>
                          <select
                            name="sexual_orientation"
                            value={values.sexual_orientation}
                            onChange={handleChange}
                            onBlur={handleChange}
                          >
                            <option value="" label="Select one" />
                            <option value="Allosexual" label="Allosexual" />
                            <option value="Asexual" label="Asexual" />
                            <option value="Acespec" label="Acespec" />
                            <option value="Demisexual" label="Demisexual" />
                            <option value="Bisexual" label="Bisexual" />
                            <option value="Gay" label="Gay" />
                            <option value="Gray-asexual" label="Graysexual" />
                            <option value="Heterosexual" label="Heterosexual" />
                            <option value="Pansexual" label="Pansexual" />
                            <option value="Queer" label="Queer" />
                          </select>
                          {/* <input
                            id="sexual_orientation"
                            placeholder="Insert Sexual Orientation"
                            type="text"
                            value={values.sexual_orientation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          /> */}
                        </div>
                      </div>

                      <div className="line">
                        <div className="chunk">
                          <div className="group">
                            <span
                              className="hover"
                              data-for="genre-field"
                              data-tip="this is a tooltip for the relationships fields. it might be very long. it might not."
                            >
                              ?
                            </span>
                            <ReactTooltip
                              id="genre-field"
                              effect="solid"
                              place="top"
                              type="dark"
                            />
                            <span>Genre</span>
                          </div>
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
                        <div className="group">
                          <span
                            className="hover"
                            data-for="relationships"
                            data-tip="this is a tooltip for the relationships fields. it might be very long. it might not."
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="relationships"
                            effect="solid"
                            place="top"
                            type="dark"
                          />
                          <p>
                            <span>Relationships</span>
                          </p>
                        </div>
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
                        <div className="group">
                          <span
                            className="hover"
                            data-for="noteswarnings"
                            data-tip="this is a tooltip for the notes & warnings field. it might be very long. it might not."
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="noteswarnings"
                            effect="solid"
                            place="top"
                            type="dark"
                          />
                          <p>
                            <span>Notes & Warnings</span>
                          </p>
                        </div>
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
                        <div className="group">
                          <span
                            className="hover"
                            data-for="tooltip-ref"
                            data-tip="tooltip-ref"
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="tooltip-ref"
                            effect="solid"
                            place="top"
                            type="dark"
                          />
                          <p>
                            <span>References to mention of representation</span>
                          </p>
                        </div>

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
                        <div className="group">
                          <span
                            className="hover"
                            data-for="cover"
                            data-tip="this is a tooltip for the notes & warnings field. it might be very long. it might not."
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="cover"
                            effect="solid"
                            place="top"
                            type="dark"
                          />
                          <p>
                            <span>Cover</span>
                          </p>
                        </div>
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
