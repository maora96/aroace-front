import "./contact.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Globe from "../../assets/globe.png";
import Twitter from "../../assets/twitter.png";
import MobileHeader from "../../components/mobile-header/mobile-header";

export default function Contact() {
  return (
    <div className="Contact">
      <Sidebar />
      <MobileHeader />
      <div className="contact-container">
        <div className="contact">
          <h2>Contact</h2>
          <p>
            Want to provide further information on a character? Ran into a bug
            you want to report? Thought of a cool feature you'd want to see (no
            promise!)? We're always open to suggest and information, so contact
            us!
          </p>

          <div className="social-media">
            <a href="https://twitter.com/AroAceDB">
              <img src={Twitter} alt="twitter" />
            </a>
          </div>

          <form>
            <label>
              Name
              <input type="text" placeholder="Name" />
            </label>
            <label>
              E-mail
              <input type="text" placeholder="E-mail" />
            </label>
            <label>
              Message
              <textarea
                name=""
                placeholder="Insert your message here"
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
