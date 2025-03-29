import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import {
  HeartSvg,
  MenuBar,
  NotificationSvg,
  SearchSvg,
} from "../svg-icons/svgIcons";
import hero from "../../assets/hero00.webp";

const HeroSection = (props) => {
  
  return (
    <header className={styles.HeroSection}>
      <div className={styles.navGroup}>
        <button className={styles.MenuBar} onClick={props.toggleFunction}>
          <MenuBar />
        </button>
        <nav>
          <ul>
            <li>Movies</li>
            <li>Series</li>
            <li>Documentaries</li>
          </ul>
        </nav>

        <div className={styles.userGroup}>
          <SearchSvg />
          <NotificationSvg />
          <div className={styles.user}>
            <img src={hero} alt="user" />
            {/* <p>Olasunk</p> */}
          </div>
        </div>
      </div>

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
