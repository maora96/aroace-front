import "./suggested-stories.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Pagination from "../../components/pagination/pagination";
import TableStory from "../../components/table-story/table";
import MobileHeader from "../../components/mobile-header/mobile-header";
import TableSCStory from "../../components/table-sc-story/table";

export default function SuggestedStoriesSC() {
  const [stories, setStories] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/sc/stories")
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
      <MobileHeader />
      <div className="suggested-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="title">
          <h2 className="text-secondary dark:text-darksecondary">
            Suggested Stories
          </h2>
        </div>
        <div className="table-container">
          <TableSCStory content={stories} type="suggest" id="story" />
        </div>

        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
