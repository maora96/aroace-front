import "./all-characters.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Pagination from "../../components/pagination/pagination";
import TableCharacter from "../../components/table-character/table";
import ReactPaginate from "react-paginate";
import MobileHeader from "../../components/mobile-header/mobile-header";
import { getCharacters } from "../../api";

export default function AllCharacters() {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [token, setToken] = React.useState("");

  React.useEffect(async () => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);

    const characters = await getCharacters(currentPage);
    console.log(characters);

    setCharacters(characters.data.result);
    setTotal(characters.data.total);
  }, [currentPage]);

  return (
    <div className="AllCharacters">
      <Sidebar />

      <MobileHeader />
      <div className="all-characters-container">
        <div className="title">
          <h2>All Characters</h2>
          {token ? <a href="/add-character">Add character</a> : ""}
        </div>
        <TableCharacter content={characters} type="regular" id="character" />

        <Pagination
          total={total}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
