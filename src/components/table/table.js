import Row from "../row/row";
import "./table.css";

function Table(props) {
  const { characters } = props;

  return (
    <table class="table">
      <thead>
        <tr>
          <th>Character Name</th>
          <th>Author</th>
          <th>Importance</th>
          <th>Romantic Orientation</th>
          <th>Sexual Orientation</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => {
          return <Row character={character} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
