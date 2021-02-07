import "./story-info.css";
import React from "react";
import { fetchWithTokenNoBody } from "../../utils/fetch";
import { useHistory } from "react-router-dom";

export default function StoryInfo(props) {
  const { story } = props;
  const [token, setToken] = React.useState("");
  const history = useHistory();
  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    console.log(token);
  }, []);
  return (
    <div className="StoryInfo">
      {story.cover ? (
        <img src={story.cover} alt="cover" />
      ) : (
        <img
          src="https://www.globaluniversityalliance.org/wp-content/uploads/2017/10/No-Cover-Image-01.png"
          alt="cover"
        />
      )}

      <div className="story-container">
        <div className="line">
          <h4>{story.story_title}</h4>
          <span>
            <span>{story.story_length}</span>
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
        </div>
        <div className="line">
          <span>
            <span>{story.genre}</span>
          </span>
          <span>
            <span className="to-capitalize">{story.type_of_rep} Rep</span>
          </span>
        </div>

        <div className="line">
          <span>
            {story.character_importance === null ? (
              "No info on character importance"
            ) : (
              <span>{story.character_importance} Character</span>
            )}
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
        {token ? (
          <div className="buttons-story">
            <button
              onClick={() => {
                fetchWithTokenNoBody(
                  `https://aroacedb-back.herokuapp.com/stories/${story.id}`,
                  "DELETE",
                  token
                )
                  .then((res) => res.json())
                  .then((resJson) => {
                    console.log(resJson);
                    window.location.reload();
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
