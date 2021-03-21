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
    <div className="StoryInfo dark:bg-darkdetail dark:text-darksecondary">
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
          <h4 className="dark:bg-darkdetail dark:text-darksecondary">
            {story.story_title}
          </h4>
          <span>
            <span className="dark:bg-darkdetail dark:text-darksecondary">
              {story.story_length}
            </span>
          </span>
        </div>
        <div className="line">
          {story.series_or_anthology === null ? (
            "No series/anthology"
          ) : (
            <span>
              in the{" "}
              <span className="dark:bg-darkdetail dark:text-darksecondary">
                {story.series_or_anthology}{" "}
              </span>
              series
            </span>
          )}
        </div>
        <div className="line">
          <span>
            <span className="dark:bg-darkdetail dark:text-darksecondary">
              {story.genre}
            </span>
          </span>
          <span>
            <span className="to-capitalize dark:bg-darkdetail dark:text-darksecondary">
              {story.type_of_rep} Rep
            </span>
          </span>
        </div>

        <div className="line">
          <span>
            {story.character_importance === null ? (
              "No info on character importance"
            ) : (
              <span className="dark:bg-darkdetail dark:text-darksecondary">
                {story.character_importance} Character
              </span>
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
              className="bg-secondary dark:bg-darksecondary text-detail dark:text-darkdetail hover:bg-detail hover:text-primary dark:hover:bg-darkprimary dark:hover:text-darksecondary"
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
              className="bg-secondary dark:bg-darksecondary text-detail dark:text-darkdetail hover:bg-detail hover:text-primary dark:hover:bg-darkprimary dark:hover:text-darksecondary"
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
