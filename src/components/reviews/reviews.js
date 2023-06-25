import "./reviews.css";
import React from "react";
import ReviewInfo from "../../components/review-info/review-info";

export default function Reviews(props) {
  const { reviews, character_id } = props;
  const [token, setToken] = React.useState("");
  const [characterCheck, setCharacterCheck] = React.useState("");
  const [storyCheck, setStoryCheck] = React.useState("");
  const [reviewCheck, setReviewCheck] = React.useState("");
  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    console.log(token);

    // fetch("https://aroacedb-back.herokuapp.com/permissions")
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     console.log(resJson);
    //     setCharacterCheck(resJson.data.character.checked);
    //     setStoryCheck(resJson.data.story.checked);
    //     setReviewCheck(resJson.data.review.checked);
    //   });
  });

  const showButtons = () => {
    if (token) {
      return (
        <a
          href={`/add-review/${character_id}`}
          className="bg-secondary dark:bg-darkdetail text-detail dark:text-darksecondary hover:bg-detail hover:text-primary dark:hover:bg-darkprimary dark:hover:text-darksecondary"
        >
          Add Review
        </a>
      );
    } else {
      if (reviewCheck) {
        return <a href={`/suggest-review/${character_id}`}>Suggest Review</a>;
      }
    }
  };
  return (
    <div className="Reviews">
      <h3>Reviews</h3>
      {reviews.length !== 0
        ? reviews.map((review) => {
            return <ReviewInfo review={review} />;
          })
        : "No reviews available."}

      {showButtons()}
      {/* {token ? (
        <a href={`/add-review/${character_id}`}>Add Review</a>
      ) : (
        <a href={`/suggest-review/${character_id}`}>Suggest Review</a>
      )} */}
    </div>
  );
}
