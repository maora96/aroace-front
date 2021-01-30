import React from "react";
import "./suggest-review.css";
import { useRouteMatch } from "react-router-dom";
import CharacterInfo from "../../components/character-info/character-info";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import { fazerRequisicaoComBody } from "../../utils/fetch";
import { Formik } from "formik";
import * as Yup from "yup";
import SidebarUser from "../../components/sidebar-user/sidebar-user";
import StoryInfo from "../../components/story-info/story-info";
import { useHistory } from "react-router-dom";

export default function SuggestReview() {
  const [character, setCharacter] = React.useState({});
  const { params } = useRouteMatch();
  const history = useHistory();

  return (
    <div className="SuggestStory">
      <SidebarUser />
      <div className="story-container">
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
                            Review for
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
                            Link
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
                            Reviewer
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
                            Ownvoices for
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
                  <button type="submit" className="review-right">
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
