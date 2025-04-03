import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import { HeartSvg } from "../svg-icons/svgIcons";
import { NavigationHorizontal } from "../NavigationHorizontal/NavigationHorizontal";

const HeroSection = (props) => {
  return (
    <header className={styles.HeroSection}>
      <NavigationHorizontal toggleFunction={props.toggleFunction} />
      <div className={styles.HeroSectionContent}>
        <div>
          <h2>Insider</h2>
          <p>2022 | Comedy, horror | 1 season</p>
        </div>
        <div className={styles.heroBtn}>
          <button>Watch now</button>
          <button>
            <HeartSvg />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
