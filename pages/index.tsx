import React from "react";
import "../app/globals.css";
import NavigationBar from "../components/NavigationBar";
import MainSection from "../components/MainSection";
// import VHRSection from "../components/VHR";
import DiscussionSection from "../components/Discussion";
// import MapSection from "../components/Map";
// import SourceSection from "../components/GoToSource";
// import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <MainSection />
      {
        //<VHR />
        <DiscussionSection />
        /*
      <Map />
      <Source />
      <Footer /> 
      */
      }
    </>
  );
};

export default HomePage;
