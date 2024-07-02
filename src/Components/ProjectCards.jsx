// import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCards = ({ Image, title, details, link, live, color }) => {
  return (
    <div className="ProjectCards">
      <div className="p-2 m-2">
        <div className="">
          <img className="rounded-md" src={Image} alt="Project Image" />
          <div className="">
            <h6 className="mt-3 text-[#f8f8f8]">{title}</h6>
            <p className="mt-3 text-sm">{details}</p>
            <div className="mt-3 flex justify-between">
              <div
                className={`text-[10px] min-w-[50px] px-[8px] py-1 rounded-[30px] ${color} text-white ppR flex items-center justify-between gap-2`}
              >
                {live}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className={`${color}`}
                  height="8"
                  width="8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
              <Link to={link} target="_blank" className="text-sm flex gap-2">
                <span>Vist</span>
                <span>
                  <FiExternalLink />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
