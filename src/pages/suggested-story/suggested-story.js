import React from "react";
import "./suggested-story.css";
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
import StoryInfo from "../../components/story-info/story-info";
import MobileHeader from "../../components/mobile-header/mobile-header";

export default function SuggestedStory() {
  const [story, setStory] = React.useState({});
  const [token, setToken] = React.useState("");
  const [cover, setCover] = React.useState("");
  const { params } = useRouteMatch();
  const history = useHistory();

  React.useEffect(() => {
    const newToken = localStorage.getItem("token");

    setToken(newToken);
    fetch(`https://aroacedb-back.herokuapp.com/suggest/stories/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.data.story[0]);
        setStory(resJson.data.story[0]);
        console.log(resJson.data.story[0].cover);
        setCover(resJson.data.story[0].cover);
      });
  }, []);

  return (
    <div className="SuggestStory">
      <Sidebar />
      <MobileHeader />
      <div className="story-container">
        <div className="stories">
          <h3>Suggested Story</h3>

          <Formik
            enableReinitialize={true}
            initialValues={{
              story_title: story.story_title,
              series_or_anthology: story.series_or_anthology,
              genre: story.genre,
              story_length: story.story_length,
              type_of_rep: story.type_of_rep,
              character_importance: story.character_importance,
              rep_noteswarnings: story.rep_noteswarnings,
              other_noteswarnings: story.other_noteswarnings,
              character_id: story.character_id,
              cover: story.cover,
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
                });
              fetchWithTokenNoBody(
                `https://aroacedb-back.herokuapp.com/suggest/stories/${story.id}`,
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
                    <img src={values.cover} alt="cover" />
                    <div className="buttons">
                      <button
                        onClick={() => {
                          fetchWithTokenNoBody(
                            `https://aroacedb-back.herokuapp.com/suggest/stories/${story.id}`,
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
                        Delete
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="submit"
                      >
                        Add Story to Database
                      </button>
                    </div>
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
