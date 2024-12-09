import React, { useState, useEffect } from "react";
import banner1 from "../assets/Images/Banners/banner-singapore.jpg";
import "./Carousel.css";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: banner1,
      title: "Unlock Your Business Full Potential",
    },
    {
      id: 2,
      image: banner1,
      title: "Achieve Success With Innovation and Growth",
    },
    {
      id: 3,
      image: banner1,
      title: "Empower Your Team for Maximum Efficiency",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full mx-auto">
      {/* Slide Container */}
      <div className="overflow-hidden relative">
        <div
           className="flex transition-transform duration-500 ease-in-out"
           style={{
             transform: `translateX(-${currentIndex * 100}%)`,
           }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 w-full relative">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full object-cover h-[400px] md:h-[400px] lg:h-[600px]"
              />

              {/* Animated Rings */}
              <div className="animated-rings">
                <div className="animated-ring"></div>
                <div className="animated-ring"></div>
                <div className="animated-ring"></div>
              </div>

              {/* Animated Text */}
              <div
                className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-4 lg:left-20"
                style={{
                  maxWidth: "600px",
                }}
              >
                <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-bold">
                  {slide.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 md:p-3 rounded-full hover:bg-blue-700 transition"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 md:p-3 rounded-full hover:bg-blue-700 transition"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              currentIndex === index ? "bg-blue-900" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;



// import React, { useState, useEffect } from "react";
// import techback from "../assets/techbackground.jpeg"
// const Carousel = () => {
//   const slides = [
//     {
//       id: 1,
//       image: techback,
//       title: "Slide 1",
//     },
//     {
//       id: 2,
//       image:techback,
//       title: "Slide 2",
//     },
//     {
//       id: 3,
//       image: techback,
//       title: "Slide 3",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   // Auto-slide logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       goToNext();
//     }, 10000); // Change slide every 1 second

//     return () => clearInterval(timer); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div className="relative w-full mx-auto">
//       {/* Slide Container */}
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide) => (
//             <div key={slide.id} className="flex-shrink-0 w-full">
//               <img
//                 src={slide.image}
//                 // alt={slide.title}
//                 className="w-full object-cover"
//               />
//               {/* <div className="text-center bg-opacity-70 bg-blue-900 text-white py-2">
//                 {slide.title}
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={goToPrevious}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full hover:bg-blue-700 transition"
//       >
//         ❮
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full hover:bg-blue-700 transition"
//       >
//         ❯
//       </button>

//       {/* Indicators */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-blue-900" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
