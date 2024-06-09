// import React from 'react'

import Nav from "../../Components/Nav";
import BlogList from "../../Section/BlogList/BlogList";
import Footer from "../../Section/Footer/Footer";

const Blog = () => {
  return (
    <div className="Blog  bg-[#1b1b1b] text-[#aeaeae]">
      <Nav />
      <BlogList />
      <Footer />
    </div>
  );
};

export default Blog;
