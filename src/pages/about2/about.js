import "./about.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MobileHeader from "../../components/mobile-header/mobile-header";
import parse from "html-react-parser";
import { fetchWithToken, fetchWithTokenNoBody } from "../../utils/fetch";

export default function About2() {
  const [text, setText] = useState("");
  const [updated, setUpdated] = useState("");
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
  }, []);

  return (
    <div className="About">
      <Sidebar />
      <MobileHeader />
      <div className="about-container">
        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </div>

        <button
          onClick={() => {
            ///about/team
            fetchWithToken(
              "https://aroacedb-back.herokuapp.com/about/team",
              "PUT",
              { the_creator: text, gremlins: text, dev: text },
              token
            )
              .then((res) => res.json())
              .then((resJson) => {
                console.log(resJson);
              });
          }}
        >
          Save
        </button>

        <button
          onClick={() => {
            ///about/team
            fetchWithTokenNoBody(
              "https://aroacedb-back.herokuapp.com/about/team",
              "GET",

              token
            )
              .then((res) => res.json())
              .then((resJson) => {
                console.log(resJson);
                setUpdated(resJson.data.about.dev);
              });
          }}
        >
          Get updated
        </button>
        <div>
          <h2>Content</h2>
          {console.log(text)}
          {console.log(updated)}
          <p>{parse(updated)}</p>
        </div>
      </div>
    </div>
  );
}
