import React from "react";
import envoiceimg from "../assets/Images/Icons/einv-banner-web.png";

const EInvoicingCard = () => {
  return (
    <div className="bg-white mt-10 mb-10 px-4 md:px-16 lg:px-32 rounded-xl border-2 p-6 flex flex-col lg:flex-row items-center max-w-5xl mx-auto">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
          E-Invoicing
        </h2>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg">
          Leveraging RPA for Efficient Document
        </p>
        <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm hover:bg-blue-700">
          E-Invoicing
        </button>
      </div>

      {/* Right Content - Image Section */}
      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <img
          src={envoiceimg}
          alt="Laptop Illustration"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default EInvoicingCard;
