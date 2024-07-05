import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/scss";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./TestimonialListCard.css";

// // import required modules
// import { Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";

export default function TestimonySlides() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [testimonys, setTestimonys] = useState([]);

  useEffect(() => {
    axios
      .get("https://anasyakubu-cms-backend.vercel.app/testimonyList")
      // .get("https://anasyakubu-cms-api.onrender.com/testimonyList") // Render endpoint
      .then((result) => {
        const fetchTestimony = result.data;
        const testimony = fetchTestimony
          // .filter(
          //   (highlight) => highlight.userID === localStorage.getItem("userID")
          // )
          .reverse()
          .map((testimony) => ({
            ...testimony,
            createdAt: formatCreatedAtDate(testimony.createdAt),
          }));
        setTestimonys(testimony);
      })
      .catch((err) => console.log(err));
  }, []); // Add empty dependency array to ensure useEffect runs only once

  // Function to format createdAt date
  const formatCreatedAtDate = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    const options = {
      weekday: "long", // Full name of the day of the week
      month: "long", // Full name of the month
      day: "2-digit", // Two-digit day of the month
      year: "numeric", // Full year
    };
    return new Intl.DateTimeFormat("en-US", options).format(createdAtDate);
  };

  useEffect(() => {
    const handleResize = () => {
      // Adjust slidesPerView based on viewport width
      const newSlidesPerView = window.innerWidth >= 768 ? 4 : 1;
      setSlidesPerView(newSlidesPerView);
    };

    // Initial adjustment
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="w-full "
      >
        {testimonys.length > 0 ? (
          testimonys.map((listHighlight) => (
            <SwiperSlide
              key={listHighlight._id}
              className="bg-[#f8f8f8] text-[#1b1b1b] py-10 p-3 m-3 shadow-xl rounded-2xl border"
            >
              <h6 className="text-lg font-bold">{listHighlight.name}</h6>
              <p className="mt-3 text-sm font-light">
                {listHighlight.userTitle}
              </p>
              <p className="text-sm mt-3" style={{ fontSize: "13px" }}>
                {listHighlight.testimony}
              </p>
              <img
                src={listHighlight.userImage}
                className="w-8 mt-5 rounded-full"
              />
            </SwiperSlide>
          ))
        ) : (
          <p>No Testimony</p>
        )}
      </Swiper>
    </>
  );
}
