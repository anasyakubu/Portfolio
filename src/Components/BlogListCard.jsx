// import React from 'react'
import { Link } from "react-router-dom";
// import BlogImage from "../assets/uploadthings-code.png";

const BlogListCard = ({ title, BlogImage, createdAt, id }) => {
  return (
    <div className="BlogListCard mt-10">
      <div className="flex justify-center text-left">
        <div className="">
          <img
            className="w-[600px] rounded-lg"
            src={BlogImage}
            alt="Blog Image"
          />
          <p className="mt-5">{createdAt}</p>
          <h2 className="mt-5 text-xl underline">
            <Link to={`/ReadBlog/${id}`}>{title}</Link>
          </h2>
          <div className="mt-5">
            <Link
              to={`/ReadBlog/${id}`}
              className="p-3 pr-6 pl-6 rounded-full bg-[#f8f8f8] text-black text-sm hover:bg-transparent border border-[#f8f8f8] hover:text-[#f8f8f8] hover:border-[#f8f8f8]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
