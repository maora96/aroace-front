import "./pagination.css";
import React from "react";

export default function Pagination(props) {
  const { total, setCurrentPage, currentPage } = props;

  const pages = [];
  const montarPaginas = (total) => {
    for (let i = 1; i <= Math.ceil(total / 40); i++) {
      pages.push(i);
    }
  };

  montarPaginas(total);
  return (
    <div className="Pagination">
      {total ? (
        <div className="placeholder">
          {pages.map((page) => {
            return (
              <span
                className={page === currentPage ? "page-active" : ""}
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
