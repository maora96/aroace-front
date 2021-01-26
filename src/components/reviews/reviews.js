import "./reviews.css";
import React from "react";
import ReviewInfo from "../../components/review-info/review-info";

export default function Reviews(props) {
  const { reviews } = props;

  return (
    <div className="Reviews">
      <h3>Reviews</h3>
      {reviews.map((review) => {
        return <ReviewInfo review={review} />;
      })}
    </div>
  );
}
