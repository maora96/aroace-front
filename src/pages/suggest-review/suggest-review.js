import React from "react";
import "./suggest-review.css";
import { useRouteMatch } from "react-router-dom";
import CharacterInfo from "../../components/character-info/character-info";
import Sidebar from "../../components/sidebar/sidebar";
import { fazerRequisicaoComBody } from "../../utils/fetch";
import { Formik } from "formik";
import * as Yup from "yup";
import StoryInfo from "../../components/story-info/story-info";
import { useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import MobileHeader from "../../components/mobile-header/mobile-header";

export default function SuggestReview() {
  const [character, setCharacter] = React.useState({});
  const { params } = useRouteMatch();
  const history = useHistory();

  return (
    <div className="SuggestStory">
      <Sidebar />
      <MobileHeader />
      <div className="story-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="stories">
          <h3>Suggest a Review</h3>
          <Formik
            initialValues={{
              review_for: "",
              reviewer: "",
              ownvoice_for: "",
              link: "",
            }}
            onSubmit={(values) => {
              values.character_id = params.id;
              console.log(JSON.stringify(values, null, 2));
              fetch("https://aroacedb-back.herokuapp.com/suggest/reviews", {
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
                  <div className="ReviewInfo">
                    <div className="container">
                      <div className="content-hundred">
                        <div className="block">
                          <label>
                            <div className="group">
                              <span
                                className="hover"
                                data-for="tooltip-review-for"
                                data-tip
                              >
                                ?
                              </span>
                              <ReactTooltip
                                id="tooltip-review-for"
                                effect="solid"
                                place="top"
                                type="dark"
                              >
                                <div className="tooltip">
                                  Story the review was written about.
                                </div>
                              </ReactTooltip>
                              <span>Review for</span>
                            </div>

                            <input
                              id="review_for"
                              type="text"
                              placeholder="Review for"
                              value={values.review_for}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </label>

                          <label>
                            <div className="group">
                              <span
                                className="hover"
                                data-for="tooltip-link"
                                data-tip
                              >
                                ?
                              </span>
                              <ReactTooltip
                                id="tooltip-link"
                                effect="solid"
                                place="top"
                                type="dark"
                              >
                                <div className="tooltip">
                                  A link to where the review is hosted.
                                </div>
                              </ReactTooltip>
                              <span>Link</span>
                            </div>
                            <input
                              id="link"
                              type="text"
                              placeholder="Link"
                              value={values.link}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </label>
                        </div>
                        <span className="block">
                          <label>
                            <div className="group">
                              <span
                                className="hover"
                                data-for="tooltip-reviewer"
                                data-tip
                              >
                                ?
                              </span>
                              <ReactTooltip
                                id="tooltip-reviewer"
                                effect="solid"
                                place="top"
                                type="dark"
                              >
                                <div className="tooltip">
                                  The person who reviewed the story.
                                </div>
                              </ReactTooltip>
                              <span>Reviewer</span>
                            </div>
                            <input
                              id="reviewer"
                              type="text"
                              placeholder="Reviewer"
                              value={values.reviewer}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </label>
                          <label>
                            <div className="group">
                              <span
                                className="hover"
                                data-for="tooltip-ownvoice-for"
                                data-tip
                              >
                                ?
                              </span>
                              <ReactTooltip
                                id="tooltip-ownvoice-for"
                                effect="solid"
                                place="top"
                                type="dark"
                              >
                                <div className="tooltip">
                                  Ownvoices aspects of the review.
                                </div>
                              </ReactTooltip>
                              <span>Ownvoice for</span>
                            </div>
                            <input
                              id="ownvoice_for"
                              type="text"
                              placeholder="Ownvoice for"
                              value={values.ownvoice_for}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="review-right bg-secondary dark:bg-darkdetail text-detail dark:text-darksecondary hover:bg-detail hover:text-primary dark:hover:bg-darkprimary dark:hover:text-darksecondary"
                  >
                    Suggest
                  </button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
