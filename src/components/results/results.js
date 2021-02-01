import React from "react";
import "./results.css";
import SingleCharacter from "../single-character/single-character";
import { ReactComponent as ButtonIcon } from "../../assets/chevron-right-solid.svg";
import Pagination from "../pagination/pagination";
import { useRouteMatch } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";

function Results() {
  const [search, setSearch] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const { params } = useRouteMatch();

  React.useEffect(() => {
    const currentSearch = params.search;

    if (search) {
      console.log(search);
      fetch(
        `https://aroacedb-back.herokuapp.com/characters?search=${search}&&offset=${
          currentPage * 20 - 20
        }`
      )
        .then((res) => res.json())
        .then((resJson) => {
          console.log("first or fake results:", resJson);
          const newResults = resJson.data.paginated_characters;

          setResults(newResults);
          setCurrentPage(resJson.data.currentPage);
          setTotalPages(resJson.data.totalPages);
        });
    } else {
      fetch(
        `https://aroacedb-back.herokuapp.com/characters?search=${currentSearch}&&offset=${
          currentPage * 20 - 20
        }`
      )
        .then((res) => res.json())
        .then((resJson) => {
          console.log("first or fake results:", resJson);
          const newResults = resJson.data.paginated_characters;

          setResults(newResults);
          setCurrentPage(resJson.data.currentPage);
          setTotalPages(resJson.data.totalPages);
        });
    }
    // const result = JSON.parse(localStorage.getItem("results"));
    // console.log(result);
    // setResults(result);
    // const searches = params.search;
    // console.log(searches);
    // console.log(results);
    // fetch(
    //   `https://aroacedb-back.herokuapp.com/characters?search=${search}&&offset=${
    //     currentPage * 20 - 20
    //   }`
    // )
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     console.log("first or fake results:", resJson);
    //     const newResults = resJson.data.paginated_characters;

    //     setResults(newResults);
    //     setCurrentPage(resJson.data.currentPage);
    //     setTotalPages(resJson.data.totalPages);
    //   });
  }, [currentPage, search]);

  return (
    <div className="Home">
      <Sidebar />

      <div className="home-container">
        <form
          onSubmit={(event) => {
            console.log(search);
            const newSearch = search.split(" ");
            console.log(search);
            setCurrentPage(1);
            setTotalPages(0);
            setSearch(newSearch);
          }}
        >
          <input
            type="text"
            placeholder="search..."
            onBlur={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
          <button>
            <ButtonIcon fill="white" height="20px" width="30px" />
          </button>
        </form>
        <div className="results">
          {results ? (
            <div>
              {results.map((i) => {
                return (
                  <div>
                    <SingleCharacter character={i} />
                  </div>
                );
              })}

              <Pagination
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                currentPage={currentPage}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;
