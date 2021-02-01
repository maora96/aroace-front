import React from "react";
import "./mobile-header.css";
import { ReactComponent as Bars } from "../../assets/bars-solid.svg";
import { ReactComponent as Close } from "../../assets/times-solid.svg";

function MobileHeader() {
  const [token, setToken] = React.useState("");
  const [display, setDisplay] = React.useState("menu-container none-display");

  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    console.log(token);
  }, []);
  return (
    <div className="Mobile">
      <header>
        <h1>The Aro Ace Database</h1>
        <Bars
          fill="white"
          height="30px"
          width="30px"
          onClick={() => {
            setDisplay("menu-container block-display");
          }}
        />
      </header>
      <div className={display}>
        <Close
          fill="white"
          height="30px"
          width="30px"
          onClick={() => {
            setDisplay("menu-container none-display");
          }}
        />
        <div className="links">
          <a href="/">Home</a>
          {token ? <a href="/dashboard">Dashboard</a> : ""}
          <a href="/about">About</a>
          <a href="/suggest-character">Suggest a character</a>

          {token ? (
            <div className="more-links">
              <a href="/all-characters">All characters</a>
              <a href="/suggested-characters">Suggested characters</a>
              <a href="/suggested-stories">Suggested stories</a>
              <a href="/suggested-reviews">Suggested Reviews</a>
              <a
                href="/"
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                Logout
              </a>
            </div>
          ) : (
            <a href="/login">Login Admin</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
