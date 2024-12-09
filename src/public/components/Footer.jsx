import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0c1224] text-white py-12 px-6 md:px-16 lg:px-32 relative">
      {/* Header Section */}
      <div className="text-center lg:text-left space-y-4 mb-8">
        <h2 className="text-3xl font-bold text-blue-500 animate-pulse">RAIFOX</h2>
        <p className="text-sm md:text-lg">
          Process consultants with a care to identify the root cause and deliver efficient solutions.
        </p>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 py-6 px-8 rounded-lg mb-12 shadow-lg overflow-hidden relative">
        <h3 className="text-center text-xl md:text-2xl font-bold text-white">
          <span className="animate-slide">Any Custom Development Solutions? ✦ Looking For Collaboration?</span>
        </h3>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        {/* About Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4 underline decoration-blue-500">ABOUT COMPANY</h4>
          <p className="leading-relaxed">
            At RAIFOX, we understand every business problem is unique. We help identify the root cause, whether it relates to people, processes, or technology. Our solutions consider culture, cost, and capability.
          </p>
          <p className="mt-4">
            With expertise in AI automation, Chatbots, RPA, ERP consulting, and offices across Silicon Valley, Singapore, Malaysia, and India, we bring the latest innovations to our clients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 underline decoration-blue-500">QUICK LINKS</h4>
          <ul className="space-y-3">
            <li>
              <a href="#latest-blogs" className="hover:text-blue-400 transition duration-300">
                ➤ Latest Blogs
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-blue-400 transition duration-300">
                ➤ Careers
              </a>
            </li>
            <li>
              <a href="#privacy-policy" className="hover:text-blue-400 transition duration-300">
                ➤ Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 underline decoration-blue-500">SERVICES</h4>
          <ul className="space-y-3">
            <li>
              <a href="#digital-transformation" className="hover:text-blue-400 transition duration-300">
                ➤ Digital Transformation
              </a>
            </li>
            <li>
              <a href="#rpa" className="hover:text-blue-400 transition duration-300">
                ➤ Robotic Process Automation
              </a>
            </li>
            <li>
              <a href="#erp-practice" className="hover:text-blue-400 transition duration-300">
                ➤ ERP Practice (Oracle)
              </a>
            </li>
            <li>
              <a href="#chatbots" className="hover:text-blue-400 transition duration-300">
                ➤ Chatbots
              </a>
            </li>
            <li>
              <a href="#custom-development" className="hover:text-blue-400 transition duration-300">
                ➤ Custom Development
              </a>
            </li>
            <li>
              <a href="#digital-workforce" className="hover:text-blue-400 transition duration-300">
                ➤ Digital Workforce
              </a>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 underline decoration-blue-500">LOCATION</h4>
          <iframe
            className="rounded-lg border-2 border-gray-700 shadow-md w-full h-52"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31713.92657100986!2d101.60734692424124!3d3.046591495511364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcd4ddfd44405%3A0x300dddf20a6bfa4b!Raifox%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1682076483691!5m2!1sen!2smy"
            allowFullScreen
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 text-center text-xs text-gray-400">
        <p>
          Copyright © 2024{" "}
          <span className="text-blue-500 font-semibold">RAIFOX</span>. All Rights Reserved.
        </p>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-10 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
