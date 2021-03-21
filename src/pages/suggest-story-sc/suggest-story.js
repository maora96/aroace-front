import React from "react";
import "./suggest-story.css";
import { useRouteMatch, useHistory } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import { Formik } from "formik";
import MobileHeader from "../../components/mobile-header/mobile-header";
import ReactTooltip from "react-tooltip";

export default function SuggestStorySC() {
  const { params } = useRouteMatch();
  const history = useHistory();

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
              fetch("https://aroacedb-back.herokuapp.com/suggest/sc/stories", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              })
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);
                  history.push(`/success-stsc/${params.id}`);
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
                            <div className="tooltip">Story or book title</div>
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
                            <div className="tooltip">
                              {" "}
                              <ul>
                                <li>
                                  <strong>Short story:</strong>The character is
                                  at the heart of the story’s central storyline
                                </li>
                                <li>
                                  <strong>Novella:</strong>The character plays
                                  an important role in the story and is
                                  frequently on page
                                </li>
                                <li>
                                  <strong>Novel (short):</strong>The character
                                  plays a minor role in the story
                                </li>

                                <li>
                                  <strong>Novel (long):</strong>More than 80,000
                                  words
                                </li>
                                <li>
                                  <strong>Anthology:</strong>Short story is part
                                  of an anthology
                                </li>
                                <li>
                                  <strong>Webseries:</strong>
                                  Published in several installments on the
                                  internet (blog, Wattpad, etc.)
                                </li>
                              </ul>
                            </div>
                          </ReactTooltip>
                          <label>Story length</label>
                        </div>
                        <span>
                          <select
                            name="story_length"
                            value={values.story_length}
                            onChange={handleChange}
                            onBlur={handleChange}
                          >
                            <option value="" label="Select one" />
                            <option value="Short story" label="Short story" />
                            <option value="Novella" label="Novella" />
                            <option
                              value="Novel (short)"
                              label="Novel (short)"
                            />
                            <option value="Novel (long)" label="Novel (long)" />
                            <option value="Anthology" label="Anthology" />
                            <option value="Webseries" label="Webseries" />
                          </select>
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
                            <div className="tooltip">
                              Name of the series (if applicable). Short stories
                              in an anthology can list the anthology name here.
                            </div>
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
                            <div className="tooltip">{`Story's literary genre. List in alphabetical order, i.e. "Contemporary, Romance, Young Adult".`}</div>
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
                            <div className="tooltip">
                              <ul>
                                <li>
                                  <strong>Word of God:</strong>The character’s
                                  sexuality is not explicit on page, but the
                                  author has confirmed it.
                                </li>
                                <li>
                                  <strong>On page:</strong>The character’s
                                  sexuality is explicitly demonstrated within
                                  the text. It should be showed or discussed to
                                  an extent that makes it clear to the readers.
                                </li>
                                <li>
                                  <strong>Word used:</strong>The identity is
                                  stated using the actual word (usually also On
                                  Page)
                                </li>
                              </ul>
                            </div>
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
                          <div className="tooltip">
                            Any noteworthy information about the representation,
                            whether it is tropes (exile or dead ace, allo
                            saviour, etc.) or facets of it (sex
                            repulsed/averse/positive, touch averse, etc.).
                          </div>
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
                          <div className="tooltip">
                            Any noteworthy information about the representation,
                            whether it is tropes (exile or dead ace, allo
                            saviour, etc.) or facets of it (sex
                            repulsed/averse/positive, touch averse, etc.)
                          </div>
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
                          <div className="tooltip">URL to cover image.</div>
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
