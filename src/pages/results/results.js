import React from "react";
import "./results.css";
import Sidebar from "../../components/sidebar/sidebar";
import SingleCharacter from "../../components/single-character/single-character";
import { ReactComponent as ButtonIcon } from "../../assets/chevron-right-solid.svg";
import MobileHeader from "../../components/mobile-header/mobile-header";
import {
  useHistory,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import SearchBar from "../../components/search-bar/search-bar";
import { searchCharacters } from "../../api";
import { dictionary } from "../../utils/dictionary";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Results({ location }) {
  const [search, setSearch] = React.useState("");
  const [changed, setChanged] = React.useState(0);
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [advancedSearch, setAdvancedSearch] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const history = useHistory();

  let query = useQuery();

  React.useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
      let count = changed + 1;
      setChanged(count);
      console.log(changed);
    });
  }, [history]);

  React.useEffect(async () => {
    const search = query.get("search").toLowerCase();
    console.log("SEARCH", search);
    const formattedSearch = dictionary[search];

    const results = await searchCharacters(formattedSearch ?? search);
    console.log(results);
    setFilteredResults(results.data.result);
    setCount(results.data.result.length);
  }, [query.get("search")]);

  return (
    <div className="Results">
      <Sidebar setFilteredResults={setFilteredResults} />
      <MobileHeader />

      <div className="results-container">
        <div className="free-search">
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              history.push(`/results?search=${search}`);
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

        {/* <div className="button-container">
          <button
            onClick={() => {
              setAdvancedSearch(!advancedSearch);
            }}
          >
            Advanced Search
          </button>
        </div>
        {advancedSearch ? <SearchBar /> : ""} */}

        <div className="count">The database found {count} entries.</div>
        {filteredResults ? (
          <div className="results">
            {filteredResults.map((i) => {
              return (
                <div key={i.id}>
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
