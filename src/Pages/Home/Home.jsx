// import React from 'react'

import AboutSection from "../../Section/AboutSection/AboutSection";
import Footer from "../../Section/Footer/Footer";
import Hero from "../../Section/Hero/Hero";
import ProjectSection from "../../Section/ProjectSection/ProjectSection";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <AboutSection />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default Home;
