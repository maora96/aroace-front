import "./suggested-characters.css";
import React from "react";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import Table from "../../components/table/table";

export default function SuggestedCharacters() {
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
    <div className="SuggestedCharacters">
      <SidebarAdmin />
      <div className="suggested-container">
        <Table characters={characters} />

        {/* <Pagination
            totalDePaginas={totalPaginas}
            setPaginaAtual={setPaginaAtual}
          /> */}
      </div>
    </div>
  );
}
