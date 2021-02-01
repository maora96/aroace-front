import "./stories.css";
import React from "react";
import StoryInfo from "../../components/story-info/story-info";
import { useHistory } from "react-router-dom";

export default function Stories(props) {
  const { stories, character_id } = props;
  const history = useHistory();
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    console.log(token);
  });

  return (
    <div className="Stories">
      <h3>Stories</h3>
      {stories.map((story) => {
        return <StoryInfo story={story} />;
      })}
      {token ? (
        <a href={`/add-story/${character_id}`}>Add Story</a>
      ) : (
        <a href={`/suggest-story/${character_id}`}>Suggest Story</a>
      )}
    </div>
  );
}
