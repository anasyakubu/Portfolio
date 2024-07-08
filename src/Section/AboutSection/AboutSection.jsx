// import React from 'react'
import "./AboutSection.scss";
import Me from "../../assets/logo.png";
import { FaRegStar } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="AboutSection bg-[#1b1b1b] text-[#aeaeae]" id="About">
      <hr className="bg-[#aeaeae]" style={{ textDecoration: "doted" }} />
      <div className="p-24">
        <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* text */}
          <div className="">
            <div className="">
              <h6 className="text-[#aeaeae] text-3xl">About Me.</h6>
              <p className="mt-5 text-sm">
                Hi, I`m <span className="text-[#f8f8f8]">I`m Anas Yakubu</span>{" "}
                👋. I love solving problems for a living, bridging the gap
                between people and digital spaces, and I`m an anime 🏯
                enthusiast.
              </p>
              <p className="mt-5 text-sm">
                I currently work at{" "}
                <span className="text-[#f8f8f8]">NYM Technologies Limited</span>{" "}
                as a Junior Full Stack Developer, where I design and develop
                inclusive web experiences that meet web standards for over 1000
                users globally. <br /> Before this role, I was an intern Full
                Stack Developer at the same company, focusing on developing
                websites and software for users.
              </p>

              <p className="mt-5 text-sm">
                Before joining{" "}
                <span className="text-[#f8f8f8]">
                  NYM Technologies Limited,
                </span>{" "}
                , I studied{" "}
                <span className="text-[#f8f8f8]">
                  BSc Information Technology
                </span>{" "}
                at{" "}
                <span className="text-[#f8f8f8]">
                  Bayero University Kano (BUK)
                </span>{" "}
                , where I learned HTML and developed JavaScript applications and
                interfaces for academic and personal projects.
              </p>
              <div
                className="p-3 mt-5 bg-[#131418] text-[#f8f8f8]"
                style={{ borderLeft: "3px solid green" }}
              >
                <p className="text-sm font-light">
                  Three years into my software engineering journey, I delivered
                  a graduation speech, reflecting on our growth, challenges, and
                  future prospects. It was a proud and grateful moment,
                  celebrating our achievements and the bonds we formed.
                </p>
              </div>
              {/* <p className="mt-5 text-sm">
                I once also led the frontend team at Code Tech Technologies, an
                technology startup through building multiple React applications
                into a single robust websites and platform.
              </p> */}
              <div className="mt-5">
                <p className="mt-5 text-sm">
                  Here are a few technologies I’ve been working with recently:
                </p>
                <div className="">
                  <div className="flex gap-3">
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Javascript</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Typescript</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Nodejs</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>PHP</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>SQL</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Mongodb</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>REST API</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Supabase</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Firebase</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Reactjs</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Tailwindcss</span>
                    </p>

                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Git</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>PostgreSQL</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>scss</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Next.js</span>
                    </p>
                    <p className="text-sm flex gap-2 mt-5">
                      <span className="text-green-500">
                        <FaRegStar />
                      </span>
                      <span>Python</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="flex justify-center text-center">
            <div className="">
              <img className="w-64" src={Me} alt="Me" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
