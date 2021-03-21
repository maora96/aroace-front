import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { useHistory } from "react-router-dom";
import "./success.css";
import MobileHeader from "../../components/mobile-header/mobile-header";

function Success() {
  const history = useHistory();
  return (
    <div className="Home">
      <Sidebar />
      <MobileHeader />
      <div className="home-container">
        <div className="success">
          <h2>Success!</h2>
          <button
            onClick={() => {
              history.go(-2);
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
