import React from "react";
import SideNavigation from "../../sideNavigation/sideNavigation";
import HeroSection from "../../HeroSection/HeroSection";
import styles from "./HomePage.module.css";
import MovieSection from "../../MovieSection/MovieSection";
import { useState } from "react";
const HomePage = () => {
  const [hasToggleNav, setHasToggleNav] = useState(false);

  const updateHasToggleNav = () => {
    setHasToggleNav((prev) => !prev);
  };

  return (
    <div className={styles.homepage}>
      <SideNavigation activeMob={hasToggleNav} toggleFunction={() => updateHasToggleNav()} />

      <HeroSection toggleFunction={() => updateHasToggleNav()} />
      <MovieSection />
    </div>
  );
};

export default HomePage;
