import React from "react";
import "./home.css";
import SidebarUser from "../../components/sidebar-user/sidebar-user";
import SingleCharacter from "../../components/single-character/single-character";
import { ReactComponent as ButtonIcon } from "../../assets/chevron-right-solid.svg";

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
    <div className="Home">
      <SidebarUser />

      <div className="home-container">
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
          <button>
            <ButtonIcon fill="white" height="20px" width="30px" />
          </button>
        </form>
        <div className="results">
          {filteredResults.map((i) => {
            return (
              <div>
                <SingleCharacter character={i} />
              </div>
            );
          })}

          {filteredResults.length !== 0 ? (
            <div></div>
          ) : (
            <div className="random">
              <SingleCharacter character={random} />
              <div className="char-btn">
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
                  Give me a new character!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
