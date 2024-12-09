import React from 'react';
import servicesbackgroundimage from "./assets/servicesbackgroundimage.jpg";
import { Link } from 'react-router-dom';
import ProcessFlow from '../components/ProcessFlow';

const RoboticProcessAutomation = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[450px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${servicesbackgroundimage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-75"></div>
        <div className="relative z-10 space-y-4 px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Robotic Process Automation
          </h1>
          <p className="text-sm sm:text-lg">
            <Link to="/" className="hover:underline text-gray-300">
              Home
            </Link>
            <span className="mx-2">»</span>
            <span className="text-white">Robotic Process Automation</span>
          </p>
        </div>
      </div>

      {/* Why RPA Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-800">
            Why Robotic Process Automation?
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            Symprio specializes in helping organizations streamline operations, reduce costs, and improve accuracy through Robotic Process Automation (RPA). By automating repetitive tasks, we enable businesses to focus on high-value activities.
          </p>
          <ul className="list-disc text-gray-700 space-y-3 pl-5">
            <li>
              <span className="text-gray-800 font-medium">Efficiency:</span> Automate time-consuming tasks for faster operations.
            </li>
            <li>
              <span className="text-gray-800 font-medium">Accuracy:</span> Minimize human errors by leveraging bots for repetitive processes.
            </li>
            <li>
              <span className="text-gray-800 font-medium">Scalability:</span> Easily adapt and scale automation solutions as your business grows.
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 sticky top-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h3>
          <ul className="space-y-4">
            {[
              "Digital Transformation",
              "Robotic Process Automation",
              "ERP Practice (Oracle)",
              "Chatbots",
              "Custom Development",
              "Digital Workforce",
            ].map((service, index) => (
              <li key={index}>
                <Link
                  to={`/${service.toLowerCase().replace(/ /g, "-")}`}
                  className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-200"
                >
                  {service} <span>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Our Expertise Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Our Expertise in RPA
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Our team has implemented RPA solutions across multiple industries, delivering measurable outcomes for our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Workflow Automation", icon: "⚙️" },
              { title: "Data Extraction", icon: "📊" },
              { title: "Invoice Processing", icon: "💳" },
              { title: "Customer Support", icon: "💬" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h3 className="text-3xl font-bold mb-6">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "RPA from Symprio significantly reduced manual efforts and improved our efficiency.",
                name: "Sarah Lee",
                company: "Enterprise Solutions",
              },
              {
                quote:
                  "The automation processes implemented by Symprio were transformative for our operations.",
                name: "David Wilson",
                company: "GlobalTech",
              },
              {
                quote:
                  "Symprio's RPA expertise allowed us to save costs while scaling our operations.",
                name: "Emily Brown",
                company: "NextGen Innovations",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Automate Your Processes?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Explore how RPA can transform your business operations. Let us guide you on your automation journey.
          </p>
          <Link
            to="/contact-us"
            className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg shadow-lg hover:bg-yellow-500 font-semibold transform hover:scale-105 transition-transform duration-300"
          >
            Get Started with RPA
          </Link>
        </div>
      </div>

      {/* Process Flow Section */}
      <ProcessFlow />
    </div>
  );
};

export default RoboticProcessAutomation;
