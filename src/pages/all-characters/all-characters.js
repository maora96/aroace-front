import "./all-characters.css";
import React from "react";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import Table from "../../components/table/table";
import Pagination from "../../components/pagination/pagination";

export default function AllCharacters() {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/")
      .then((res) => res.json())
      .then((resJson) => {
        const data = resJson.dados.characters;
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
        </div>
        <Table characters={characters} type="regular" />

        <Pagination />
        {/* <Pagination
            totalDePaginas={totalPaginas}
            setPaginaAtual={setPaginaAtual}
          /> */}
      </div>
    </div>
  );
}
