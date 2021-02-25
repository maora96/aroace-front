import React from "react";
import "./single-character.css";

export default function SingleCharacter(props) {
  const { character } = props;

  return (
    <div className="SingleCharacter">
      <div className="single-character-container">
        {character.cover ? (
          <img src={character.cover} alt="cover" />
        ) : (
          <img
            src="https://www.globaluniversityalliance.org/wp-content/uploads/2017/10/No-Cover-Image-01.png"
            alt="cover"
          />
        )}

        <div className="single-character-container-flex">
          <div className="top">
            <div className="header">
              <h2>{character.character_name}</h2>
              <h3>
                by {character.author}
                <span>
                  {character.gender}/{character.importance}{" "}
                  {character.pairing_qpp_or_romantic
                    ? character.pairing_qpp_or_romantic
                    : ""}
                </span>
              </h3>
            </div>
          </div>
          <span>in the {character.main_storyseries} series</span>
          <span>
            {character.genre} | {character.relationships}
          </span>
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
