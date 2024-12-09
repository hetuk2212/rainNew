import React from "react";

const TopNav = () => {
  return (
    <div style={{ backgroundColor: "#1e73be" }} className="text-white p-3 font-barlow hidden lg:block">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-2 lg:space-y-0 py-3 md:px-20">
        {/* Contact Information */}
        <div className="text-center lg:text-left text-sm md:text-base flex flex-wrap gap-5 ">
          <p className="mb-2 lg:mb-0">
            Call us:{" "}
            <a href="0000000" className="hover:underline">
            +60 13 880 2574
            </a>
          </p>
          <p>|</p>
          <p className="hidden md:block">
            Raifox Sdn Bhd, Tower B, 8-05, Vertical Business Suite, Bangsar
            South, 59200 Kuala Lumpur 
          </p>
          <p>|</p>
          <p>
          <a href="mailto:contact@symprio.com" className="hover:underline">
              contact@raifox.com
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-lg justify-center">
          {/* WhatsApp */}
          <a
            href="https://wa.me/60138802574"
            className="hover:text-green-400"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            className="hover:text-blue-300"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
