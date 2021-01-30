import "./suggested-reviews.css";
import React from "react";
import SidebarAdmin from "../../components/sidebar-admin/sidebar-admin";
import Table from "../../components/table/table";
import Pagination from "../../components/pagination/pagination";

export default function SuggestedReviews() {
  const [reviews, setReviews] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/reviews")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        const data = resJson.data.reviews;
        console.log(data);
        setReviews(data);
      });
  }, [currentPage]);

  return (
    <div className="SuggestedCharacters">
      <SidebarAdmin />
      <div className="suggested-container">
        <div className="title">
          <h2>Suggested Reviews</h2>
        </div>
        <Table characters={reviews} type="suggest" />
        <Pagination />
        {/* <Pagination
            totalDePaginas={totalPaginas}
            setPaginaAtual={setPaginaAtual}
          /> */}
      </div>
    </div>
  );
}
