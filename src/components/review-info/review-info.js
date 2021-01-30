import "./review-info.css";
import React from "react";
import ExternalLink from "../../assets/external-link.png";
import { useHistory } from "react-router-dom";

export default function ReviewInfo(props) {
  const { review } = props;
  const history = useHistory();
  console.log(review);
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
      <div className="buttons-review">
        <button
          onClick={() => {
            fetch(`https://aroacedb-back.herokuapp.com/reviews/${review.id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
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
    </div>
  );
}
