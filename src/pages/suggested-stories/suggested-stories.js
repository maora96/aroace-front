import "./suggested-stories.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Table from "../../components/table-character/table";
import Pagination from "../../components/pagination/pagination";
import TableStory from "../../components/table-story/table";

export default function SuggestedStories() {
  const [stories, setStories] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/stories")
      .then((res) => res.json())
      .then((resJson) => {
        const data = resJson.data.paginated_stories;
        console.log(data);
        setStories(data);
        setCurrentPage(resJson.data.currentPage);
        setTotalPages(resJson.data.totalPages);
      });
  }, [currentPage]);

  return (
    <div className="SuggestedCharacters">
      <Sidebar />
      <div className="suggested-container">
        <div className="title">
          <h2>Suggested Stories</h2>
        </div>
        <TableStory content={stories} type="suggest" id="story" />

        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
