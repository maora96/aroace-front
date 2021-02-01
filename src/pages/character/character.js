import React from "react";
import "./character.css";
import { useRouteMatch } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import CharacterInfo from "../../components/character-info/character-info";
import Stories from "../../components/stories/stories";
import Reviews from "../../components/reviews/reviews";

export default function SingleCharacter() {
  const [character, setCharacter] = React.useState({});
  const [stories, setStories] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const { params } = useRouteMatch();

  React.useEffect(() => {
    fetch(`https://aroacedb-back.herokuapp.com/characters/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.data.character[0]);
        setCharacter(resJson.data.character[0]);
        console.log(character);
        console.log("params", params.id);
      });

    fetch(`https://aroacedb-back.herokuapp.com/stories/character/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        const possibleStories = resJson.data.stories;
        if (possibleStories.length !== 0) {
          console.log(possibleStories);
          setStories(possibleStories);
        }
      });

    fetch(`https://aroacedb-back.herokuapp.com/reviews/character/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        const possibleReviews = resJson.data.reviews;
        console.log(resJson);
        if (possibleReviews.length !== 0) {
          console.log(possibleReviews);
          setReviews(possibleReviews);
        }
      });
  }, []);

  return (
    <div className="Character">
      <Sidebar />
      <div className="character-container">
        <CharacterInfo character={character} />
        {console.log(params.id)}
        <Stories stories={stories} character_id={params.id} />
        <Reviews reviews={reviews} character_id={params.id} />
      </div>
    </div>
  );
}
