import "./pagination.css";
import React from "react";

export default function Pagination(props) {
  const { totalPages, setCurrentPage, currentPage } = props;

  const pages = [];
  const montarPaginas = (total) => {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  };

  montarPaginas(totalPages);
  return (
    <div className="Pagination">
      {totalPages ? (
        <div className="placeholder">
          {pages.map((page) => {
            return (
              <span
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
