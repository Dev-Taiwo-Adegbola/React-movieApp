import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomePage from "./components/pages/welcomePage/welcomePage";
import SideNavigation from "./components/sideNavigation/sideNavigation";
import HeroSection from "./components/HeroSection/HeroSection";
import HomePage from "./components/pages/HomePage/HomePage";

function App() {
  return (
    <>
      <div>
        {/* <WelcomePage /> */}
        {/* <SideNavigation />
        <HeroSection /> */}
        <HomePage />
      </div>
    </>
  );
}

export default App;
