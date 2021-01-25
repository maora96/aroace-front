import React from "react";
import "./sidebar-user.css";
import { ReactComponent as HomeIcon } from "../../assets/home-solid.svg";
import { ReactComponent as DatabaseIcon } from "../../assets/database-solid.svg";
import { ReactComponent as FeatherIcon } from "../../assets/feather-solid.svg";
import { ReactComponent as LoginIcon } from "../../assets/user-cog-solid.svg";

export default function SidebarUser() {
  return (
    <div className="SidebarUser">
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
          </div>
          <div className="link-container">
            <a href="/login">
              <LoginIcon fill="white" height="20px" width="30px" />
              <span>Admin Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
