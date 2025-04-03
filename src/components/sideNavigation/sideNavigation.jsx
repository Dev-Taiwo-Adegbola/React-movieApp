import React, { useState } from "react";
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
  const sections = () => {
    pro;
  };

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
        <button
          onClick={() => {
            props.sectionToggle("home");
          }}
        >
          <FilmSvg /> {props.section === "home" ? <b>Home</b> : "Home"}
        </button>
        <button
          onClick={() => {
            props.sectionToggle("favourities");
          }}
        >
          <HeartSvg />{" "}
          {props.section === "favourities" ? <b>Favourites</b> : "Favourites"}
        </button>
        <button
          onClick={() => {
            props.sectionToggle("trending");
          }}
        >
          <TrendingGraphSvg />{" "}
          {props.section === "trending" ? <b>Trending</b> : "Trending"}
        </button>
        <button
          onClick={() => {
            props.sectionToggle("comingSoon");
          }}
        >
          <CalenderSvg />{" "}
          {props.section === "comingSoon" ? <b>Coming soon</b> : "Coming soon"}
        </button>
      </div>
      <div className={styles.communityGroup}>
        <button
          onClick={() => {
            updateHomeToggle();
          }}
        >
          <CommunitySvg /> Community
        </button>
        <button
          onClick={() => {
            updateHomeToggle();
          }}
        >
          <SocialSvg /> Social
        </button>
      </div>
      <div className={styles.settingsGroup}>
        <button
          onClick={() => {
            updateHomeToggle();
          }}
        >
          <SettingsSvg /> Settings
        </button>
        <button
          onClick={() => {
            updateHomeToggle();
          }}
        >
          <LogoutSvg /> Logout
        </button>
      </div>
    </div>
  );
};

export default SideNavigation;
