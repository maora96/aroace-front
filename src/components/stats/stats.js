import "./stats.css";

export default function Stats(props) {
  const { stats } = props;
  return stats ? (
    <div className="Stats transition duration-500">
      <h3 className="text-secondary dark:text-darksecondary">Statistics</h3>
      <div className="big-box">
        <div className="stats-box">
          <span className="text-detail dark:text-darkdetail">
            {stats.characterCount}
          </span>
          <span className="text-secondary">characters</span>
        </div>

        <div className="stats-box">
          <span className="text-detail dark:text-darkdetail">
            {stats.storyCount}
          </span>
          <span className="text-secondary">stories</span>
        </div>

        <div className="stats-box">
          <span className="text-detail dark:text-darkdetail">
            {stats.reviewCount}
          </span>
          <span className="text-secondary">reviews</span>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
