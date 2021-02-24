import "./contact.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Globe from "../../assets/globe.png";
import Twitter from "../../assets/twitter.png";
import MobileHeader from "../../components/mobile-header/mobile-header";
import { Formik } from "formik";
import { fetchWithBody } from "../../utils/fetch";
import { useHistory } from "react-router-dom";

export default function Contact() {
  const history = useHistory();
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

          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            onSubmit={(values) => {
              fetch("https://aroacedb-back.herokuapp.com/email", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify(values),
              })
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);

                  console.log(JSON.stringify(values, null, 2));
                  history.push("/success");
                  // redirect to success page
                });
            }}
          >
            {(props) => {
              const { values, handleChange, handleBlur, handleSubmit } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <label>
                    Name
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                  <label>
                    E-mail
                    <input
                      type="text"
                      placeholder="E-mail"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                  <label>
                    Message
                    <textarea
                      placeholder="Insert your message here"
                      id="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                  </label>
                  <button type="submit">Submit</button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
