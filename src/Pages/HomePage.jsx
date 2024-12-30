import React from "react";
import "../Styles/HomePage.scss";
import DirectoryMenu from "../Components/DirectoryMenu";
import HeroSection from "../Components/HeroSection";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <div className="directory-menus">
        <DirectoryMenu />
      </div>
    </div>
  );
};

export default HomePage;
