import React from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/sidebar";
import SingleCharacter from "../../components/single-character/single-character";
import { ReactComponent as ButtonIcon } from "../../assets/chevron-right-solid.svg";
import MobileHeader from "../../components/mobile-header/mobile-header";

function Home() {
  const [random, setRandom] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [search, setSearch] = React.useState([]);
  const [filteredResults, setFilteredResults] = React.useState([]);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/character")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        const newRandom = resJson.data;
        console.log(newRandom);
        console.log(filteredResults.length);
        setRandom(newRandom);
      });
  }, []);

  return (
    <div className="Home">
      <Sidebar />
      <MobileHeader />

      <div className="home-container">
        <form
          onSubmit={(event) => {
            console.log(search);

            event.preventDefault();
            fetch(
              `https://aroacedb-back.herokuapp.com/character/infinite?search=${search}`
            )
              .then((res) => res.json())
              .then((resJson) => {
                console.log(search);
                console.log(resJson.data);

                if (resJson.data) {
                  const newResults = resJson.data.characters;
                  setFilteredResults(newResults);
                  console.log(filteredResults);
                }
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
                        console.log(resJson.data);
                        const newRandom = resJson.data;
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
