import "./pagination.css";
import React from "react";

export default function Pagination(props) {
  const { totalPaginas, setPaginaAtual, paginaAtual } = props;

  const pages = [];
  const montarPaginas = (total) => {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  };

  montarPaginas(totalPaginas);
  return (
    <div className="Pagination">
      <div className="placeholder">
        <span>1</span> <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        {/* <img src="" alt="arrow for changing page" /> */}
      </div>
    </div>
  );
}
