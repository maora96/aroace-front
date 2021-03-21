import React, { useContext } from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar/sidebar";
import Stats from "../../components/stats/stats";
import RecentSuggested from "../../components/recent-suggested/recent-suggested";
import MobileHeader from "../../components/mobile-header/mobile-header";
import DataContext from "../../utils/data";
import { fetchWithBody, fetchWithTokenNoBody } from "../../utils/fetch";

function Dashboard() {
  const [recentlyAdded, setRecentlyAdded] = React.useState([]);
  const [stats, setStats] = React.useState([]);

  const [characterCheck, setCharacterCheck] = React.useState(false);
  const [storyCheck, setStoryCheck] = React.useState("");
  const [reviewCheck, setReviewCheck] = React.useState(false);
  const [permissions, setPermissions] = React.useState(false);

  const onChangeValue = (event) => {
    fetchWithBody(
      "https://aroacedb-back.herokuapp.com/permissions/review",
      "POST",
      { checked: event.target.value }
    )
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
      });
  };

  const onChangeValueC = (event) => {
    setCharacterCheck(event.target.value);
    fetchWithBody(
      "https://aroacedb-back.herokuapp.com/permissions/character",
      "POST",
      { checked: event.target.value }
    )
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
      });
  };

  const onChangeValueS = (event) => {
    const newValue = event.target.value;
    setStoryCheck(newValue);
    console.log(storyCheck);
    fetchWithBody(
      "https://aroacedb-back.herokuapp.com/permissions/story",
      "POST",
      { checked: event.target.value }
    )
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
      });
  };

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/permissions")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setCharacterCheck(resJson.data.character.checked);
        setStoryCheck(resJson.data.story.checked);
        setReviewCheck(resJson.data.review.checked);
      });
  }, [permissions]);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/characters/recent")
      .then((res) => res.json())
      .then((resJson) => {
        const suggested = resJson.data.recentlyAdded;
        console.log(suggested);
        setRecentlyAdded(suggested);
      });

    fetch("https://aroacedb-back.herokuapp.com/stats").then((res) =>
      res.json().then((resJson) => {
        const data = resJson.data;
        console.log(data);
        setStats(data);
      })
    );
  }, []);

  return (
    <div className="Dashboard">
      <Sidebar />
      <MobileHeader />

      <div className="dashboard-container">
        <div className="header">
          <h2>Dashboard</h2>
        </div>
        <Stats stats={stats} />
        <RecentSuggested characters={recentlyAdded} />

        <div className="header">
          <a href="/suggested-characters">View All</a>
        </div>

        <div className="export">
          <a href="https://aroacedb-back.herokuapp.com/download/characters">
            Export Characters
          </a>

          <a href="https://aroacedb-back.herokuapp.com/download/stories">
            Export Stories
          </a>

          <a href="https://aroacedb-back.herokuapp.com/download/reviews">
            Export Reviews
          </a>
        </div>

        <div className="toggle-container">
          <div className="toggle-input">
            <span>
              Currently character suggestions are
              <b> {characterCheck ? "enabled" : "disabled"}</b>, story
              suggestions are<b> {storyCheck ? "enabled" : "disabled"}</b> and
              review suggestions are{" "}
              <b>{reviewCheck ? "enabled" : "disabled"}</b>.
            </span>
            <label className="switch">
              Character Suggestions
              <div>
                Enable
                <input
                  type="radio"
                  name="character"
                  value={true}
                  checked={characterCheck ? "checked" : ""}
                  onClick={() => {
                    setCharacterCheck(true);
                    fetchWithBody(
                      "https://aroacedb-back.herokuapp.com/permissions/character",
                      "POST",
                      { checked: true }
                    )
                      .then((res) => res.json())
                      .then((resJson) => {
                        console.log(resJson);
                      });
                  }}
                />
                Disable
                <input
                  type="radio"
                  name="character"
                  value={false}
                  checked={characterCheck ? "" : "checked"}
                  onClick={() => {
                    setCharacterCheck(false);
                    fetchWithBody(
                      "https://aroacedb-back.herokuapp.com/permissions/character",
                      "POST",
                      { checked: false }
                    )
                      .then((res) => res.json())
                      .then((resJson) => {
                        console.log(resJson);
                      });
                  }}
                />
              </div>
            </label>
            <label className="switch">
              Review Suggestions
              <div>
                Enable
                <input
                  type="radio"
                  name="review"
                  value={true}
                  checked={reviewCheck ? "checked" : ""}
                  onClick={() => {
                    setReviewCheck(true);
                    fetchWithBody(
                      "https://aroacedb-back.herokuapp.com/permissions/review",
                      "POST",
                      { checked: true }
                    )
                      .then((res) => res.json())
                      .then((resJson) => {
                        console.log(resJson);
                      });
                  }}
                />
                Disable
                <input
                  type="radio"
                  name="review"
                  value={false}
                  checked={reviewCheck ? "" : "checked"}
                  onClick={() => {
                    setReviewCheck(false);
                    fetchWithBody(
                      "https://aroacedb-back.herokuapp.com/permissions/review",
                      "POST",
                      { checked: false }
                    )
                      .then((res) => res.json())
                      .then((resJson) => {
                        console.log(resJson);
                      });
                  }}
                />
              </div>
            </label>
            <label className="switch">
              Story Suggestions
              <div>
                Enable
                <input
                  type="radio"
                  name="story"
                  value={true}
                  checked={storyCheck ? "checked" : ""}
                  onClick={() => {
                    setStoryCheck(true);
                    fetchWithBody(
                      "https://aroacedb-back.herokuapp.com/permissions/story",
                      "POST",
                      { checked: true }
                    )
                      .then((res) => res.json())
                      .then((resJson) => {
                        console.log(resJson);
                      });
                  }}
                />
                Disable
                <input
                  type="radio"
                  name="story"
                  value={false}
                  checked={storyCheck ? "" : "checked"}
                  onClick={() => {
                    setStoryCheck(false);
                    fetchWithBody(
                      "https://aroacedb-back.herokuapp.com/permissions/story",
                      "POST",
                      { checked: false }
                    )
                      .then((res) => res.json())
                      .then((resJson) => {
                        console.log(resJson);
                      });
                  }}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
