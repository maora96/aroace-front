import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./success.css";
import MobileHeader from "../../components/mobile-header/mobile-header";

function SuccessSTSC() {
  const { params } = useRouteMatch();
  const history = useHistory();

  return (
    <div className="Home">
      <Sidebar />
      <MobileHeader />
      <div className="home-container">
        <div className="success">
          <h2>Success!</h2>
          <div className="container">
            <p>Would you like to suggest another story for this character?</p>
            <a href={`/suggest-story-sc/${params.id}`}>Suggest another story</a>
          </div>

          <button
            onClick={() => {
              history.go(-1);
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessSTSC;
