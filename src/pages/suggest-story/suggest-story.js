import React from "react";
import "./suggest-story.css";
import { useRouteMatch, useHistory } from "react-router-dom";
import CharacterInfo from "../../components/character-info/character-info";
import Sidebar from "../../components/sidebar/sidebar";
import { fazerRequisicaoComBody } from "../../utils/fetch";
import { Formik } from "formik";
import * as Yup from "yup";
import StoryInfo from "../../components/story-info/story-info";
import MobileHeader from "../../components/mobile-header/mobile-header";
import ReactTooltip from "react-tooltip";

export default function SuggestStory() {
  const [character, setCharacter] = React.useState({});
  const { params } = useRouteMatch();
  const history = useHistory();

  React.useEffect(() => {
    fetch(`https://aroacedb-back.herokuapp.com/stories/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        //setCharacter(resJson.data.character[0]);
      });
  }, []);

  return (
    <div className="SuggestStory">
      <Sidebar />
      <MobileHeader />
      <div className="story-container">
        <div className="stories">
          <h3>Suggest a Story</h3>
          <Formik
            initialValues={{
              story_title: "",
              series_or_anthology: "",
              genre: "",
              story_length: "",
              type_of_rep: "",
              character_importance: "",
              rep_noteswarnings: "",
              other_noteswarnings: "",
              cover: "",
            }}
            onSubmit={(values) => {
              values.character_id = params.id;
              console.log(JSON.stringify(values, null, 2));
              fetch("https://aroacedb-back.herokuapp.com/suggest/stories", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              })
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
                        <div className="group">
                          <span
                            className="hover"
                            data-for="tooltip-story-title"
                            data-tip
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="tooltip-story-title"
                            effect="solid"
                            place="top"
                            type="dark"
                          >
                            <div className="tooltip">title</div>
                          </ReactTooltip>
                          <label>Story title</label>
                        </div>

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
                        <div className="group">
                          <span
                            className="hover"
                            data-for="tooltip-story-length"
                            data-tip
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="tooltip-story-length"
                            effect="solid"
                            place="top"
                            type="dark"
                          >
                            <div className="tooltip">length</div>
                          </ReactTooltip>
                          <label>Story length</label>
                        </div>
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
                        <div className="group">
                          <span
                            className="hover"
                            data-for="tooltip-character-importance"
                            data-tip
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="tooltip-character-importance"
                            effect="solid"
                            place="top"
                            type="dark"
                          >
                            <div className="tooltip">character importance</div>
                          </ReactTooltip>
                          <label>Character importance</label>
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
                      </span>
                    </div>
                    <div className="line">
                      <span>
                        <div className="group">
                          <span
                            className="hover"
                            data-for="tooltip-series"
                            data-tip
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="tooltip-series"
                            effect="solid"
                            place="top"
                            type="dark"
                          >
                            <div className="tooltip">series</div>
                          </ReactTooltip>
                          <label>Series title</label>
                        </div>
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
                        <div className="group">
                          <span
                            className="hover"
                            data-for="tooltip-genres"
                            data-tip
                          >
                            ?
                          </span>
                          <ReactTooltip
                            id="tooltip-genres"
                            effect="solid"
                            place="top"
                            type="dark"
                          >
                            <div className="tooltip">genres</div>
                          </ReactTooltip>
                          <label>Genres</label>
                        </div>
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
                          <label>Type of Rep</label>
                        </div>
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
                      <div className="group">
                        <span
                          className="hover"
                          data-for="tooltip-repnoteswarnings"
                          data-tip
                        >
                          ?
                        </span>
                        <ReactTooltip
                          id="tooltip-repnoteswarnings"
                          effect="solid"
                          place="top"
                          type="dark"
                        >
                          <div className="tooltip">rep notes warnings</div>
                        </ReactTooltip>
                        <label>Rep Notes & Warnings</label>
                      </div>
                      <textarea
                        id="rep_noteswarnings"
                        placeholder="representation notes and warnings"
                        value={values.rep_noteswarnings}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </p>
                    <p>
                      <div className="group">
                        <span
                          className="hover"
                          data-for="tooltip-othernoteswarnings"
                          data-tip
                        >
                          ?
                        </span>
                        <ReactTooltip
                          id="tooltip-othernoteswarnings"
                          effect="solid"
                          place="top"
                          type="dark"
                        >
                          <div className="tooltip">other notes warnings</div>
                        </ReactTooltip>
                        <label>Other Notes & Warnings</label>
                      </div>
                      <textarea
                        id="other_noteswarnings"
                        placeholder="other notes and warnings"
                        value={values.other_noteswarnings}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </p>
                    <p>
                      <div className="group">
                        <span
                          className="hover"
                          data-for="tooltip-cover"
                          data-tip
                        >
                          ?
                        </span>
                        <ReactTooltip
                          id="tooltip-cover"
                          effect="solid"
                          place="top"
                          type="dark"
                        >
                          <div className="tooltip">cover</div>
                        </ReactTooltip>
                        <label>Cover</label>
                      </div>
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
