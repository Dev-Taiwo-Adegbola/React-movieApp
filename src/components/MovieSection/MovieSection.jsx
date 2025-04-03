import React, { useState } from "react";
import styles from "./MovieSection.module.css";
import tokyoTrain from "../../assets/tokyoTrain.jpeg";
import moonFall from "../../assets/moonFall.png";
import lifeInParis from "../../assets/lifeInParis.jpeg";
import houseOfGucci from "../../assets/houseOfGucci.jpeg";
import weddingNight from "../../assets/weddingNight.jpeg";
import lifeInLA from "../../assets/lifeInLA.jpeg";
import starGaze from "../../assets/starGaze.jpeg";
import bulletScience from "../../assets/bulletScience.jpeg";
import { MovieCard } from "../MovieCard/MovieCard";

const MovieSection = () => {
  return (
    <div className={styles.MovieSection}>
      <div className={styles.trendingSection}>
        <h3>Trending</h3>
        <div>
          <MovieCard
            style="movieCard"
            image={tokyoTrain}
            title="Tokyo Train"
            description="2022 | Action Comedy"
          />
          <MovieCard
            style="movieCard"
            image={moonFall}
            title="MoonFall"
            description="2022 | Sci-fi"
          />
          <MovieCard
            style="movieCard"
            image={lifeInLA}
            title="L.A."
            description="2023 | Action Thriller "
          />
          <MovieCard
            style="movieCard"
            image={houseOfGucci}
            title="House of Gucci"
            description="2021 | Drama"
          />
        </div>
      </div>

      <div className={styles.continueWatchingSection}>
        <h3>Continue watching</h3>
        <div>
          <MovieCard
            style="wideMovieCard"
            image={weddingNight}
            title="The wedding night"
            description="2022 | Drama"
          />
          <MovieCard
            style="wideMovieCard"
            image={lifeInParis}
            title="Life in Paris."
            description="2024 | Documentary series"
          />
          <MovieCard
            style="wideMovieCard"
            image={starGaze}
            title="Star Gaze"
            description="2023 | Action Drama"
          />
        </div>
      </div>

      <div className={styles.favouritesSection}>
        <h3>Favourites</h3>
        <div>
          <MovieCard
            style="wideMovieCard"
            image={bulletScience}
            title="Bullet Science"
            description="2022 | Action Sci-fi"
          />
          <MovieCard
            style="wideMovieCard"
            image={bulletScience}
            title="Tokyo Train"
            description="2022 | Action Comedy"
          />
          <MovieCard
            style="wideMovieCard"
            image={bulletScience}
            title="Tokyo Train"
            description="2022 | Action Comedy"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
