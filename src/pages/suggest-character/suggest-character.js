import React from "react";
import { fazerRequisicaoComBody } from "../../utils/fetch";
import Header from "../../components/header/header";
import { useHistory } from "react-router-dom";

function SuggestCharacter() {
  const history = useHistory();

  return (
    <div>
      <Header />
      <div className="suggest-character">
        <form
          onSubmit={(event) => {
            //const novoToken = localStorage.getItem("token");
            event.preventDefault();
            fazerRequisicaoComBody(
              "http://localhost:8081/clientes",
              "POST",
              {
                // post elemenents
              }
              //
            )
              .then((res) => res.json())
              .then((resJson) => {
                console.log(resJson);

                history.push("/sucess");
              });
          }}
        >
          <label>
            Character name
            <input
              type="text"
              onChange={(event) => {
                //setNome(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Gender
            <input
              type="text"
              onChange={(event) => {
                //setNome(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Series
            <input
              type="text"
              onChange={(event) => {
                //setNome(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Author
            <input
              type="text"
              onChange={(event) => {
                //setNome(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Genre
            <input
              type="text"
              onChange={(event) => {
                //setNome(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Relationships
            <input
              type="text"
              onChange={(event) => {
                //setNome(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Notes and Warnings on Representation
            <input
              type="text"
              onChange={(event) => {
                //setNome(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Character importance
            <select>
              <option>Main</option>
              <option>Lead</option>
              <option>Side</option>
            </select>
          </label>

          <label>
            Type of Rep
            <select>
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
                //setNome(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Sexual orientation
            <input
              type="text"
              onChange={(event) => {
                //setNome(event.target.value);
              }}
            ></input>
          </label>

          <label>
            Pairings (queerplatonic relationship or romantic)
            <input
              type="text"
              onChange={(event) => {
                //setNome(event.target.value);
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
