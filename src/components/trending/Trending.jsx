import React, { useState } from "react";
import styles from "./Trending.module.css";
import { NavigationHorizontal } from "../NavigationHorizontal/NavigationHorizontal";
import { MovieCard } from "../MovieCard/MovieCard";
import { HeartSvg, StarIcon } from "../svg-icons/svgIcons";
import tokyoTrain from "../../assets/tokyoTrain.jpeg";
import moonFall from "../../assets/moonFall.png";
import houseOfGucci from "../../assets/houseOfGucci.jpeg";
import lifeInLA from "../../assets/lifeInLA.jpeg";

 function Trending (props) {
  const [activeMovie, useActiveMovie] = useState("1");

  const movieDescription =
    "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.";

  const updateActiveMovie = (tab) => {
    useActiveMovie((prev) => (prev === tab ? null : tab));
    window.scrollTo({ top: movie.scrollHeight, behavior: "smooth" });
  };

  const MovieDescription = (props) => {

    return (
      <div className={styles.MovieDescription} id="movie" >
        <img src={props.image} alt="" />
        <div className={styles.description}>
          <div className={styles.title}>
            <h3>{props.title}</h3>
            <span>
              <StarIcon /> {props.rating}
            </span>
          </div>
          <p>{props.movieYTD}</p>
          <p>{props.movieDescription}</p>
          <div className={styles.btns}>
            <button>Watch Now</button>
            <button>
              <HeartSvg />
            </button>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className={styles.Trending}>
      <NavigationHorizontal toggleFunction={props.toggleFunction} />

      <h2>Trending at this moment</h2>
      <div className={styles.trendingMovie}>
        <button
          onClick={() => {
            updateActiveMovie("1");
          }}
        >
          <MovieCard
            style="movieCard"
            image={tokyoTrain}
            title="Tokyo Train"
            description="2022 | Action Comedy"
          />
        </button>
        <button
          onClick={() => {
            updateActiveMovie("2");
          }}
        >
          <MovieCard
            style="movieCard"
            image={moonFall}
            title="MoonFall"
            description="2022 | Sci-fi"
          />
        </button>
        <button
          onClick={() => {
            updateActiveMovie("3");
          }}
        >
          <MovieCard
            style="movieCard"
            image={lifeInLA}
            title="L.A."
            description="2023 | Action Thriller "
          />
        </button>
        <button
          onClick={() => {
            updateActiveMovie("4");
          }}
        ></button>
      </div>
      {activeMovie === "1" ? (
        <MovieDescription
          image={tokyoTrain}
          title="Tokyo Train"
          movieYTD="2023 | Drama | 2h38m"
          rating="8.1/10"
          movieDescription={movieDescription}
        />
      ) : null}

      {activeMovie === "2" ? (
        <MovieDescription
          image={moonFall}
          title="Moon Fall"
          movieYTD="2023 | Drama | 2h38m"
          rating="7.0/10"
          movieDescription={movieDescription}
        />
      ) : null}
      {activeMovie === "3" ? (
        <MovieDescription
          image={lifeInLA}
          title="L.A"
          movieYTD="2023 | Drama | 2h38m"
          rating="6.9/10"
          movieDescription={movieDescription}
        />
      ) : null}
      {activeMovie === "4" ? (
        <MovieDescription
          image={houseOfGucci}
          title="House of Wealth"
          movieYTD="2023 | Drama | 2h38m"
          rating="7.8/10"
          movieDescription={movieDescription}
        />
      ) : null}
    </div>
  );
};

export default Trending;
