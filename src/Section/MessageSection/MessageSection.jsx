// import React from 'react'
import { useState, useRef } from "react";
import "./MessageSection.scss";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MessageSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [data, setData] = useState({});

  // console.log(userID);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, message } = data;
    console.log(data);

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://api-anasyakubu-cms.vercel.app/message/add",
        //"https://anasyakubu-cms-api.onrender.com/createMessage",
        {
          fullName,
          email,
          phone,
          message,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Message Sent Successfully");
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
    <div className="MessageSection">
      <hr />
      <div className="p-32">
        <div className="">
          <h6 className="text-[#aeaeae] text-3xl">Message Me</h6>
          <p className="mt-3 text-md">
            Send me a message and i would reply via email
          </p>
        </div>

        <div className="mt-10">
          <form ref={formRef} onSubmit={handleSubmit} action="">
            <div className="">
              <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <div className="">
                  <label htmlFor="">Full Name :</label>
                  <input
                    className="w-full mt-3 p-4 rounded-3xl outline-none border border-black text-black"
                    type="text"
                    placeholder="Anas Yakubu"
                    value={data.fullName}
                    onChange={(e) =>
                      setData({ ...data, fullName: e.target.value })
                    }
                  />
                </div>

                <div className="">
                  <label htmlFor="">Phone :</label>
                  <input
                    className="w-full mt-3 p-4 rounded-3xl  outline-none border border-black text-black"
                    type="text"
                    placeholder="+234-9090 9999 37"
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="w-full" htmlFor="">
                  Email :
                </label>

                <input
                  className="w-full mt-3 p-4 rounded-3xl  outline-none border border-black text-black"
                  type="text"
                  placeholder="yakubuanas04@gmail.com"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="">Message</label>
                <textarea
                  className="w-full mt-3 p-4 rounded-3xl outline-none border border-black text-black"
                  name=""
                  id=""
                  rows="10"
                  placeholder="Enter Message"
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="p-3 w-36 pr-6 pl-6 rounded-full bg-[#f8f8f8] text-black text-sm hover:bg-transparent border border-[#f8f8f8] hover:text-[#f8f8f8] hover:border-[#f8f8f8]"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
