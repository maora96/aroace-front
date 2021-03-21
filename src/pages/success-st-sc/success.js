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
      <div className="home-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="success">
          <h2 className="text-secondary dark:text-darksecondary">Success!</h2>
          <div className="container">
            <p>Would you like to suggest another story for this character?</p>
            <a
              href={`/suggest-story-sc/${params.id}`}
              className="bg-secondary dark:bg-darkdetail text-detail dark:text-darksecondary hover:bg-detail hover:text-primary dark:hover:bg-darkprimary dark:hover:text-darksecondary"
            >
              Suggest another story
            </a>
          </div>

          <button
            className="bg-secondary dark:bg-darkdetail text-detail dark:text-darksecondary hover:bg-detail hover:text-primary dark:hover:bg-darkprimary dark:hover:text-darksecondary"
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
