import "./row.css";
import ExternalLink from "../../assets/external-link.png";

export default function RowReview(props) {
  const { content, type, id } = props;

  return (
    <tr className="tbody">
      <td>{content.review_for}</td>
      <td>{content.reviewer}</td>
      <td>
        <a href={`/suggested-review/${content.id}`}>
          <img src={ExternalLink} alt="profile link" />
        </a>
      </td>
    </tr>

    //   ) : (
    //     <tr class="tbody">
    //       <td>{content.review_for}</td>
    //       <td>{content.reviewer}</td>
    //       <td>
    //         <a href={`/suggested-review/${content.id}`}>
    //           <img src={ExternalLink} alt="profile link" />
    //         </a>
    //       </td>
    //     </tr>
    //   )}

    // <tr class="tbody">
    //   {id === "character" ? (
    //     <div>
    //   <td>{content.character_name}</td>
    //   <td>{content.author}</td>
    //   <td>{content.importance}</td>
    //   <td>{content.romantic_orientation}</td>
    //   <td>{content.sexual_orientation}</td>
    //   <td>
    //     {type === "regular" ? (
    //       <a href={`/character/${content.id}`}>
    //         <img src={ExternalLink} alt="profile link" />
    //       </a>
    //     ) : (
    //       <a href={`/suggested-character/${content.id}`}>
    //         <img src={ExternalLink} alt="profile link" />
    //       </a>
    //     )}
    //   </td>
    //     </div>
    //   ) : id === "story" ? (
    //     <div>
    //       <td>{content.story_title}</td>
    //       <td>{content.author}</td>
    //       <td>
    //         <a href={`/suggested-story/${content.id}`}>
    //           <img src={ExternalLink} alt="profile link" />
    //         </a>
    //       </td>
    //     </div>
    //   ) : (
    //     <div>
    //       <td>{content.review_for}</td>
    //       <td>{content.reviewer}</td>
    //       <td>
    //         <a href={`/suggested-review/${content.id}`}>
    //           <img src={ExternalLink} alt="profile link" />
    //         </a>
    //       </td>
    //     </div>
    //   )}
    // </tr>
  );
}
