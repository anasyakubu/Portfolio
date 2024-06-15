// import { useEffect, useState } from "react";
import TestimonialListCard from "../../Components/TestimonialListCard/TestimonialListCard";
import "./TestimonialList.scss";

const HighlightsList = () => {
  // const [highlights, setHighlights] = useState([]);

  return (
    <div className="HighlightsList bg-[#1b1b1b] text-[#aeaeae]">
      <div className="p-20">
        <div className="py-5">
          <h6 className="text-[#aeaeae] text-3xl">My Clients</h6>
          <p className="mt-3 text-md">
            Here are some people i have work with and what they have to say
            about me
          </p>
        </div>
        <div className="mt-10">
          <TestimonialListCard />
        </div>
      </div>
    </div>
  );
};

export default HighlightsList;
