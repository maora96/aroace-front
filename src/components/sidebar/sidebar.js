import React from "react";
import "./sidebar.css";
import { ReactComponent as HomeIcon } from "../../assets/home-solid.svg";
import { ReactComponent as DatabaseIcon } from "../../assets/database-solid.svg";
import { ReactComponent as FeatherIcon } from "../../assets/feather-solid.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark-solid.svg";
import { ReactComponent as LoginIcon } from "../../assets/user-cog-solid.svg";

export default function Sidebar() {
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    console.log(token);
  }, []);
  return (
    <div className="SidebarAdmin">
      <div className="sidebar-container">
        <div className="icons"></div>
        <div className="sidebar-content"></div>
        <div className="sidebar-true-content">
          <div className="top">
            <div className="title-container">
              <h1>The Aroace Database</h1>
            </div>
            <div className="link-container">
              <a href="/">
                <HomeIcon fill="white" height="20px" width="30px" />
                <span>Home</span>
              </a>
            </div>
            {token ? (
              <div className="link-container">
                <a href="/dashboard">
                  <BookmarkIcon fill="white" height="20px" width="30px" />
                  <span>Dashboard</span>
                </a>
              </div>
            ) : (
              ""
            )}
            <div className="link-container">
              <a href="/about">
                <DatabaseIcon fill="white" height="20px" width="30px" />
                <span>About the database</span>
              </a>
            </div>
            <div className="link-container">
              <a href="/suggest-character">
                <FeatherIcon fill="white" height="20px" width="30px" />
                <span>Suggest a character</span>
              </a>
            </div>

            {token ? (
              <div className="div-container">
                <div className="link-container">
                  <a href="/all-characters">
                    <DatabaseIcon fill="white" height="20px" width="30px" />
                    <span>All characters</span>
                  </a>
                </div>
                <div className="link-container">
                  <a href="/suggested-characters">
                    <FeatherIcon fill="white" height="20px" width="30px" />
                    <span>Suggested characters</span>
                  </a>
                </div>

                <div className="link-container">
                  <a href="/suggested-stories">
                    <FeatherIcon fill="white" height="20px" width="30px" />
                    <span>Suggested stories</span>
                  </a>
                </div>

                <div className="link-container">
                  <a href="/suggested-reviews">
                    <FeatherIcon fill="white" height="20px" width="30px" />
                    <span>Suggested reviews</span>
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
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                <LoginIcon fill="white" height="20px" width="30px" />
                <span>Logout</span>
              </a>
            </div>
          ) : (
            <div className="link-container">
              <a href="/login">
                <LoginIcon fill="white" height="20px" width="30px" />
                <span>Admin Login</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
