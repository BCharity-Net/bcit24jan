import React from "react";
import "../app/globals.css";

import { GetStaticPropsContext } from "next";

import NavigationBar from "../components/NavigationBar";
import MainSection from "../components/MainSection";
//import VHRSection from "../components/VHR";
import DiscussionSection from "../components/Discussion";
import AltDiscussionSection from "../components/AltDiscussion";
import MapSection from "../components/Map";
// import SourceSection from "../components/GoToSource";
import Footer from "../components/Footer";
import SourceSection from "../components/GoToSource";
import LogoBanner from "../components/LogoBanner";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <MainSection />
      <DiscussionSection />
      <AltDiscussionSection />
      <MapSection />
      <SourceSection />
      <LogoBanner/>
      <Footer />
    </>
  );
};

export async function getStaticProps(context: { locale: any; }) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default
    },
  };
}

export default HomePage;
