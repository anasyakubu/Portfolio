// import React from 'react'

import AboutSection from "../../Section/AboutSection/AboutSection";
import Footer from "../../Section/Footer/Footer";
import Hero from "../../Section/Hero/Hero";
import ProjectSection from "../../Section/ProjectSection/ProjectSection";
import TestimonialList from "../../Section/TestimonialList/TestimonialList";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <AboutSection />
      <ProjectSection />
      <TestimonialList />
      <Footer />
    </div>
  );
};

export default Home;
