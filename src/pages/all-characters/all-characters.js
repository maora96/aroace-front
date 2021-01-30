import "./all-characters.css";
import React from "react";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import Table from "../../components/table-character/table";
import Pagination from "../../components/pagination/pagination";
import TableCharacter from "../../components/table-character/table";

export default function AllCharacters() {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/characters")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        const data = resJson.data.character;
        console.log(data);
        setCharacters(data);
      });
  }, [currentPage]);

  return (
    <div className="AllCharacters">
      <SidebarAdmin />
      <div className="all-characters-container">
        <div className="title">
          <h2>All Characters</h2>
          <a href="/add-character">Add character</a>
        </div>
        <TableCharacter content={characters} type="regular" id="character" />

        <Pagination />
        {/* <Pagination
            totalDePaginas={totalPaginas}
            setPaginaAtual={setPaginaAtual}
          /> */}
      </div>
    </div>
  );
}
