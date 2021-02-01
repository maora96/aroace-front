import "./review-info.css";
import React from "react";
import ExternalLink from "../../assets/external-link.png";
import { useHistory } from "react-router-dom";
import { fetchWithTokenNoBody } from "../../utils/fetch";

export default function ReviewInfo(props) {
  const { review } = props;
  const history = useHistory();
  const [token, setToken] = React.useState("");
  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    console.log(token);
  }, []);
  return (
    <div className="ReviewInfo">
      <div className="container">
        <div className="content">
          <h4>{review.review_for}</h4>
          <span>
            by {review.reviewer} | Ownvoices for {review.ownvoice_for}.
          </span>
        </div>

        <a href={review.link}>
          <img src={ExternalLink} alt="link para resenha em site externo" />
        </a>
      </div>
      {token ? (
        <div className="buttons-review">
          <button
            onClick={() => {
              fetchWithTokenNoBody(
                `https://aroacedb-back.herokuapp.com/reviews/${review.id}`,
                "DELETE",
                token
              )
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);
                });
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              history.push("/update-review/" + review.id);
            }}
          >
            Update
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
