import "./row.css";
import ExternalLink from "../../assets/external-link.png";

export default function RowStory(props) {
  const { content, type, id } = props;

  return (
    <tr className="tbody">
      <td>{content.story_title}</td>
      <td>{content.author}</td>
      <td>
        <a href={`/suggested-story/${content.id}`}>
          <img src={ExternalLink} alt="profile link" />
        </a>
      </td>
    </tr>
  );
}
