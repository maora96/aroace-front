import React from "react";
import "./single-character.css";

export default function SingleCharacter(props) {
  const { character } = props;
  return (
    <div className="SingleCharacter">
      <div className="single-character-container">
        <img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1592493557l/39897752.jpg"
          alt="cover"
        />
        <div className="single-character-container-flex">
          <div className="top">
            <div className="header">
              <h2>{character.character_name}</h2>
              <h3>
                by {character.author}{" "}
                <span>
                  {character.gender}/{character.importance}
                </span>
              </h3>
            </div>
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
    </div>
  );
}
