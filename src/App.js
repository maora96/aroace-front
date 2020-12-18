import "./App.css";
import React from "react";

function App() {
  const [random, setRandom] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/character")
      .then((res) => res.json())
      .then((resJson) => {
        const newRandom = resJson.dados;
        setRandom(newRandom);
      });
  }, []);
  return (
    <div className="App">
      <div>
        <form
          onSubmit={(event) => {
            console.log(search);
            event.preventDefault();
            fetch(
              `https://aroacedb-back.herokuapp.com/characters?search=${search}`
            )
              .then((res) => res.json())
              .then((resJson) => {
                console.log(resJson.dados.characters);
                const newResults = resJson.dados.characters;
                setResults(newResults);
              });
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </form>
      </div>
      {search === "" ? (
        <div>
          <ul>
            <li>
              <b>Character:</b> {random.character_name}
            </li>
            <li>
              <b>Author:</b> {random.author}
            </li>
            <li>
              <b>Gender:</b> {random.gender}
            </li>
            <li>
              <b>Genre:</b> {random.genre}
            </li>
            <li>
              <b>Importance:</b> {random.importance}
            </li>
            <li>
              <b>Series:</b> {random.main_storyseries}
            </li>
            <li>
              <b>Pairing:</b> {random.pairing_qpp_or_romantic}
            </li>
            <li>
              <b>Relationships:</b> {random.relationships}
            </li>
            <li>
              <b>Notes/Warnings:</b> {random.rep_noteswarnings}
            </li>
            <li>
              <b>Romantic Orientation:</b> {random.romantic_orientation}
            </li>
            <li>
              <b>Sexual Orientation:</b> {random.sexual_orientation}
            </li>
            <li>
              <b>Type of Rep:</b> {random.type_of_rep}
            </li>
          </ul>
          <button
            onClick={() => {
              fetch("https://aroacedb-back.herokuapp.com/character")
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson.dados);
                  const newRandom = resJson.dados;
                  setRandom(newRandom);
                });
            }}
          >
            Give me a new character
          </button>
        </div>
      ) : (
        <div>
          {" "}
          {results.map((item) => {
            return <li>{item.character_name}</li>;
          })}{" "}
        </div>
      )}
    </div>
  );
}

export default App;
