import React from "react";
import hero from "../../assets/hero00.webp";
import styles from './NavigationHorizontal.module.css'
import { MenuBar, NotificationSvg, SearchSvg } from "../svg-icons/svgIcons";

export const NavigationHorizontal = (props) => {
  return (
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
  );
};
