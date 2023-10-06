import React from "react";
// import Header from '../header/header'
import Banner from "../banner/banner";
// import Footer from '../footer/footer'
import LatestNews from "../latest-news/latest-news";
import AwardWinning from "../award-winning/award-winning";
import SharedStories from "../shared-stories/shared-stories";
import TrustedBy from "../trusted-by/trusted-by";
import JoinCommunity from "../join-community/join-community";
import DeveloperBuilt from "../developer-built/developer-built";
import CreateVideos from "../create-videos/create-videos";
import DigitalCreation from "../digital-creations/digital-creations";
import OurCustomers from "../our-customers/our-customers";
import ConversationalAI from "../conversational-aI/conversational-ai";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <SharedStories />
      <DigitalCreation />
      <CreateVideos />
      <ConversationalAI />
      <DeveloperBuilt />
      <JoinCommunity />
      <OurCustomers />
      <TrustedBy />
      <LatestNews />
      <AwardWinning />
      {/* <Footer /> */}
    </>
  );
};
export default Home;
