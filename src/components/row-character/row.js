import "./row.css";
import ExternalLink from "../../assets/external-link.png";

export default function RowCharacter(props) {
  const { content, type, id } = props;
  return (
    <tr className="tbody">
      <td>{content.name}</td>
      <td>{content.genres.join(", ")}</td>
      <td>{content.importance}</td>
      <td>{content.gender}</td>
      <td>{content.pairing}</td>
      <td>{content.series}</td>
      <td>{content.relationships?.join(", ")}</td>
      <td>{content.romanticOrientation}</td>
      <td>{content.sexualOrientation}</td>
      <td>
        {type === "regular" ? (
          <a href={`/character/${content.id}`}>
            <img src={ExternalLink} alt="profile link" />
          </a>
        ) : (
          <a href={`/suggested-character/${content.id}`}>
            <img src={ExternalLink} alt="profile link" />
          </a>
        )}
      </td>
    </tr>
  );
}
