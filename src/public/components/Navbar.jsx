import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Track scrolling to apply blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div onMouseLeave={() => setIsServicesDropdownOpen(false)}>
      {/* Static Navbar */}
      <TopNav />
      <nav
        className={`${
          isScrolled ? "backdrop-blur-lg bg-blue-900/30" : "bg-customBlue"
        } text-white px-3 md:px-36 py-5 fixed top-${
          isScrolled ? "0" : "18"
        } w-full z-50 transition-all duration-300 `}
      >
        <div className="container mx-auto flex justify-between items-center font-barlow">
          {/* Logo */}

          <Link to={"/"} className="text-3xl font-bold text-mainLogo">
            RAIFOX
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center text-black">
            <Link to={"/"} className="hover:text-blue-300">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
            >
              <a
                href="#services"
                className="hover:text-blue-300 flex items-center"
              >
                Services <i className="fas fa-chevron-down ml-1"></i>
              </a>
              {isServicesDropdownOpen && (
                <div
                  className="absolute bg-orange-100 top-full left-0 mt-6 bg-white text-black shadow-lg w-64 z-50"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(true)}
                >
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link
                        to={"/digitaltrasformation"}
                        className="block text-black hover:text-blue-600"
                      >
                        Digital Transformation
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a
                        href="/RoboticProcessAutomation"
                        className="block text-black hover:text-blue-600"
                      >
                        Robotic Process Automation
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a
                        href="/ChatBots"
                        className="block text-black hover:text-blue-600"
                      >
                        Chatbots
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a
                        href="/ERPPractice"
                        className="block text-black hover:text-blue-600"
                      >
                        ERP Practice (Oracle)
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a
                        href="/CustomDevelopment"
                        className="block text-black hover:text-blue-600"
                      >
                        Custom Development
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a
                        href="/DigitalWorkforce"
                        className="block text-black hover:text-blue-600"
                      >
                        Digital Workforce
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <a href="/BlogList" className="hover:text-blue-300">
              Blogs
            </a>
            <a href="/AboutUs" className="hover:text-blue-300">
              About
            </a>
            <Link to={"/contact"} className="hover:text-blue-300">
              Contact
            </Link>
            <a
              href="#get-started"
              className="hidden md:block px-6 py-2 bg-blueDark text-white rounded-full text-blue-300 hover:bg-black hover:text-white transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              className="text-xl"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <i className="fas fa-times text-black"></i> // Close Icon
              ) : (
                <i className="fas fa-bars text-black"></i> // Menu Icon
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-800 text-white mt-2 rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a href="#home" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-300">
                  About
                </a>
              </li>
              <li>
                <div
                  className="relative group"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                >
                  <a
                    href="#services"
                    className="hover:text-blue-300 flex items-center"
                  >
                    Services <i className="fas fa-chevron-down ml-1"></i>
                  </a>
                  {isServicesDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-64 z-50"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(true)}
                    >
                      <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a
                            href="/digital-transformation"
                            className="block text-black hover:text-blue-600"
                          >
                            Digital Transformation
                          </a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a
                            href="/rpa"
                            className="block text-black hover:text-blue-600"
                          >
                            Robotic Process Automation
                          </a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a
                            href="/chatbots"
                            className="block text-black hover:text-blue-600"
                          >
                            Chatbots
                          </a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a
                            href="/ERPPractice"
                            className="block text-black hover:text-blue-600"
                          >
                            ERP Practice (Oracle)
                          </a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a
                            href="/CustomDevelopment"
                            className="block text-black hover:text-blue-600"
                          >
                            Custom Development
                          </a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a
                            href="/DigitalWorkforce"
                            className="block text-black hover:text-blue-600"
                          >
                            Digital Workforce
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#get-started"
                  className="block px-6 py-2 border border-blue-300 rounded-full text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
