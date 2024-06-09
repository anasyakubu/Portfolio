// import React from 'react'

import Nav from "../../Components/Nav";
import Footer from "../../Section/Footer/Footer";
import ProjectsList from "../../Section/ProjectsList/ProjectsList";

const Projects = () => {
  return (
    <div className="Projects bg-[#1b1b1b] text-[#aeaeae]">
      <Nav />
      <ProjectsList />
      <Footer />
    </div>
  );
};

export default Projects;
