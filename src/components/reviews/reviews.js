import "./reviews.css";
import React from "react";
import ReviewInfo from "../../components/review-info/review-info";

export default function Reviews(props) {
  const { reviews, character_id } = props;

  return (
    <div className="Reviews">
      <h3>Reviews</h3>
      {reviews.length !== 0
        ? reviews.map((review) => {
            return <ReviewInfo review={review} />;
          })
        : "No reviews available."}
      <a href={`/suggest-review/${character_id}`}>Suggest Review</a>
    </div>
  );
}
