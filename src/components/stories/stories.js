import "./stories.css";
import React from "react";
import StoryInfo from "../../components/story-info/story-info";

export default function Stories(props) {
  const { stories } = props;

  return (
    <div className="Stories">
      <h3>Stories</h3>
      {stories.map((story) => {
        return <StoryInfo story={story} />;
      })}
    </div>
  );
}
