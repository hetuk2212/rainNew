import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/pagination";

// Dummy Images
import erpImage from "../assets/Images/Icons/home_erp_.png";
import chatbotImage from "../assets/Images/Icons/chatbot.gif";
import customDevImage from "../assets/Images/Icons/robot.png";
import digitalworkspace from "../assets/Images/Icons/home_dt.png";

const PlanSlider = () => {
  const plans = [
    { title: "ERP Practice (Oracle)", image: erpImage },
    { title: "Chatbots", image: chatbotImage },
    { title: "Custom Development", image: customDevImage },
    { title: "Digital Workspace", image: digitalworkspace },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <div className="my-10 py-10 bg-gray-50 rounded">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Our Services
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Scroll every 3 seconds
            disableOnInteraction: false, // Keep autoplay running even after user interaction
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]} // Add Autoplay module
          className="mySwiper"
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-6 text-center m-4 mb-1">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
                />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
                  {plan.title}
                </h3>
                <button className="flex items-center justify-center mx-auto w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-500 text-white rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-blue-500 hover:shadow-[0_4px_10px_rgba(59,130,246,0.5)]">
                  →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlanSlider;
