import "./story-info.css";
import React from "react";
import { fetchWithTokenNoBody } from "../../utils/fetch";
import parse from "html-react-parser";
import { useHistory } from "react-router-dom";
import { matcher } from "../../utils/dictionary";

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
      {story?.cover ? (
        <img src={story.cover} alt="cover" />
      ) : (
        <img
          src="https://www.globaluniversityalliance.org/wp-content/uploads/2017/10/No-Cover-Image-01.png"
          alt="cover"
        />
      )}

      <div className="story-container">
        <div className="line">
          <h4>{story?.title}</h4>
          <span>
            <span>{story?.length && matcher[story?.length]}</span>
          </span>
        </div>
        <div className="line">
          {story?.series === null ? (
            "No series/anthology"
          ) : (
            <span>
              in the <span>{story?.series} </span>series
            </span>
          )}
        </div>
        <div className="line">
          <span>
            volume <span>{story?.volume}</span>
          </span>
        </div>
        <div className="line">
          <span>
            by <span>{story?.author}</span>
          </span>
        </div>
        <div className="line">
          <span>
            <span>
              {story?.genres?.map((genre) => matcher[genre]).join(", ")}
            </span>
          </span>
          <span>
            <span className="to-capitalize">{matcher[story?.ageGroup]}</span>
          </span>
        </div>

        <div className="text">
          {story?.description?.split("\n\n")?.map((paragraph) => {
            return <p>{paragraph}</p>;
          })}
        </div>
        <p>
          <span>Rep Notes & Warnings</span>
          {story?.repNotesAndWarnings === null
            ? "No rep notes or warnings."
            : story?.repNotesAndWarnings}
        </p>
        <p>
          <span>Other Notes & Warnings</span>
          {story?.notesAndWarnings === null
            ? "No other notes or warnings."
            : story?.notesAndWarnings}
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
