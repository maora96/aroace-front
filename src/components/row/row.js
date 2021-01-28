import "./row.css";
import ExternalLink from "../../assets/external-link.png";

export default function Row(props) {
  const { character } = props;
  return (
    <tr class="tbody">
      <td>{character.character_name}</td>
      <td>{character.author}</td>
      <td>{character.importance}</td>
      <td>{character.romantic_orientation}</td>
      <td>{character.sexual_orientation}</td>
      <td>
        {/* <a href={`/character/${character.id}`} >
        <img src={ExternalLink} alt="profile link" /></a> */}
        <a href={`/suggested-character/${character.id}`}>
          <img src={ExternalLink} alt="profile link" />
        </a>
      </td>
    </tr>
  );
}
