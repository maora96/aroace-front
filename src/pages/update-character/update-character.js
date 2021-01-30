import React from "react";
import "./update-character.css";
import { useRouteMatch } from "react-router-dom";
import CharacterInfo from "../../components/character-info/character-info";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import { fetchWithBody } from "../../utils/fetch";
import { Formik } from "formik";
import * as Yup from "yup";

export default function UpdateCharacter() {
  const [character, setCharacter] = React.useState({});
  const { params } = useRouteMatch();

  React.useEffect(() => {
    fetch(`https://aroacedb-back.herokuapp.com/characters/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        setCharacter(resJson.data.character[0]);
      });
  }, []);

  return (
    <div className="Character">
      <SidebarAdmin />
      <div className="character-container">
        <div className="suggest">
          <h2 class="title">Update character</h2>

          <Formik
            enableReinitialize={true}
            initialValues={{
              character_name: character.character_name,
              author: character.author,
              gender: character.gender,
              importance: character.importance,
              pairing_qpp_or_romantic: character.pairing_qpp_or_romantic,
              main_storyseries: character.main_storyseries,
              type_of_rep: character.type_of_rep,
              romantic_orientation: character.romantic_orientation,
              sexual_orientation: character.sexual_orientation,
              genre: character.genre,
              relationships: character.relationships,
              rep_noteswarnings: character.rep_noteswarnings,
            }}
            onSubmit={(values) => {
              console.log(JSON.stringify(values, null, 2));
              fetchWithBody(
                `https://aroacedb-back.herokuapp.com/characters/${params.id}`,
                "PUT",
                values
              )
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);
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
                      <input
                        id="importance"
                        placeholder={character.importance}
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
                          placeholder={character.author}
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
                          placeholder={character.gender}
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
                        <span>Series</span>
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
                        <span>Type of Rep</span>
                        <input
                          id="type_of_rep"
                          placeholder={character.type_of_rep}
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
                          placeholder={character.romantic_orientation}
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
                          placeholder={character.sexual_orientation}
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
                          placeholder={character.genre}
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
                        placeholder={character.relationships}
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
                        placeholder={character.rep_noteswarnings}
                        type="text"
                        value={values.rep_noteswarnings}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="buttons">
                    <button
                      type="button"
                      onClick={() => {
                        console.log("delete from database");
                        fetch(
                          `https://aroacedb-back.herokuapp.com/suggest/${params}`,
                          {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                          }
                        )
                          .then((res) => res.json())
                          .then((resJson) => {
                            console.log(resJson);
                          });

                        //history.push("/success");
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit"
                    >
                      Update Character to Database
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
