import React from "react";
import "./suggest-story.css";
import { useRouteMatch } from "react-router-dom";
import CharacterInfo from "../../components/character-info/character-info";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import { fazerRequisicaoComBody } from "../../utils/fetch";
import { Formik } from "formik";
import * as Yup from "yup";
import SidebarUser from "../../components/sidebar-user/sidebar-user";
import StoryInfo from "../../components/story-info/story-info";

export default function SuggestStory() {
  const [character, setCharacter] = React.useState({});
  const { params } = useRouteMatch();

  React.useEffect(() => {
    fetch(`https://aroacedb-back.herokuapp.com/characters/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        setCharacter(resJson.dados.character[0]);
      });
  }, []);

  return (
    <div className="SuggestStory">
      <SidebarUser />
      <div className="story-container">
        <div className="stories">
          <h3>Suggest a Story</h3>
          <Formik
            initialValues={{
              title: "",
              series_or_antho: "",
              genre: "",
              story_length: "",
              type_of_rep: "",
              importance: "",
              rep_noteswarnings: "",
              other_noteswarnings: "",
            }}
            onSubmit={(values) => {
              values.character_id = params.id;
              console.log(JSON.stringify(values, null, 2));
              fetch("https://aroacedb-back.herokuapp.com/stories", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: values,
              })
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
                  <div className="StoryInfo">
                    <div className="line">
                      <h4>
                        <label>Story title</label>
                        <input
                          id="title"
                          type="text"
                          placeholder="Story title"
                          value={values.title}
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
                          id="importance"
                          type="text"
                          placeholder="Character importance"
                          value={values.importance}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </span>
                    </div>
                    <div className="line">
                      <span>
                        <label>Series title</label>
                        <input
                          id="series_or_antho"
                          type="text"
                          placeholder="Series title"
                          value={values.series_or_antho}
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
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit"
                    >
                      Suggest
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
