import React from "react";
import "./results.css";
import Sidebar from "../../components/sidebar/sidebar";
import SingleCharacter from "../../components/single-character/single-character";
import { ReactComponent as ButtonIcon } from "../../assets/chevron-right-solid.svg";
import MobileHeader from "../../components/mobile-header/mobile-header";
import { useHistory, useRouteMatch, useParams } from "react-router-dom";
import SearchBar from "../../components/search-bar/search-bar";

function Results({ location }) {
  const [changed, setChanged] = React.useState(0);
  const [filteredResults, setFilteredResults] = React.useState([]);
  const history = useHistory();

  const updateResults = async (input) => {
    setFilteredResults(input);
  };

  //   React.useEffect(() => {
  //       const params = new URLSearchParams(location.search)
  //   })
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
    console.log(
      `https://aroacedb-back.herokuapp.com/character/infinite?${final}`
    );
    fetch(`https://aroacedb-back.herokuapp.com/character/infinite?${final}`)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.data) {
          const newResults = resJson.data.characters;
          setFilteredResults(newResults);
          console.log(filteredResults);
        }
      });
  }, [location.search]);

  return (
    <div className="Results">
      <Sidebar setFilteredResults={setFilteredResults} />
      <MobileHeader />

      <div className="results-container">
        <SearchBar />

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
