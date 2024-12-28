import React from "react";
import "../Styles/HomePage.scss";
import DirectoryMenu from "../Components/DirectoryMenu";
import HeroSection from "../Components/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="homepage">
        <DirectoryMenu />
      </div>
    </>
  );
};

export default HomePage;
