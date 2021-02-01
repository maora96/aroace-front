import React from "react";
import "./add-story.css";
import { useRouteMatch, useHistory } from "react-router-dom";
import CharacterInfo from "../../components/character-info/character-info";
import Sidebar from "../../components/sidebar/sidebar";
import { fetchWithToken } from "../../utils/fetch";
import { Formik } from "formik";
import * as Yup from "yup";
import StoryInfo from "../../components/story-info/story-info";

export default function AddStory() {
  const [character, setCharacter] = React.useState({});
  const [token, setToken] = React.useState("");
  const { params } = useRouteMatch();
  const history = useHistory();
  const [file, setFile] = React.useState("");

  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    console.log(token);
  }, []);

  return (
    <div className="SuggestStory">
      <Sidebar />
      <div className="story-container">
        <div className="stories">
          <h3>Add Story</h3>

          <Formik
            enableReinitialize={true}
            initialValues={{
              story_title: "",
              series_or_anthology: "",
              genre: "",
              story_length: "",
              type_of_rep: "",
              character_importance: "",
              rep_noteswarnings: "",
              other_noteswarnings: "",
              character_id: params.id,
              cover: "",
            }}
            onSubmit={(values) => {
              console.log(JSON.stringify(values, null, 2));
              fetchWithToken(
                `https://aroacedb-back.herokuapp.com/stories`,
                "POST",
                values,
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
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="StoryInfo">
                    <div className="line">
                      <h4>
                        <label>Story title</label>
                        <input
                          id="story_title"
                          type="text"
                          placeholder="Story title"
                          value={values.story_title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </h4>
                      <span>
                        <label>Story length</label>
                        <span>
                          <input
                            id="story_length"
                            type="text"
                            placeholder="Story length"
                            value={values.story_length}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </span>
                      </span>
                      <span>
                        <label>Character importance</label>
                        <input
                          id="chracter_importance"
                          type="text"
                          placeholder="Character importance"
                          value={values.character_importance}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </span>
                    </div>
                    <div className="line">
                      <span>
                        <label>Series title</label>
                        <input
                          id="series_or_anthology"
                          type="text"
                          placeholder="Series title"
                          value={values.series_or_anthology}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </span>
                      <span>
                        <label>Genres</label>
                        <span>
                          <input
                            id="genre"
                            type="text"
                            placeholder="Genre"
                            value={values.genre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </span>
                      </span>
                      <span>
                        <label>Type of Rep</label>
                        <span className="to-capitalize">
                          <input
                            id="type_of_rep"
                            type="text"
                            placeholder="type of rep"
                            value={values.type_of_rep}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </span>
                      </span>
                    </div>
                    <p>
                      <span>Rep Notes & Warnings</span>
                      <textarea
                        id="rep_noteswarnings"
                        placeholder="representation notes and warnings"
                        value={values.rep_noteswarnings}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </p>
                    <p>
                      <span>Other Notes & Warnings</span>
                      <textarea
                        id="other_noteswarnings"
                        placeholder="other notes and warnings"
                        value={values.other_noteswarnings}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </p>
                    <p>
                      <span>Cover</span>
                      <input
                        id="cover"
                        type="text"
                        placeholder="cover"
                        value={values.cover}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit"
                    >
                      Add Story to Database
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
