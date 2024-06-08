// import React from 'react'
import Nav from "../../Components/Nav";
import "./Hero.scss";

const Hero = () => {
  // #aeaeae
  // #f8f8f8
  // font-nunito-eb
  return (
    <div className="Hero bg-[#1b1b1b] text-[#aeaeae]">
      <Nav />
      <div className="p-32 lg:py-10">
        <div className="">
          <h6 className="text-[#aeaeae]">Hi 👋, my name is</h6>
          <h1 className="mt-2 text-7xl font-extrabold text-[#f8f8f8]">
            Anas Yakubu.
          </h1>
          <h1 className="mt-5 text-7xl font-extrabold text-[#aeaeae]">
            It`s Not Magic, <br /> It`s Programming.
          </h1>
          <p className="mt-5 text-[#aeaeae]">
            I`m a Self-taught Software Enigineer with a passion for thoughtful
            UI design, collaboration, and building.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
