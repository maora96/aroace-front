import "./suggested-stories.css";
import React from "react";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import Table from "../../components/table/table";
import Pagination from "../../components/pagination/pagination";

export default function SuggestedStories() {
  const [stories, setStories] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/stories")
      .then((res) => res.json())
      .then((resJson) => {
        const data = resJson.data.stories;
        console.log(data);
        setStories(data);
      });
  }, [currentPage]);

  return (
    <div className="SuggestedCharacters">
      <SidebarAdmin />
      <div className="suggested-container">
        <div className="title">
          <h2>Suggested Stories</h2>
        </div>
        <Table characters={stories} type="suggest" />
        <Pagination />
        {/* <Pagination
            totalDePaginas={totalPaginas}
            setPaginaAtual={setPaginaAtual}
          /> */}
      </div>
    </div>
  );
}
