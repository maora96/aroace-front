import "./stories.css";
import React from "react";
import StoryInfo from "../../components/story-info/story-info";

export default function Stories(props) {
  const { stories, character_id } = props;
  console.log(character_id);
  return (
    <div className="Stories">
      <h3>Stories</h3>
      {stories.map((story) => {
        return <StoryInfo story={story} />;
      })}

      <a href={`/suggest-story/${character_id}`}>Suggest Story</a>
    </div>
  );
}
