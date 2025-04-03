import React from "react";
import SideNavigation from "../../sideNavigation/sideNavigation";
import HeroSection from "../../HeroSection/HeroSection";
import styles from "./HomePage.module.css";
import MovieSection from "../../MovieSection/MovieSection";
import { useState } from "react";
import FavouritesSection from "../FavouritesSection/FavouritesSection";
import Trending from "../../trending/Trending";

const HomePage = () => {
  const [hasToggleNav, setHasToggleNav] = useState(false);

  const updateHasToggleNav = () => {
    setHasToggleNav((prev) => !prev);
  };

  const [activeSection, setactiveSection] = useState("home");

  const updateActiveSection = (section) => {
    setactiveSection(section);
  };

  return (
    <div className={styles.homepage}>
      <SideNavigation
        activeMob={hasToggleNav}
        toggleFunction={() => updateHasToggleNav()}
        sectionToggle={setactiveSection}
        section={activeSection}
      />

      {activeSection === 'home' ? <><HeroSection toggleFunction={() => updateHasToggleNav()} />
      <MovieSection /></> :null}

      {activeSection === 'favourities' ? <FavouritesSection toggleFunction={() => updateHasToggleNav()} /> :null}
      {activeSection === 'trending' ? <Trending toggleFunction={() => updateHasToggleNav()} /> :null}
    </div>
  );
};

export default HomePage;
