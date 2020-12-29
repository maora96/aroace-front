import React from "react";
import { useHistory } from "react-router-dom";

function Search() {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);
  const history = useHistory();
  return (
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

              if (resJson.dados.characters) {
                const newResults = resJson.dados.characters;
                setResults(newResults);
                localStorage.setItem("results", JSON.stringify(newResults));
              }
              history.push("/results");
            });
        }}
      >
        <input
          type="text"
          placeholder="search..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}

export default Search;
