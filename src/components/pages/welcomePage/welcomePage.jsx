import React from "react";
import Logo from "../../logo/logo";
import styles from "./welcomePage.module.css";

const WelcomePage = () => {
  return (
    <>
      <div className={styles.welcomePageContainer}></div>
      <div className={styles.welcomePage}>
        <Logo />
        <p className={styles.enjoyMovieText}>Enjoy the newest movies</p>
       <button className={styles.loginBtn}>Log in</button>
        <p className={styles.signUpText}>
          No account? <span>Sign up</span>
        </p>
      </div>
    </>
  );
};

export default WelcomePage;
