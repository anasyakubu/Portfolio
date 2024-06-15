// import React from 'react'
import Nav from "../../Components/Nav";
import Footer from "../../Section/Footer/Footer";
import MessageSection from "../../Section/MessageSection/MessageSection";
import Subscribers from "../../Section/Subscribers/Subscribers";

const Messages = () => {
  return (
    <div className="Messages bg-[#1b1b1b] text-[#aeaeae]">
      <Nav />
      <Subscribers />
      <MessageSection />
      <Footer />
    </div>
  );
};

export default Messages;
