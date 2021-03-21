import React from "react";
import "./results.css";
import Sidebar from "../../components/sidebar/sidebar";
import SingleCharacter from "../../components/single-character/single-character";
import { ReactComponent as ButtonIcon } from "../../assets/chevron-right-solid.svg";
import MobileHeader from "../../components/mobile-header/mobile-header";
import { useHistory, useRouteMatch, useParams } from "react-router-dom";
import SearchBar from "../../components/search-bar/search-bar";

function Results({ location }) {
  const [search, setSearch] = React.useState("");
  const [changed, setChanged] = React.useState(0);
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [advancedSearch, setAdvancedSearch] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const history = useHistory();

  React.useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
      let count = changed + 1;
      setChanged(count);
      console.log(changed);
    });
  }, [history]);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const url_params = [];
    for (const key of params.entries()) {
      if (url_params.length > 0) {
        url_params.push("&");
        url_params.push(`${key[0]}=${key[1]}`);
      } else {
        url_params.push(`${key[0]}=${key[1]}`);
      }
    }
    const final = url_params.join("");
    console.log(final);
    if (final.includes("canonleads")) {
      console.log("fetch canon leads pls");
      fetch("https://aroacedb-back.herokuapp.com/characters/search/canonleads")
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson);
          if (resJson.data) {
            console.log(resJson.data);
            const newResults = resJson.data.character;
            setFilteredResults(newResults);

            const newCount = resJson.data.length;
            console.log(newCount);
            setCount(newCount);
          }
        });
    } else {
      fetch(`https://aroacedb-back.herokuapp.com/character/infinite?${final}`)
        .then((res) => res.json())
        .then((resJson) => {
          if (resJson.data) {
            console.log(resJson.data);
            const newResults = resJson.data.characters;
            setFilteredResults(newResults);
            const newCount = resJson.data.length;
            console.log(newCount);
            setCount(newCount);
          }
        });
    }
  }, [location.search]);

  return (
    <div className="Results">
      <Sidebar setFilteredResults={setFilteredResults} />
      <MobileHeader />

      <div className="results-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="free-search">
          <form
            onSubmit={(event) => {
              console.log(search);

              event.preventDefault();
              history.push(`/results?search=${search}`);
              fetch(
                `https://aroacedb-back.herokuapp.com/character/infinite?search=${search}`
              )
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(search);
                  console.log(resJson);

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
              }}
            ></input>
            <button>
              <ButtonIcon fill="white" height="20px" width="30px" />
            </button>
          </form>
        </div>

        <div className="button-container">
          <button
            onClick={() => {
              setAdvancedSearch(!advancedSearch);
            }}
          >
            Advanced Search
          </button>
        </div>
        {advancedSearch ? <SearchBar /> : ""}

        <div className="count">The database found {count} entries.</div>
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
