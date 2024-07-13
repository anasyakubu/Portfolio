// import React from 'react'
import "./Subscribers.scss";
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Subscribers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [data, setData] = useState({
    email: "",
  });

  // console.log(userID);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = data;
    console.log(data);

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://api-anasyakubu-cms.vercel.app/subscribers/add",
        //"https://anasyakubu-cms-api.onrender.com/createSubscribers",
        {
          email,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Thank you for Subscribing to My Newsletter");
        navigate("/Messages");
        formRef.current.reset(); // Reset the form here
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Subscribers">
      <div className="p-24">
        <div className="">
          <div className="">
            <h2 className="text-4xl text-[#ece383]">Get. Updated.</h2>
            <p className="mt-3">
              Gain access to articles, tutorials, and resources that are not
              available anywhere else. <br />
            </p>
          </div>
        </div>
        <div className="mt-5">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              className="w-[70%] p-4 rounded-full outline-none border border-black text-black"
              type="text"
              name=""
              id=""
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Enter your Email Address."
            />
            <div className="mt-5">
              <button
                type="submit"
                className="p-3 w-36 pr-6 pl-6 rounded-full bg-[#f8f8f8] text-black text-sm hover:bg-transparent border border-[#f8f8f8] hover:text-[#f8f8f8] hover:border-[#f8f8f8]"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
