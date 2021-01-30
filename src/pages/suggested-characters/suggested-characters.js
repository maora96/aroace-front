import "./suggested-characters.css";
import React from "react";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import Table from "../../components/table-character/table";
import Pagination from "../../components/pagination/pagination";
import TableCharacter from "../../components/table-character/table";

export default function SuggestedCharacters() {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/characters")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        const data = resJson.data.characters;
        console.log(data);
        setCharacters(data);
      });
  }, [currentPage]);

  return (
    <div className="SuggestedCharacters">
      <SidebarAdmin />
      <div className="suggested-container">
        <div className="title">
          <h2>Suggested Characters</h2>
        </div>
        <TableCharacter content={characters} type="suggest" id="character" />
        <Pagination />
        {/* <Pagination
            totalDePaginas={totalPaginas}
            setPaginaAtual={setPaginaAtual}
          /> */}
      </div>
    </div>
  );
}
