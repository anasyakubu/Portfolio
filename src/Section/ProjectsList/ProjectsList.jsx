// import React from 'react'
import "./ProjectsList.scss";
import invoice from "../../assets/invoice.png";
import ai from "../../assets/ai-sass.png";
import prompt from "../../assets/ai-prompt.png";
import task from "../../assets/task-manager.png";
import healty from "../../assets/healthy.png";
import foc from "../../assets/focai.png";
import portifolo from "../../assets/portifiolo-2.png";
import portifolo1 from "../../assets/portifiolo-1.png";
import portifolo3D from "../../assets/portifiolo-3d.png";
import dbrs from "../../assets/dbrs.png";
import blog from "../../assets/blog.png";
import pharmacy from "../../assets/phamacy.png";
import anime from "../../assets/anime.png";
import khadi from "../../assets/khadi.png";
import NYM from "../../assets/nym.png";
import GC from "../../assets/mygradecard.png";
import Maalesh from "../../assets/maalesh.png";
import portifiolo3 from "../../assets/portifiolo-3.png";
import xd from "../../assets/xd.png";
import movies from "../../assets/movie.png";
import berly from "../../assets/berly.png";
import password from "../../assets/password.png";
import foundation from "../../assets/foundation.png";
import kingmark from "../../assets/kingmark.png";

import ProjectCards from "../../Components/ProjectCards";

const ProjectsList = () => {
  return (
    <div className="ProjectsList bg-[#1b1b1b] text-[#aeaeae]">
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
              Image={portifolo1}
              title="Portifolio Website"
              details="My Portifolo website build with React Vite App"
              link="https://anasyakubu.vercel.app/"
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
            <ProjectCards
              Image={dbrs}
              title="Diligent Basic Remidal Studies"
              details="A remidal study portal for a school in Nigeria"
              link="https://dbrs.com.ng/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={pharmacy}
              title="Kano Pharmacy"
              details="A Pharmacy website for a client"
              link="https://pharmacy-three-tau.vercel.app/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={anime}
              title="Anime Connect"
              details="A Anime Website to post, vote wallpapers"
              link=""
              live="Not-Live"
              color="bg-red-500"
            />
            <ProjectCards
              Image={portifolo3D}
              title="3D Portifolio"
              details="My 3D Portifolio"
              link=""
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={khadi}
              title="Khadi Kaku"
              details="A webapp for a fashion school to take learn all about fashion"
              link="https://khadikaku.com.ng/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={NYM}
              title="NYM Technologies"
              details="A website for a technological company in Nigeria"
              link="http://thisisnym.com/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={GC}
              title="My Grade Card"
              details="A website for a School Management System in Nigeria"
              link="http://mygradecard.com/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={Maalesh}
              title="Maalesh Travel"
              details="A webapp for a Traveling Agency"
              link="https://maaleshtravels.com.ng/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={portifiolo3}
              title="Second Portifolio"
              details="My Second Portifolio"
              link="https://portfolio-beta-psi.vercel.app/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={xd}
              title="XD Leather Accessories"
              details="A website for a clothing brand"
              link=""
              live="Not-Live"
              color="bg-red-500"
            />
            <ProjectCards
              Image={movies}
              title="Explained"
              details="A webapp that explains all movies, cartoons, anime and series"
              link="https://movie-expainer.netlify.app/"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={berly}
              title="Berly Holdings"
              details="A website for Investment Company"
              link="https://berylholdings.com.ng/index2.php"
              live="Live"
              color="bg-green-600"
            />
            <ProjectCards
              Image={password}
              title="Password Management"
              details="A website that manage all your password"
              link=""
              live="Not-Live"
              color="bg-red-500"
            />
            <ProjectCards
              Image={foundation}
              title="NYM Foundation"
              details="A website for charity organisation"
              link=""
              live="Not-Live"
              color="bg-red-500"
            />
            <ProjectCards
              Image={kingmark}
              title="King Mark Global Nigeria Limited"
              details="A Job Applucation portal for a company in Nigeria"
              link="https://www.kingmarkgloballtd.com.ng/"
              live="Live"
              color="bg-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
