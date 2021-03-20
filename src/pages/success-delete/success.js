import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { useHistory } from "react-router-dom";
import "./success.css";
import MobileHeader from "../../components/mobile-header/mobile-header";

function SuccessDelete() {
  const history = useHistory();
  return (
    <div className="Home">
      <Sidebar />
      <MobileHeader />
      <div className="home-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="success">
          <h2>Success!</h2>
          <button
            onClick={() => {
              history.push("/suggested-characters");
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessDelete;
