import React from "react";
import styles from "./sideNavigation.module.css";
import Logo from "../logo/logo";
import {
  CalenderSvg,
  CommunitySvg,
  FilmSvg,
  HeartSvg,
  LogoutSvg,
  SettingsSvg,
  SocialSvg,
  TrendingGraphSvg,
  XIcon,
} from "../svg-icons/svgIcons";

const SideNavigation = (props) => {
  return (
    <div
      className={
        props.activeMob === true
          ? `${styles.sideNavigation} ${styles.sideNavigationActive}`
          : styles.sideNavigation
      }
    >
      <div className={styles.sideLogoGroup}>
        <Logo />

        <button onClick={props.toggleFunction}>
          <XIcon />
        </button>
      </div>
      <div className={styles.movieGroup}>
        <button>
          <FilmSvg /> Home
        </button>
        <button>
          <HeartSvg /> Favourites
        </button>
        <button>
          <TrendingGraphSvg /> Trending
        </button>
        <button>
          <CalenderSvg /> Coming soon
        </button>
      </div>
      <div className={styles.communityGroup}>
        <button>
          <CommunitySvg /> Community
        </button>
        <button>
          <SocialSvg /> Social
        </button>
      </div>
      <div className={styles.settingsGroup}>
        <button>
          <SettingsSvg /> Settings
        </button>
        <button>
          <LogoutSvg /> Logout
        </button>
      </div>
    </div>
  );
};

export default SideNavigation;
