import "./stats.css";

export default function Stats(props) {
  const { stats } = props;
  return stats ? (
    <div className="Stats">
      <h3>Statistics</h3>
      <div className="big-box">
        <div className="stats-box">
          <span>{stats.characterCount}</span>
          <span>characters</span>
        </div>

        <div className="stats-box">
          <span>{stats.storyCount}</span>
          <span>stories</span>
        </div>

        <div className="stats-box">
          <span>{stats.reviewCount}</span>
          <span>reviews</span>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
