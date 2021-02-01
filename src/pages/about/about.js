import "./about.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Globe from "../../assets/globe.png";
import Twitter from "../../assets/twitter.png";
import MobileHeader from "../../components/mobile-header/mobile-header";

export default function About() {
  return (
    <div className="About">
      <Sidebar />
      <MobileHeader />
      <div className="about-container">
        <div className="about">
          <h2>About the creator</h2>
          <p>
            there will be something about claudie here soon. meanwhile, you can
            visit her website at{" "}
            <a href="http://claudiearseneault.com/">claudiearseneault.com</a>!
          </p>

          <a href="https://ko-fi.com/claudie" className="kofi-link">
            Buy Claudie a Ko-fi!
          </a>
          <div className="social-media">
            <a href="https://twitter.com/ClH2OArs">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="http://claudiearseneault.com/">
              <img src={Globe} alt="website" />
            </a>
          </div>
        </div>

        <div className="about">
          <h2>Database strucutre</h2>
          <p>there will be something about the database here soon!</p>
        </div>

        <div className="about">
          <h2>About the dev</h2>
          <p>
            there will be something about me here soon. meanwhile, you can visit
            me at <a href="https://twitter.com/nyphren">@nyphren</a>!
          </p>

          <a href="https://ko-fi.com/nyphren" className="kofi-link">
            Buy nyphren a Ko-fi!
          </a>
          <div className="social-media">
            <a href="https://twitter.com/nyphren">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="https://nyphren.netlify.app/">
              <img src={Globe} alt="website" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
