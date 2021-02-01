import React from "react";
import "./add-review.css";
import { useRouteMatch } from "react-router-dom";

import { fetchWithToken } from "../../utils/fetch";
import { Formik } from "formik";
import * as Yup from "yup";
import Sidebar from "../../components/sidebar/sidebar";
import StoryInfo from "../../components/story-info/story-info";
import { useHistory } from "react-router-dom";

export default function AddReview() {
  const { params } = useRouteMatch();
  const [token, setToken] = React.useState("");
  const history = useHistory();

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
          <h3>Add a Review</h3>
          <Formik
            enableReinitialize={true}
            initialValues={{
              review_for: "",
              reviewer: "",
              ownvoice_for: "",
              link: "",
              character_id: params.id,
            }}
            onSubmit={(values) => {
              console.log(JSON.stringify(values, null, 2));
              fetchWithToken(
                `https://aroacedb-back.herokuapp.com/reviews`,
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
                              id="ownvoices_for"
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
                    Add Review to Database
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
