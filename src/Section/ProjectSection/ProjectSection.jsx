// import React from 'react'
import "./ProjectSection.scss";
import invoice from "../../assets/invoice.png";
import ai from "../../assets/ai-sass.png";
import prompt from "../../assets/ai-prompt.png";
import task from "../../assets/task-manager.png";
import healty from "../../assets/healthy.png";
import foc from "../../assets/focai.png";
import portifolo from "../../assets/portifiolo-2.png";
// import dbrs from "../../assets/dbrs.png";
import blog from "../../assets/blog.png";

import ProjectCards from "../../Components/ProjectCards";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <div className="ProjectSection bg-[#1b1b1b] text-[#aeaeae]">
      <div className="p-24">
        <div className="">
          <h6 className="text-[#aeaeae] text-3xl">Projects</h6>
          <p className="mt-3 text-md">
            This space contains some of the things i`ve built to solve some of
            the problems i find frustrating or others find as well. Other random
            projects can be find in my Universe.
          </p>
        </div>
        <div className="mt-10">
          <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            <ProjectCards
              Image={invoice}
              title="Daily Invoice"
              details="Professional and Easy-to-use Online Invoicing Software for Startups, Business Owners and Freelancers."
              link="https://daily-invoice.vercel.app/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={ai}
              title="Titan AI"
              details=" AI Tools to Share Your Knowledge and Empower Youself"
              link="https://titan-orpin.vercel.app/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={prompt}
              title="Promptee"
              details="An Open-source AI Prompting tool for modern world to discover, create and sharing creative prompts"
              link="https://ai-prompts-app-nine.vercel.app/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={blog}
              title="Blog 3"
              details="A blog platform to share and write article all around the world"
              link="https://blog-3-post.vercel.app/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={healty}
              title="Healthy"
              details="A website for healthy food and diets"
              link="https://healthy-website-psi.vercel.app/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={task}
              title="Devograph"
              details="Devograph, your ultimate task manager software designed to streamline your workflow and enhance your productivity."
              link="https://devograph.vercel.app/login"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={foc}
              title="FocGPT"
              details="An AI App for studying for Faculty of Computing BUK"
              link="https://foc-ai.vercel.app/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={portifolo}
              title="First Portifolio"
              details="My first portifolio design using Reactjs"
              link=""
              live="Not-Live"
              color="bg-red-500"
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="p-3 pr-6 pl-6 rounded-full bg-[#f8f8f8] text-black text-sm hover:bg-transparent border border-[#f8f8f8] hover:text-[#f8f8f8] hover:border-[#f8f8f8]">
            <Link to="/Project"></Link>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
