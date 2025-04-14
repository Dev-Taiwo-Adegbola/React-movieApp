import { useState } from "react";
import styles from "./MovieCard.module.css";
import { FilledHeartSvg, HeartSvg } from "../svg-icons/svgIcons";

export const MovieCard = (props) => {
  const [hasLiked, setHasLiked] = useState(false);

  const updateHasLiked = () => {
    setHasLiked(!hasLiked);
  };

  return (
    <div
      className={
        props.style === "movieCard" ? styles.movieCard : styles.wideMovieCard
      }
    >
      <img src={props.image} alt="" />
      <div>
        {props.title} <br />
        {props.description}
      </div>
      <button className={styles.toggleFave} onClick={() => updateHasLiked()}>
        {hasLiked === true ? (
          <FilledHeartSvg className="filled" />
        ) : (
          <HeartSvg />
        )}
      </button>
    </div>
  );
};
