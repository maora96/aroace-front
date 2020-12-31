import React from "react";
import { fazerRequisicaoComBody } from "../../utils/fetch";
import Header from "../../components/header/header";
import { useHistory } from "react-router-dom";

function SuggestCharacter() {
  const history = useHistory();
  const [characterName, setCharacterName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [series, setSeries] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [relationships, setRelationships] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [importance, setImportance] = React.useState("");
  const [type, setType] = React.useState("");
  const [romanticOrientation, setRomanticOrientation] = React.useState("");
  const [sexualOrientation, setSexualOrientation] = React.useState("");
  const [pairings, setPairings] = React.useState("");
  return (
    <div>
      <Header />
      <div className="suggest-character">
        <form
          onSubmit={(event) => {
            //const novoToken = localStorage.getItem("token");
            event.preventDefault();
            fazerRequisicaoComBody(
              "https://aroacedb-back.herokuapp.com/suggest",
              "POST",
              {
                character_name: characterName,
                gender,
                main_storyseries: series,
                author,
                genre,
                relationships,
                rep_noteswarnings: notes,
                importance,
                type_of_rep: type,
                romantic_orientation: romanticOrientation,
                sexual_orientation: sexualOrientation,
                pairing_qpp_or_romantic: pairings,
              }
              //
            )
              .then((res) => res.json())
              .then((resJson) => {
                console.log(resJson);

                history.push("/success");
              });
          }}
        >
          <label>
            Character name
            <input
              type="text"
              onChange={(event) => {
                setCharacterName(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Gender
            <input
              type="text"
              onChange={(event) => {
                setGender(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Series
            <input
              type="text"
              onChange={(event) => {
                setSeries(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Author
            <input
              type="text"
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Genre
            <input
              type="text"
              onChange={(event) => {
                setGenre(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Relationships
            <input
              type="text"
              onChange={(event) => {
                setRelationships(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Notes and Warnings on Representation
            <input
              type="text"
              onChange={(event) => {
                setNotes(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Character importance
            <select
              value={importance}
              placeholder="Select one"
              onChange={(event) => {
                console.log(importance);
                setImportance(event.target.value);
                console.log(importance);
              }}
            >
              <option value="Main">Main</option>
              <option value="Lead">Lead</option>
              <option value="Side">Side</option>
            </select>
          </label>

          <label>
            Type of Rep
            <select
              onSelect={(event) => {
                setType(event.target.value);
              }}
            >
              <option>On Page</option>
              <option>Word Used</option>
              <option>Word of God</option>
            </select>
          </label>

          <label>
            Romantic orientation
            <input
              type="text"
              onChange={(event) => {
                setRomanticOrientation(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Sexual orientation
            <input
              type="text"
              onChange={(event) => {
                setSexualOrientation(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Pairings (queerplatonic relationship or romantic)
            <input
              type="text"
              onChange={(event) => {
                setPairings(event.target.value);
              }}
            ></input>
          </label>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SuggestCharacter;
