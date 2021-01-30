import "./story-info.css";
import React from "react";
import { fazerRequisicaoComBody } from "../../utils/fetch";
import { useHistory } from "react-router-dom";

export default function StoryInfo(props) {
  const { story } = props;
  const history = useHistory();

  return (
    <div className="StoryInfo">
      <div className="line">
        <h4>{story.story_title}</h4>
        <span>
          <span>{story.length}</span>
        </span>
        <span>
          {story.character_importance === null ? (
            "No info on character importance"
          ) : (
            <span>{story.character_importance} Character</span>
          )}
        </span>
      </div>
      <div className="line">
        {story.series_or_anthology === null ? (
          "No series/anthology"
        ) : (
          <span>
            in the <span>{story.series_or_anthology} </span>series
          </span>
        )}
        <span>
          <span>{story.genre}</span>
        </span>
        <span>
          <span className="to-capitalize">{story.type_of_rep} Rep</span>
        </span>
      </div>
      <p>
        <span>Rep Notes & Warnings</span>
        {story.rep_noteswarnings === null
          ? "No rep notes or warnings."
          : story.rep_noteswarnings}
      </p>
      <p>
        <span>Other Notes & Warnings</span>
        {story.other_noteswarnings === null
          ? "No other notes or warnings."
          : story.other_noteswarnings}
      </p>
      <div className="buttons-story">
        <button
          onClick={() => {
            console.log(
              "https://aroacedb-back.herokuapp.com/stories/" + story.id
            );
            fetch(`https://aroacedb-back.herokuapp.com/stories/${story.id}`, {
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
            history.push("/update-story/" + story.id);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}
