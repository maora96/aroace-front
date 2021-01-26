import "./review-info.css";
import React from "react";
import ExternalLink from "../../assets/external-link.png";

export default function ReviewInfo(props) {
  const { review } = props;
  console.log(review);
  return (
    <div className="ReviewInfo">
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
  );
}
