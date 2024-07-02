import "./ProjectsList.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import ProjectCards from "../../Components/ProjectCards";
import Skeleton from "../../Components/SkeletonProjects";

const ProjectsList = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [bgColor, setBgColor] = useState("");
  const projectsPerPage = 8; // Number of projects per page

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://anasyakubu-cms-api.onrender.com/projectList")
      .then((result) => {
        const fetchProjects = result.data.map((project) => {
          // Convert createdAt string to a Date object
          const createdAtDate = new Date(project.createdAt);
          const live = project.status;

          // Determine the bgColor based on the status
          const bgColor = live === "Live" ? "text-green-400" : "text-red-600";
          // Options for formatting the date
          const options = {
            weekday: "long", // Full name of the day of the week
            day: "2-digit", // Two-digit day of the month
            month: "long", // Full name of the month
            year: "numeric", // Full year
          };

          // Format the date using Intl.DateTimeFormat
          const formattedDate = new Intl.DateTimeFormat(
            "en-US",
            options
          ).format(createdAtDate);

          // Return the project object with formatted createdAt
          return {
            ...project,
            createdAt: formattedDate,
            bgColor: bgColor,
          };
        });

        // Set the state with formatted projects
        setProjects(fetchProjects);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Calculate the current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="ProjectsList bg-[#1b1b1b] text-[#aeaeae]">
      <div className="p-24">
        <div className="">
          <h6 className="text-[#aeaeae] text-3xl">Projects</h6>
          <p className="mt-3 text-md">
            This space contains some of the things I’ve built to solve some of
            the problems I find frustrating or others find as well. Other random
            projects can be found in my Universe.
          </p>
        </div>
        <div className="mt-10">
          <div className="">
            {loading ? (
              <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            ) : (
              <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                {currentProjects.map((project) => (
                  <ProjectCards
                    key={project._id}
                    id={project._id}
                    Image={project.projectImage}
                    title={project.name}
                    details={project.details}
                    live={project.status}
                    link={project.projectLink}
                    color={project.bgColor}
                    // createdAt={project.createdAt}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Pagination Controls */}
          <div className="mt-5 flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 mx-1 rounded ${
                  index + 1 === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
