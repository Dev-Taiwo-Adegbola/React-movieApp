import React from "react";
import { NavigationHorizontal } from "../../NavigationHorizontal/NavigationHorizontal";
import styles from "./FavouritesSection.module.css";
import { MovieCard } from "../../MovieCard/MovieCard";

import tokyoTrain from "../../../assets/tokyoTrain.jpeg";
const FavouritesSection = (props) => {
  return (
    <div className={styles.FavouritesSection}>
      <NavigationHorizontal toggleFunction={props.toggleFunction} />
      <h2>Favourites</h2>
      <div className={styles.FavouritesMovies}>
        <MovieCard
          style="wideMovieCard"
          image={tokyoTrain}
          title="Tokyo Train"
          description="2022 | Action Comedy"
        />

        <MovieCard
          style="wideMovieCard"
          image={tokyoTrain}
          title="Tokyo Train"
          description="2022 | Action Comedy"
        />
        <MovieCard
          style="wideMovieCard"
          image={tokyoTrain}
          title="Tokyo Train"
          description="2022 | Action Comedy"
        />
        <MovieCard
          style="wideMovieCard"
          image={tokyoTrain}
          title="Tokyo Train"
          description="2022 | Action Comedy"
        />
      </div>
        <div className={styles.downText}>
          <p>2022 | action</p>
          <p>2022 | action</p>
          <p>2022 | action</p>
        </div>
    </div>
  );
};

export default FavouritesSection;
