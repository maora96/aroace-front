import React from "react";
import "./suggested-character.css";
import { useRouteMatch, useHistory } from "react-router-dom";
import CharacterInfo from "../../components/character-info/character-info";
import Sidebar from "../../components/sidebar/sidebar";
import {
  fazerRequisicaoComBody,
  fetchWithToken,
  fetchWithTokenNoBody,
} from "../../utils/fetch";
import { Formik } from "formik";
import * as Yup from "yup";
import MobileHeader from "../../components/mobile-header/mobile-header";

export default function SuggestedCharacter() {
  const [character, setCharacter] = React.useState({});
  const { params } = useRouteMatch();
  const [token, setToken] = React.useState("");

  const history = useHistory();
  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    fetch(`https://aroacedb-back.herokuapp.com/suggest/characters/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        setCharacter(resJson.data.character[0]);
        console.log(resJson.data.character[0]);
      });
  }, []);

  return (
    <div className="Character">
      <Sidebar />
      <MobileHeader />
      <div className="character-container">
        <div className="suggest">
          <h2 class="title">Suggested character</h2>

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
              cover: character.cover,
              reference: character.reference,
            }}
            onSubmit={(values) => {
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
                });

              fetchWithTokenNoBody(
                `https://aroacedb-back.herokuapp.com/suggest/characters/${params.id}`,
                "DELETE",
                token
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
                      {/* <input
                        id="importance"
                        placeholder={character.importance}
                        type="text"
                        value={values.importance}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /> */}
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
                        {/* <input
                          id="gender"
                          placeholder={character.gender}
                          type="text"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        /> */}
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
                        <span>Romantic orientation</span>
                        {/* <input
                          id="romantic_orientation"
                          placeholder={character.romantic_orientation}
                          type="text"
                          value={values.romantic_orientation}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        /> */}
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
                        <span>Sexual Orientation</span>
                        {/* <input
                          id="sexual_orientation"
                          placeholder={character.sexual_orientation}
                          type="text"
                          value={values.sexual_orientation}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        /> */}
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
                        placeholder={character.cover}
                        type="text"
                        value={values.cover}
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
                        fetchWithTokenNoBody(
                          `https://aroacedb-back.herokuapp.com/suggest/characters/${params.id}`,
                          "DELETE",
                          token
                        )
                          .then((res) => res.json())
                          .then((resJson) => {
                            console.log(resJson);
                            history.push("/success");
                          });

                        history.push("/success");
                      }}
                    >
                      Delete
                    </button>
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
