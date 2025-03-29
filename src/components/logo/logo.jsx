import React from "react";
import styles from "./logo.module.css";
import { LogoSvg } from "../svg-icons/svgIcons";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoSvg />
      <p>WATCH</p>
    </div>
  );
};

export default Logo;
