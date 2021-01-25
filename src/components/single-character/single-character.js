import React from "react";
import "./single-character.css";

export default function SingleCharacter(props) {
  const { character } = props;
  return (
    <div className="SingleCharacter">
      <div className="single-character-container">
        <div className="top">
          <div className="header">
            <h2>{character.character_name}</h2>
            <h3>by {character.author}</h3>
          </div>

          <span>
            {character.gender}/{character.importance}
          </span>
        </div>

        <span>
          A(n){" "}
          <span>
            {character.romantic_orientation} {character.sexual_orientation}{" "}
            character.
          </span>
        </span>

        <div className="button-container">
          <a href={`/character/${character.id}`}>Read more</a>
        </div>
      </div>
    </div>
  );
}
