import React from "react";
import "./sidebar-admin.css";
import { ReactComponent as HomeIcon } from "../../assets/home-solid.svg";
import { ReactComponent as DatabaseIcon } from "../../assets/database-solid.svg";
import { ReactComponent as FeatherIcon } from "../../assets/feather-solid.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark-solid.svg";
import { ReactComponent as LoginIcon } from "../../assets/user-cog-solid.svg";

export default function SidebarAdmin() {
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

            <div className="link-container">
              <a href="/dashboard">
                <BookmarkIcon fill="white" height="20px" width="30px" />
                <span>Dashboard</span>
              </a>
            </div>
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
          </div>
          <div className="link-container">
            <a href="/login">
              <LoginIcon fill="white" height="20px" width="30px" />
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
