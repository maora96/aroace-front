import React from "react";
import "./results.css";
import Sidebar from "../../components/sidebar/sidebar";
import SingleCharacter from "../../components/single-character/single-character";
import { ReactComponent as ButtonIcon } from "../../assets/chevron-right-solid.svg";
import MobileHeader from "../../components/mobile-header/mobile-header";
import { useHistory, useRouteMatch, useParams } from "react-router-dom";

function Results({ location }) {
  const [random, setRandom] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [search, setSearch] = React.useState([]);
  const [filteredResults, setFilteredResults] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    console.log("hey");
    console.log(search);
    const params = new URLSearchParams(location.search);
    console.log(params);
    const q = params.get("search");
    console.log(q);
    fetch(`https://aroacedb-back.herokuapp.com/character/infinite?search=${q}`)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.data) {
          const newResults = resJson.data.characters;
          setFilteredResults(newResults);
          console.log(filteredResults);
        }
      });
  }, []);

  return (
    <div className="Results">
      <Sidebar />
      <MobileHeader />

      <div className="results-container">
        <form
          onSubmit={(event) => {
            console.log(search);
            event.preventDefault();
            history.push(`/results?search=${search}`);
            console.log(`/results?search=${search}`);
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
            placeholder="Enter your keywords here to search"
            onChange={(event) => {
              setSearch(event.target.value);
              console.log(event.target.value);
            }}
          ></input>
          <button>
            <ButtonIcon fill="white" height="20px" width="30px" />
          </button>
        </form>

        {filteredResults ? (
          <div className="results">
            {filteredResults.map((i) => {
              return (
                <div>
                  <SingleCharacter character={i} />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Results;
