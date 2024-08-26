// import React from 'react'
import "./Subscribers.scss";
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createClient } from "smtpexpress";

const smtpexpressClient = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  projectSecret: import.meta.env.VITE_PROJECR_SECRET,
});

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
        "https://api-anasyakubu-cms.vercel.app/subscriber/add",
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
      // send Mail to users when Subscribe
      await smtpexpressClient.sendApi.sendMail({
        subject:
          "Welcome to Our Community! You're Now Subscribed to Our Newsletter",
        message: `<!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Welcome to Our Community! You're Now Subscribed to Our Newsletter</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          line-height: 1.6;
                          color: #333;
                      }
                      .container {
                          width: 90%;
                          max-width: 600px;
                          margin: 0 auto;
                          padding: 20px;
                          background-color: #f9f9f9;
                          border-radius: 10px;
                          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                      }
                      .footer {
                          margin-top: 20px;
                      }
                  </style>
              </head>
              <body>
                  <div class="container">
                      <p>Hi,</p>

                      <p>Thank you for subscribing to our newsletter! We're thrilled to have you join our community. Get ready for regular updates, insights, and exclusive content delivered straight to your inbox.</p>

                      <p>We’re committed to providing you with valuable information that will keep you informed, inspired, and ahead of the curve. If there’s anything specific you’d love to see in our upcoming issues, feel free to reply to this email – we’d love to hear from you!</p>

                      <p>Stay tuned for more, and welcome aboard!</p>

                      <p class="footer">Best regards,<br>Anas Yakubu</p>
                  </div>
              </body>
              </html>`,
        sender: {
          name: "Anas Yakubu",
          email: "yakubuanas02@gmail.com",
        },
        recipients: {
          // name: "My recipient's name",
          email: data.email,
        },
      });
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
