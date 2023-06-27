import "./stories.css";
import React from "react";
import StoryInfo from "../../components/story-info/story-info";
import { useHistory } from "react-router-dom";

export default function Stories(props) {
  const { stories, character_id } = props;
  const history = useHistory();
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

    console.log("stories", stories);
  }, []);

  const showButtons = () => {
    if (token) {
      return (
        <a
          href={`/add-story/${character_id}`}
          className="bg-secondary dark:bg-darkdetail text-detail dark:text-darksecondary hover:bg-detail hover:text-primary dark:hover:bg-darkprimary dark:hover:text-darksecondary"
        >
          Add Story
        </a>
      );
    } else {
      if (storyCheck) {
        console.log("aaaaa");
        return (
          <a
            href={`/suggest-story/${character_id}`}
            className="bg-secondary dark:bg-darkdetail text-detail dark:text-darksecondary hover:bg-detail hover:text-primary dark:hover:bg-darkprimary dark:hover:text-darksecondary"
          >
            Suggest Story
          </a>
        );
      }
    }
  };
  return (
    <div className="Stories">
      <h3>Stories</h3>
      {stories
        ?.sort((a, b) => Number(a.volume) - Number(b.volume))
        .map((story) => {
          return <StoryInfo story={story} key={story.id} />;
        })}
      {showButtons()}
      {/* {token ? (
        <a href={`/add-story/${character_id}`}>Add Story</a>
      ) : (
        <a href={`/suggest-story/${character_id}`}>Suggest Story</a>
      )} */}
    </div>
  );
}
