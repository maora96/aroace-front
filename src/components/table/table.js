import Row from "../row/row";
import "./table.css";

function Table(props) {
  const { characters, type } = props;
  console.log(type);
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
          return <Row character={character} type={type} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
