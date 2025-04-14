import React from "react";
import SideNavigation from "../../sideNavigation/sideNavigation";
import HeroSection from "../../HeroSection/HeroSection";
import styles from "./HomePage.module.css";
import MovieSection from "../../MovieSection/MovieSection";
import { useState, useEffect } from "react";
import FavouritesSection from "../FavouritesSection/FavouritesSection";
import Trending from "../../trending/Trending";

const HomePage = () => {
  let y = [1, 2, 3, 4, 5];
  const [hasToggleNav, setHasToggleNav] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const updateHasToggleNav = () => {
    setHasToggleNav((prev) => !prev);
  };

  const [activeSection, setactiveSection] = useState("home");

  const updateActiveSection = (section) => {
    setactiveSection(section);
  };

  const imageUrl = `https://image.tmdb.org/t/p/w500`;

  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const fetchMovies = async () => {
    try {
      const response_popular = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      if (!response_popular.ok) {
        setFetchError("Movie fetch encountered an error");
      }

      const response_trending = await fetch(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`
      );

      if (!response_trending.ok) {
        setFetchError(
          "Movie fetch encountered an error, cannot get the trending movies at the moment"
        );
      }

      const fetchedMovies_popular = await response_popular.json();
      setPopularMovies(fetchedMovies_popular.results);

      const fetchedMovies_trending = await response_trending.json();

      const firstFour = fetchedMovies_trending.results.slice(0, 4);

      setTrendingMovies(firstFour);

      console.log(firstFour);
    } catch (error) {
      console.log("Movie fetch encountered an error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.homepage}>
      <SideNavigation
        activeMob={hasToggleNav}
        toggleFunction={() => updateHasToggleNav()}
        sectionToggle={setactiveSection}
        section={activeSection}
      />

      {activeSection === "home" ? (
        <>
          <HeroSection toggleFunction={() => updateHasToggleNav()} />
          <MovieSection
            fetchedMovies_popular={popularMovies}
            fetchedMovies_trending={trendingMovies}
            loadingState={loading}
            url={imageUrl}
          />
        </>
      ) : null}

      {activeSection === "favourities" ? (
        <FavouritesSection toggleFunction={() => updateHasToggleNav()} />
      ) : null}
      {activeSection === "trending" ? (
        <Trending toggleFunction={() => updateHasToggleNav()} />
      ) : null}
    </div>
  );
};

export default HomePage;
