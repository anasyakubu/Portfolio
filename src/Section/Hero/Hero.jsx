// import React from 'react'
import { Zoom } from "react-awesome-reveal";
import Nav from "../../Components/Nav";
import "./Hero.scss";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import jsPDF from "jspdf";

const Hero = () => {
  // #aeaeae
  // #f8f8f8
  // font-nunito-eb
  return (
    <div className="Hero bg-[#1b1b1b] text-[#aeaeae]">
      <Nav />
      <div className="p-32 lg:py-10">
        <div className="">
          <Zoom triggerOnce>
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
              I`m a <span className="text-[#f8f8f8]">software engineer</span>{" "}
              who enjoys seamlessly bridging the gap between{" "}
              <span className="text-[#f8f8f8]">people and digital space</span>{" "}
              by day, and a <span className="text-[#f8f8f8]">anime</span> lover.
            </p>
            <div className="mt-10 flex gap-5">
              <Link
                to="mailto:yakubuanas04@gmail.com"
                className="p-3 pr-6 pl-6 rounded-full bg-[#f8f8f8] text-black text-sm hover:bg-transparent border border-[#f8f8f8] hover:text-[#f8f8f8] hover:border-[#f8f8f8]"
              >
                Get In Touch
              </Link>
              <Link
                to="https://drive.google.com/file/d/1oG55p4bcGIOqqi66xYZjqAmssKo2Ph5t/view"
                // onClick={DownloadPDF}
                target="_blank"
                className="p-3 pr-6 pl-6 rounded-full bg-transparent text-[#f8f8f8] border-[#f8f8f8] border text-sm"
              >
                View Resume
              </Link>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Hero;
