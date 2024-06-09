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
          <h1 className="mt-5 text-7xl font-extrabold text-[#f8f8f8]">
            Anas Yakubu.
          </h1>
          <h1
            className="mt-5 text-7xl font-extrabold text-[#aeaeae]"
            // style={{ lineHeight: "5rem" }}
          >
            It`s Not Magic, It`s Programming.
          </h1>
          <p className="mt-10 text-lg font-light text-[#aeaeae]">
            I am a <span className="text-[#f8f8f8]">software engineer</span> who
            enjoys seamlessly bridging the gap between{" "}
            <span className="text-[#f8f8f8]">people and digital space</span> by
            day, and a <span className="text-[#f8f8f8]">anime</span> lover.
          </p>
          <div className="mt-10 flex gap-5">
            <button className="p-3 pr-6 pl-6 rounded-full bg-[#f8f8f8] text-black text-sm hover:bg-transparent border border-[#f8f8f8] hover:text-[#f8f8f8] hover:border-[#f8f8f8]">
              Get In Touch
            </button>
            <button className="p-3 pr-6 pl-6 rounded-full bg-transparent text-[#f8f8f8] border-[#f8f8f8] border text-sm">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
