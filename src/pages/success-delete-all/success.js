import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { useHistory } from "react-router-dom";
import "./success.css";
import MobileHeader from "../../components/mobile-header/mobile-header";

function SuccessDeleteCharacter() {
  const history = useHistory();
  return (
    <div className="Home">
      <Sidebar />
      <MobileHeader />
      <div className="home-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="success">
          <h2 className="text-secondary dark:text-darksecondary">Success!</h2>
          <button
            className="bg-secondary dark:bg-darkdetail text-detail dark:text-darksecondary hover:bg-detail hover:text-primary dark:hover:bg-darkprimary dark:hover:text-darksecondary"
            onClick={() => {
              history.push("/all-characters");
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessDeleteCharacter;
