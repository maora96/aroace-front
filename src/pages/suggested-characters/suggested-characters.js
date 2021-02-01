import "./suggested-characters.css";
import React from "react";
import Table from "../../components/table-character/table";
import Pagination from "../../components/pagination/pagination";
import TableCharacter from "../../components/table-character/table";
import Sidebar from "../../components/sidebar/sidebar";

export default function SuggestedCharacters() {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/characters")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        const data = resJson.data.paginated_characters;
        console.log(data);
        setCharacters(data);
        setCurrentPage(resJson.data.currentPage);
        setTotalPages(resJson.data.totalPages);
      });
  }, [currentPage]);

  return (
    <div className="SuggestedCharacters">
      <Sidebar />
      <div className="suggested-container">
        <div className="title">
          <h2>Suggested Characters</h2>
        </div>
        <TableCharacter content={characters} type="suggest" id="character" />
        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
