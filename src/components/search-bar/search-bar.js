import React from "react";
import "./search-bar.css";
import { ReactComponent as ButtonIcon } from "../../assets/chevron-right-solid.svg";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { fetchNoTokenNobody, fetchWithBody } from "../../utils/fetch";

function SearchBar(props) {
  const { page, params } = props;
  const history = useHistory();

  return (
    <div className="SearchBar">
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
          story_length: "",
        }}
        onSubmit={(values) => {
          let params_search = [];
          for (let key in values) {
            if (values[key] !== "") {
              console.log(key + " is not blank.");
              if (params_search.length > 0) {
                params_search.push("&");
                params_search.push(`${key}=${values[key]}`);
              } else {
                params_search.push(`${key}=${values[key]}`);
              }
            }
          }
          let final = params_search.join("");

          let url = `https://aroacedb-back.herokuapp.com/character/infinite?${final}`;
          console.log(url);
          history.push(`/results?${final}`);
        }}
      >
        {(props) => {
          const { values, handleChange, handleBlur, handleSubmit } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <label>
                  <span>Character name</span>
                  <input
                    type="text"
                    placeholder="Character name"
                    name="character_name"
                    value={values.character_name}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </label>
                <label>
                  <span>Importance</span>
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
                </label>
                <label>
                  <span>Author</span>
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={values.author}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </label>
                <label>
                  <span>Gender</span>
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
                </label>
                <label>
                  <span>Pairing</span>
                  <input
                    type="text"
                    placeholder="Pairing"
                    name="pairing_qpp_or_romantic"
                    value={values.pairing_qpp_or_romantic}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </label>
                <label>
                  <span>Series</span>
                  <input
                    type="text"
                    placeholder="Series"
                    name="main_storyseries"
                    value={values.main_storyseries}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </label>
                <label>
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
                </label>
                <label>
                  <span>Romantic Orientation</span>
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
                    <option value="Heteroromantic" label="Heteroromantic" />
                    <option value="Homoromantic" label="Homoromantic" />
                    <option value="Panromantic" label="Panromantic" />
                    <option value="Queer" label="Queer" />
                    <option value="WTFRomantic" label="WTFRomantic" />
                  </select>
                </label>
                <label>
                  <span>Sexual Orientation</span>
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
                </label>
                <label>
                  <span>Genre</span>
                  <input
                    type="text"
                    placeholder="Genre"
                    name="genre"
                    value={values.genre}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </label>
                <label>
                  <span>Relationships</span>
                  <input
                    type="text"
                    placeholder="Relationships"
                    name="relationships"
                    value={values.relationships}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </label>
                <label>
                  <span>Story Length</span>
                  <select
                    name="story_length"
                    value={values.story_length}
                    onChange={handleChange}
                    onBlur={handleChange}
                  >
                    <option value="" label="Select one" />
                    <option value="Novel (short)" label="Novel (short)" />
                    <option value="Novel (long)" label="Novel (long)" />
                    <option value="Short story" label="Short story" />
                    <option value="Novella" label="Novella" />
                    <option value="Anthology" label="Anthology" />
                    <option value="Webseries" label="Webseries" />
                  </select>
                </label>
              </div>

              <button type="submit">Search</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default SearchBar;
