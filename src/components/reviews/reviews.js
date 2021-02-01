import "./reviews.css";
import React from "react";
import ReviewInfo from "../../components/review-info/review-info";

export default function Reviews(props) {
  const { reviews, character_id } = props;
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    console.log(token);
  });
  return (
    <div className="Reviews">
      <h3>Reviews</h3>
      {reviews.length !== 0
        ? reviews.map((review) => {
            return <ReviewInfo review={review} />;
          })
        : "No reviews available."}
      {token ? (
        <a href={`/add-review/${character_id}`}>Add Review</a>
      ) : (
        <a href={`/suggest-review/${character_id}`}>Suggest Review</a>
      )}
    </div>
  );
}
