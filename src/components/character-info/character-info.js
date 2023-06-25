import "./character-info.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { fetchWithTokenNoBody } from "../../utils/fetch";

export default function CharacterInfo(props) {
  const { character } = props;
  const [token, setToken] = React.useState("");
  const history = useHistory();

  // React.useEffect(() => {
  //   const newToken = localStorage.getItem("token");
  //   setToken(newToken);
  // }, []);
  return (
    <div className="CharacterInfo">
      <h2>{character.name}</h2>
      <div className="line">
        <div className="chunk">
          <span>Author</span>
          {character.author}
        </div>
        <div className="chunk">
          <span>Gender</span> {character.gender}
        </div>
        <div className="chunk">
          <span>Pairing</span>
          {character.pairing == null
            ? "Not informed/applicable."
            : character.pairing}
        </div>
      </div>

      <div className="line">
        <div className="chunk">
          <span>Series</span>{" "}
          {character.series == null
            ? "Not informed or not applicable."
            : character.series}
        </div>
        <div className="chunk">
          <span>Type of Rep</span> {character.typeOfRep}
        </div>

        <div className="chunk">
          <span>Importance</span> {character.importance}
        </div>
      </div>

      <div className="line">
        <div className="chunk">
          <span>Romantic orientation</span>{" "}
          {character.romanticOrientation == null
            ? "Not informed."
            : character.romanticOrientation}
        </div>
        <div className="chunk">
          <span>Sexual Orientation</span>{" "}
          {character.sexualOrientation == null
            ? "Not informed."
            : character.sexualOrientation}
        </div>
      </div>

      <div className="line">
        <div className="chunk">
          <span>Genre</span> {character.genres.join(", ")}
        </div>
      </div>

      <div clasName="square">
        <p>
          <span>Relationships</span>
          {character.relationships == null
            ? "Not informed."
            : character.relationships}
        </p>
      </div>

      <div clasName="square">
        <p>
          <span>Notes & Warnings</span>
          {character.notesAndWarnings == null
            ? "No warnings."
            : character.notesAndWarnings}
        </p>
      </div>
      {/* {token ? (
        <div className="buttons-character">
          <button
            onClick={() => {
              fetchWithTokenNoBody(
                `https://aroacedb-back.herokuapp.com/characters/${character.id}`,
                "DELETE",
                token
              )
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);
                });

              fetchWithTokenNoBody(
                `https://aroacedb-back.herokuapp.com/stories/character/${character.id}`,
                "DELETE",
                token
              )
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);
                });

              fetchWithTokenNoBody(
                `https://aroacedb-back.herokuapp.com/reviews/character/${character.id}`,
                "DELETE",
                token
              )
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);
                });

              history.push("/");
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              history.push("/update-character/" + character.id);
            }}
          >
            Update
          </button>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
}
