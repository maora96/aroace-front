import "./row.css";
import ExternalLink from "../../assets/external-link.png";

export default function RowSCStory(props) {
  const { content, type, id } = props;

  return (
    <tr className="tbody  text-secondary dark:text-darksecondary dark:odd:text-darkprimary">
      <td>{content.story_title}</td>
      <td>{content.author}</td>
      <td>
        <a href={`/sc-suggested-story/${content.id}`}>
          <img src={ExternalLink} alt="profile link" />
        </a>
      </td>
    </tr>
  );
}
