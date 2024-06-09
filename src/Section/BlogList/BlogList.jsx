// import React from 'react'
import { useState, useEffect } from "react";
import BlogListCard from "../../Components/BlogListCard";
import "./BlogList.scss";
import axios from "axios";
import { BiLogoSlack } from "react-icons/bi";

const BlogList = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5; // Number of tasks per page

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://blog-3-n5tb.onrender.com/articleList")
      .then((result) => {
        const fetchBlogs = result.data.map((blog) => {
          // Convert createdAt string to a Date object
          const createdAtDate = new Date(blog.createdAt);

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

          // Return the blog object with formatted createdAt
          return {
            ...blog,
            createdAt: formattedDate,
          };
        });
        // Reverse the order of blogs after formatting
        const getBlogs = fetchBlogs
          .filter((blog) => blog.userID === "665cdfb361a15916c78c09cf")
          .reverse();

        // Set the state with formatted and reversed blogs
        setBlogs(getBlogs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  // Add empty dependency array to ensure useEffect runs only once

  // Calculate the current tasks to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstTask = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstTask, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(BiLogoSlack.length / blogsPerPage);

  return (
    <div className="BlogList">
      <div className="p-32 py-5">
        <div className="">
          <div className="">
            <h2 className="text-4xl text-[#ece383]">Tips. Insight. Guides.</h2>
            <p className="mt-3">
              Delving into my mind, sharing experiences, ideas, tips, passions{" "}
              <br />
              relating to software engineering or engineering in general.
            </p>
          </div>
        </div>
        <div className="mt-10">
          {/* <BlogListCard /> */}
          {/* id, title, article, tag, authorImage, authorName, authorUsername, articleImage ,createdAt  */}
          {loading ? (
            <div className="flex justify-center">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="mt-10">
              {currentBlogs.map((blog) => (
                <BlogListCard
                  key={blog._id}
                  id={blog._id}
                  // tag={blog.tag}
                  title={blog.title}
                  BlogImage={blog.articleImage}
                  createdAt={blog.createdAt}
                />
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="mt-10 flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 mx-1 rounded ${
                  index + 1 === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-10"></div>
      </div>
    </div>
  );
};

export default BlogList;
