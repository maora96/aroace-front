import React from "react";
import Header from "../../components/header/header";
import Search from "../../components/search/search";

function Home() {
  const [random, setRandom] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [filteredResults, setFilteredResults] = React.useState([]);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/character")
      .then((res) => res.json())
      .then((resJson) => {
        const newRandom = resJson.dados;
        console.log(newRandom);
        console.log(filteredResults.length);
        setRandom(newRandom);
      });
  }, []);

  return (
    <div>
      <Header />
      {
        //<Search />
      }

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
                setFilteredResults(newResults);
                //localStorage.setItem("results", JSON.stringify(newResults));
                //setSearch("");
              }
              //history.push("/results");
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
      <div className="results">
        {filteredResults.map((i) => {
          return (
            <li>
              {i.character_name} | {i.main_storyseries} | {i.author} | {i.genre}
            </li>
          );
        })}

        {filteredResults.length !== 0 ? (
          <div></div>
        ) : (
          <div className="single-character">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
