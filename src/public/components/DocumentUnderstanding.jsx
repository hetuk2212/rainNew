import React from "react";
import softwarelogo from "../assets/Images/Banners/software-logo.png";

const DocumentUnderstanding = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white mt-10 mb-10 px-4 md:px-16 lg:px-32 rounded-2xl border border-gray-200 shadow-lg p-8 flex flex-col lg:flex-row items-center max-w-5xl mx-auto transition-transform hover:scale-105">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-blue-700">
          Document Understanding
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Leveraging RPA for Efficient Document Understanding: A Case Study on Forms 940 and 1040 using UiPath. Learn how automation can transform document processing.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-blue-700 shadow-md transition-all duration-300">
          Explore Document Understanding
        </button>
      </div>

      {/* Right Content - Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
        {/* Add subtle border and shadow to the image */}
        <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
          <img
            src={softwarelogo}
            alt="Laptop Illustration"
            className="w-full h-auto object-contain"
          />
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-50 opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUnderstanding;
