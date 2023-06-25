import React from "react";
import "./sidebar.css";
import { ReactComponent as HomeIcon } from "../../assets/home-solid.svg";
import { ReactComponent as DatabaseIcon } from "../../assets/database-solid.svg";
import { ReactComponent as FeatherIcon } from "../../assets/feather-solid.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark-solid.svg";
import { ReactComponent as LoginIcon } from "../../assets/user-cog-solid.svg";

export default function Sidebar() {
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
  }, [characterCheck]);
  return (
    <div className="SidebarAdmin">
      <div className="sidebar-container bg-primary dark:bg-darkprimary  transition duration-500">
        <div className="icons bg-detail dark:bg-darkdetail"></div>
        <div className="sidebar-content"></div>
        <div className="sidebar-true-content">
          <div className="top">
            <div className="title-container">
              <h1 className="border text-secondary font-bold border-secondary dark:text-darksecondary dark:border-darksecondary">
                The Aroace Database
              </h1>
            </div>

            <div className="link-container">
              <a href="/" className="text-secondary dark:text-darksecondary">
                <HomeIcon fill="white" height="20px" width="30px" />
                <span className="hover:bg-detail dark:hover:bg-darkdetail">
                  Home
                </span>
              </a>
            </div>
            {token ? (
              <div className="link-container">
                <a
                  href="/dashboard"
                  className="text-secondary dark:text-darksecondary"
                >
                  <BookmarkIcon fill="white" height="20px" width="30px" />
                  <span className="hover:bg-detail dark:hover:bg-darkdetail">
                    Dashboard
                  </span>
                </a>
              </div>
            ) : (
              ""
            )}
            <div className="link-container">
              <a
                href="/about"
                className="text-secondary dark:text-darksecondary"
              >
                <DatabaseIcon fill="white" height="20px" width="30px" />
                <span className="hover:bg-detail dark:hover:bg-darkdetail">
                  About the database
                </span>
              </a>
            </div>
            <div className="link-container">
              <a
                href="/about-the-team"
                className="text-secondary dark:text-darksecondary"
              >
                <DatabaseIcon fill="white" height="20px" width="30px" />
                <span className="hover:bg-detail dark:hover:bg-darkdetail">
                  About the team
                </span>
              </a>
            </div>
            <div className="link-container">
              <a
                href="/all-characters"
                className="text-secondary dark:text-darksecondary"
              >
                <DatabaseIcon fill="white" height="20px" width="30px" />
                <span className="hover:bg-detail dark:hover:bg-darkdetail">
                  All characters
                </span>
              </a>
            </div>
            {characterCheck ? (
              <div className="link-container">
                <a
                  href="/suggest-character"
                  className="text-secondary dark:text-darksecondary"
                >
                  <FeatherIcon fill="white" height="20px" width="30px" />
                  <span className="hover:bg-detail dark:hover:bg-darkdetail">
                    Suggest a character
                  </span>
                </a>
              </div>
            ) : (
              ""
            )}

            <div className="link-container">
              <a
                href="/contact"
                className="text-secondary dark:text-darksecondary"
              >
                <FeatherIcon fill="white" height="20px" width="30px" />
                <span className="hover:bg-detail dark:hover:bg-darkdetail">
                  Contact
                </span>
              </a>
            </div>

            {token ? (
              <div className="div-container">
                <div className="link-container">
                  <a
                    href="/suggested-characters"
                    className="text-secondary dark:text-darksecondary"
                  >
                    <FeatherIcon fill="white" height="20px" width="30px" />
                    <span className="hover:bg-detail dark:hover:bg-darkdetail">
                      Suggested characters
                    </span>
                  </a>
                </div>

                <div className="link-container">
                  <a
                    href="/suggested-stories"
                    className="text-secondary dark:text-darksecondary"
                  >
                    <FeatherIcon fill="white" height="20px" width="30px" />
                    <span className="hover:bg-detail dark:hover:bg-darkdetail">
                      Suggested stories
                    </span>
                  </a>
                </div>

                <div className="link-container">
                  <a
                    href="/sc-suggested-stories"
                    className="text-secondary dark:text-darksecondary"
                  >
                    <FeatherIcon fill="white" height="20px" width="30px" />
                    <span className="hover:bg-detail dark:hover:bg-darkdetail">
                      SC Suggested stories
                    </span>
                  </a>
                </div>

                <div className="link-container">
                  <a
                    href="/suggested-reviews"
                    className="text-secondary dark:text-darksecondary"
                  >
                    <FeatherIcon fill="white" height="20px" width="30px" />
                    <span className="hover:bg-detail dark:hover:bg-darkdetail">
                      Suggested reviews
                    </span>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {token ? (
            <div className="link-container">
              <a
                href="/"
                className="text-secondary dark:text-darksecondary"
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                <LoginIcon fill="white" height="20px" width="30px" />
                <span className="hover:bg-detail dark:hover:bg-darkdetail">
                  Logout
                </span>
              </a>
            </div>
          ) : (
            <div className="link-container">
              <a
                href="/login"
                className="text-secondary dark:text-darksecondary"
              >
                <LoginIcon fill="white" height="20px" width="30px" />
                <span className="hover:bg-detail dark:hover:bg-darkdetail">
                  Admin Login
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
