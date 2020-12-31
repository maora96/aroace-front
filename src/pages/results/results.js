import React from "react";
import Search from "../../components/search/search";
import Header from "../../components/header/header";

function Results() {
  const [results, setResults] = React.useState([]);
  const [filteredResults, setFilteredResults] = React.useState([]);

  React.useEffect(() => {
    const newResults = JSON.parse(localStorage.getItem("results"));
    setResults(newResults);
    console.log(results);
  }, []);

  React.useEffect(() => {
    setFilteredResults(
      results.filter((res) => {
        res.character_name.toLowerCase().includes();
      })
    );
  });

  return (
    <div>
      <Header />
      <Search />

      <div className="results">
        {results.map((i) => {
          return (
            <li>
              {i.character_name} | {i.main_storyseries} | {i.author} | {i.genre}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
