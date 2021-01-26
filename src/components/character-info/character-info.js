import "./character-info.css";
import React from "react";

export default function CharacterInfo(props) {
  const { character } = props;
  return (
    <div className="CharacterInfo">
      <h2>{character.character_name}</h2>
      <div className="line">
        <div className="chunk">
          <span>Author</span>
          {character.author}
        </div>
        <div className="chunk">
          <span>Gender</span> {character.gender}
        </div>
        <div className="chunk">
          <span>Pairing</span>
          {character.pairing_qpp_or_romantic == null
            ? "Not informed/applicable."
            : character.pairing_qpp_or_romantic}
        </div>
      </div>

      <div className="line">
        <div className="chunk">
          <span>Series</span>{" "}
          {character.main_storyseries == null
            ? "Not informed or not applicable."
            : character.main_storyseries}
        </div>
        <div className="chunk">
          <span>Type of Rep</span> {character.type_of_rep}
        </div>
      </div>

      <div className="line">
        <div className="chunk">
          <span>Romantic orientation</span>{" "}
          {character.romantic_orientation == null
            ? "Not informed."
            : character.romantic_orientation}
        </div>
        <div className="chunk">
          <span>Sexual Orientation</span>{" "}
          {character.sexual_orientation == null
            ? "Not informed."
            : character.sexual_orientation}
        </div>
      </div>

      <div className="line">
        <div className="chunk">
          <span>Genre</span> {character.genre}
        </div>
      </div>

      <div clasName="square">
        <p>
          <span>Relationships</span>
          {character.relationships == null
            ? "Not informed."
            : character.relationships}
        </p>
      </div>

      <div clasName="square">
        <p>
          <span>Notes & Warnings</span>
          {character.rep_noteswarnings == null
            ? "No warnings."
            : character.rep_noteswarnings}
        </p>
      </div>
    </div>
  );
}
