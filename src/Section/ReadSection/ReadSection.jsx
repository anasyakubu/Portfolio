// import React from 'react'
import { useState, useEffect } from "react";
import "./ReadSection.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCalendarNumber } from "react-icons/io5";
// import BlogImg from "../../assets/uploadthings-code.png";
import axios from "axios";
import he from "he";
import { Link, useParams } from "react-router-dom";
import Skeleton from "../../Components/Skeleton";

const ReadSection = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  // console.log(id);

  // const [blogID, setBlogID] = useState("");
  // const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://blog-3-n5tb.onrender.com/getArticle/${id}`)
      .then((result) => {
        const blogData = result.data[0];
        // Convert createdAt string to a Date object
        const createdAtDate = new Date(blogData.createdAt);

        // Options for formatting the date
        const options = {
          weekday: "long", // Full name of the day of the week
          day: "2-digit", // Two-digit day of the month
          month: "long", // Full name of the month
          year: "numeric", // Full year
        };

        // Format the date using Intl.DateTimeFormat
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          createdAtDate
        );

        // console.log(taskData);
        // setBlogID(blogData._id);
        // console.log(taskID);
        // setTag(blogData.tag);
        setTitle(blogData.title);
        setArticle(blogData.article);
        setArticleImage(blogData.articleImage);
        setCreatedAt(formattedDate);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="ReadSection">
      <div className="p-32 py-16">
        <div className="">
          <Link to="/Blog" className="flex gap-2 text-green-600">
            <span className="py-1">
              <IoMdArrowRoundBack />
            </span>{" "}
            <span>Back</span>
          </Link>
          {loading ? (
            // <div className="flex justify-center">
            //   <div className="spinner"></div>
            // </div>
            <Skeleton />
          ) : (
            <div className="mt-10 content">
              <h2 className="text-4xl">{title}</h2>
              <div className="mt-5">
                <p className="flex gap-2">
                  <span className="py-1">
                    <IoCalendarNumber />
                  </span>
                  <span>{createdAt}</span>
                </p>
              </div>
              <div className="mt-10 flex justify-center">
                <img
                  className="rounded-xl w-[600px]"
                  src={articleImage}
                  alt="BlogImage"
                />
              </div>
              <div
                className="mt-10 content"
                dangerouslySetInnerHTML={{ __html: he.decode(article) }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadSection;
