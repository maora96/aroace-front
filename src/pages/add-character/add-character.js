import React from "react";
import "./add-character.css";

import { useHistory } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import { fetchWithToken } from "../../utils/fetch";
import { Formik } from "formik";
import * as Yup from "yup";
import MobileHeader from "../../components/mobile-header/mobile-header";
import ReactTooltip from "react-tooltip";

export default function AddCharacter() {
  const [character, setCharacter] = React.useState({});
  const history = useHistory();

  return (
    <div className="Character">
      <Sidebar />
      <MobileHeader />
      <div className="character-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="suggest">
          <h2 className="title text-secondary dark:text-darksecondary">
            Add a character
          </h2>

          <Formik
            enableReinitialize={true}
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
            }}
            onSubmit={(values) => {
              const token = localStorage.getItem("token");
              console.log(token);
              console.log(JSON.stringify(values, null, 2));
              fetchWithToken(
                "https://aroacedb-back.herokuapp.com/characters",
                "POST",
                values,
                token
              )
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);
                  history.push("/success");
                });
              //s history.push("/success");
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
                    <div className="line">
                      <h2>
                        <input
                          id="character_name"
                          placeholder={character.character_name}
                          type="text"
                          value={values.character_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </h2>
                      <div className="importance-container">
                        <div className="group">
                          <span
                            className="hover "
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
                            <div className="tooltip">
                              <ul>
                                <li>
                                  <strong>Lead:</strong>The character is at the
                                  heart of the story’s central storyline
                                </li>
                                <li>
                                  <strong>Main:</strong>The character plays an
                                  important role in the story and is frequently
                                  on page
                                </li>
                                <li>
                                  <strong>Lead:</strong>The character plays a
                                  minor role in the story
                                </li>
                              </ul>
                            </div>
                          </ReactTooltip>
                          <span>Importance</span>
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
                    </div>
                    <div className="line">
                      <div className="chunk">
                        <div className="group">
                          <span>Author</span>
                        </div>
                        <input
                          id="author"
                          placeholder={character.author}
                          type="text"
                          value={values.author}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="chunk">
                        <div className="group">
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
                          <span>Pairing</span>
                        </div>
                        <input
                          id="pairing_qpp_or_romantic"
                          placeholder={character.pairing_qpp_or_romantic}
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
                          <span>Series</span>
                        </div>
                        <input
                          id="main_storyseries"
                          placeholder={character.main_storyseries}
                          type="text"
                          value={values.main_storyseries}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="chunk">
                        <div className="group">
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
                      </div>
                    </div>

                    <div className="line">
                      <div className="chunk">
                        <div className="group">
                          <span>Genre</span>
                        </div>
                        <input
                          id="genre"
                          placeholder={character.genre}
                          type="text"
                          value={values.genre}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div clasName="square">
                      <div className="group">
                        <p>
                          <span>Relationships</span>
                        </p>
                      </div>
                      <textarea
                        id="relationships"
                        placeholder={character.relationships}
                        type="text"
                        value={values.relationships}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div clasName="square">
                      <div className="group">
                        <p>
                          <span>Notes & Warnings</span>
                        </p>
                      </div>
                      <textarea
                        id="rep_noteswarnings"
                        placeholder={character.rep_noteswarnings}
                        type="text"
                        value={values.rep_noteswarnings}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div clasName="square">
                      <div className="group">
                        <p>
                          <span>Cover</span>
                        </p>
                      </div>
                      <input
                        id="cover"
                        placeholder={character.cover}
                        type="text"
                        value={values.cover}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="buttons-add">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit"
                    >
                      Add Character to Database
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
