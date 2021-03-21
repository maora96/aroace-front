import "./all-characters.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Pagination from "../../components/pagination/pagination";
import TableCharacter from "../../components/table-character/table";
import ReactPaginate from "react-paginate";
import MobileHeader from "../../components/mobile-header/mobile-header";

export default function AllCharacters() {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    fetch(
      `https://aroacedb-back.herokuapp.com/characters?offset=${
        currentPage * 20 - 20
      }`
    )
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        const data = resJson.data.paginated_characters;
        console.log("characters:", data);
        setCharacters(data);
        setCurrentPage(resJson.data.currentPage);
        setTotalPages(resJson.data.totalPages);
      });
  }, [currentPage]);

  return (
    <div className="AllCharacters">
      <Sidebar />

      <MobileHeader />
      <div className="all-characters-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="title">
          <h2 className="text-secondary dark:text-darksecondary">
            All Characters
          </h2>
          {token ? (
            <a
              href="/add-character"
              className="bg-secondary dark:bg-darkdetail text-detail dark:text-darksecondary hover:bg-detail hover:text-primary dark:hover:bg-darksecondary dark:hover:text-darkdetail"
            >
              Add character
            </a>
          ) : (
            ""
          )}
        </div>
        <TableCharacter content={characters} type="regular" id="character" />

        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
