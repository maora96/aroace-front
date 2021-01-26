import "./suggest-character-info.css";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { fazerRequisicaoComBody } from "../../utils/fetch";

export default function SuggestCharacterInfo() {
  return (
    <div className="SuggestCharacterInfo">
      <Formik
        initialValues={{
          character_name: "",
          author: "",
          gender: "",
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
            "https://aroacedb-back.herokuapp.com/",
            "POST",
            values
          )
            .then((res) => res.json())
            .then((resJson) => {
              console.log(resJson);
            });
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
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
                  <input
                    id="relationships"
                    placeholder="Relationships"
                    type="text"
                    value={values.relationships}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </p>
              </div>

              <div clasName="square">
                <p>
                  <span>Notes & Warnings</span>
                  <input
                    id="rep_noteswarnings"
                    placeholder="Representation Notes & Warnings"
                    type="text"
                    value={values.rep_noteswarnings}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </p>
              </div>

              <button type="submit" disabled={isSubmitting} className="submit">
                Submit character
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
