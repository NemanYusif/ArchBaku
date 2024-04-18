import React from "react";
import TopHeader from "../../Components/TopHeader";
import Header from "../../Components/Header";
import HeroSection from "../../Components/HeroSection";
import About from "../../Components/About";
import Project from "../../Components/Project";
import Service from "../../Components/Service";
import TexnoCars from "../../Components/TexnoCars";
import News from "../../Components/News";
import Colleagues from "../../Components/Collesgues";
import Connect from "../../Components/Connect";
import Maps from "../../Components/Maps";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <HeroSection />
      <About />
      <Project />
      <Service />
      <TexnoCars />
      <News />
      <Colleagues />
      <Connect />
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
