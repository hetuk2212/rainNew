import React from "react";
import Profile1 from '../assets/Images/Profiles/vivek.png'
import Profile2 from '../assets/Images/Profiles/Prabin-removebg-preview.png'
import Profile3 from '../assets/Images/Profiles/home_erp_.png.png'
const sethu = "https://via.placeholder.com/150x200?text=Sethuraman";
const vilhelm = "https://via.placeholder.com/150x200?text=Vilhelm";
const vivek = "https://via.placeholder.com/150x200?text=Vivek";
const prabin = "https://via.placeholder.com/150x200?text=Prabin";

const TeamMember = () => {
  const members = [
    {
      id: 1,
      name: "Sethuraman",
      role: "CEO, USA",
      image: Profile1,
    },
    {
      id: 2,
      name: "Vilhelm Bjermeland",
      role: "COO, USA",
      image: Profile2,
    },
    {
      id: 3,
      name: "Prabin Vijay",
      role: "Practice Lead, APAC",
      image: Profile3,
    },
    {
      id: 4,
      name: "Vivek Krishna",
      role: "Director - Automation Services, APAC",
      image: Profile1,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
  {/* Heading Text */}
  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wider text-blue-500 animate-pulse">
    Team Member
  </h3>
  
  {/* Main Title with Gradient */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
    Unleashing The Power Of{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
      Teamwork
    </span>{" "}
    For Success
  </h2>

  {/* Description Text */}
  <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
    Meet our talented team, committed to delivering excellence and driving innovation.
  </p>
</div>


      {/* Team Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8">
        {members.map((member) => (
          <div
            key={member.id}
            className="relative group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
          >
            {/* Decorative Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-25 rounded-lg blur-md"></div>

            {/* Content */}
            <div className="relative z-10 bg-white rounded-lg overflow-hidden">
              {/* Image */}
              <div className="flex justify-center mt-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-28 sm:w-24 sm:h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="py-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="mt-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <i className="fab fa-linkedin text-lg sm:text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <i className="fab fa-twitter text-lg sm:text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <i className="fab fa-facebook text-lg sm:text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
