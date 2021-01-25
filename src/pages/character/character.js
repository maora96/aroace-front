import React from "react";
import "./character.css";
import { useRouteMatch } from "react-router-dom";
import SidebarUser from "../../components/sidebar-user/sidebar-user";

export default function SingleCharacter() {
  const [character, setCharacter] = React.useState(null);
  const { params } = useRouteMatch();

  React.useEffect(() => {
    fetch(`https://aroacedb-back.herokuapp.com/characters/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.dados.character);
        setCharacter(resJson.dados.character[0]);
      });
  });
  return (
    <div className="Character">
      <SidebarUser />
      <div className="character-container">{character.character_name}</div>
    </div>
  );
}
