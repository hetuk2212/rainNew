import React from 'react';
import servicesbackgroundimage from "./assets/servicesbackgroundimage.jpg";
import { Link } from 'react-router-dom';
import ProcessFlow from '../components/ProcessFlow';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "https://via.placeholder.com/150",
      description: "A visionary leader driving innovation and growth.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      image: "https://via.placeholder.com/150",
      description: "Technical expertise and strategic thinking at its finest.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      position: "COO",
      image: "https://via.placeholder.com/150",
      description: "Operational excellence and efficiency champion.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[450px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${servicesbackgroundimage})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold animate-fade-in-up">
            About Us
          </h1>
          <p className="mt-4 text-lg animate-fade-in-up">
            Learn more about our journey, mission, and team.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          We are dedicated to delivering exceptional solutions that empower our customers
          to achieve their goals. Our commitment to innovation, integrity, and excellence
          drives everything we do.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-500 font-medium">{member.position}</p>
                  <p className="text-gray-600 mt-4">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-500 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Want to Work with Us?</h2>
        <p className="text-lg mb-6">
          We're always looking for passionate individuals to join our team.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-500 font-bold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Process Flow Section */}
      <ProcessFlow />
    </div>
  );
};

export default AboutUs;
