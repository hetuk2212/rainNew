import React from 'react';
import servicesbackgroundimage from "./assets/servicesbackgroundimage.jpg";
import { Link } from 'react-router-dom';
import ProcessFlow from '../components/ProcessFlow';

const CustomDevelopment = () => {
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
            Custom Development
          </h1>
          <p className="text-sm sm:text-lg">
            <Link to="/" className="hover:underline text-gray-300">
              Home
            </Link>
            <span className="mx-2">»</span>
            <span className="text-white">Custom Development</span>
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          What is Custom Development?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Custom development involves creating tailored software solutions designed to meet the unique needs of a business. Unlike off-the-shelf software, custom development provides personalized features, scalability, and seamless integration with existing systems, ensuring optimal performance and efficiency.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Features of Custom Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tailored Solutions", description: "Build software that aligns perfectly with your business needs." },
              { title: "Scalability", description: "Easily adapt to growing demands and evolving technology trends." },
              { title: "Seamless Integration", description: "Ensure compatibility with existing systems and tools." },
              { title: "Enhanced Security", description: "Implement robust security measures tailored to your organization." },
              { title: "Performance Optimization", description: "Maximize efficiency and minimize resource consumption." },
              { title: "Future-Ready", description: "Incorporate cutting-edge technologies for long-term relevance." },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Advantages of Custom Development
        </h3>
        <ul className="list-disc space-y-3 text-gray-700 pl-5">
          <li>Personalization: Solutions designed specifically for your unique needs.</li>
          <li>Flexibility: Adapt features and functionalities as your business evolves.</li>
          <li>Competitive Edge: Gain an advantage with software tailored to your operations.</li>
          <li>Cost Efficiency: Eliminate unnecessary features and focus on what matters most.</li>
          <li>Improved Productivity: Streamline workflows and reduce manual effort.</li>
        </ul>
      </div>

      {/* Challenges Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Challenges in Custom Development
        </h3>
        <ul className="list-disc space-y-3 text-gray-700 pl-5">
          <li>Time-Consuming: Requires detailed planning, design, and development phases.</li>
          <li>Initial Costs: Higher upfront investment compared to off-the-shelf solutions.</li>
          <li>Complex Requirements: Demands clear communication and precise specifications.</li>
          <li>Dependency on Development Team: Quality relies heavily on the expertise of developers.</li>
          <li>Maintenance: Regular updates and support are crucial for long-term success.</li>
        </ul>
      </div>

      {/* Costing Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Cost Considerations for Custom Development</h3>
          <p className="text-gray-400 text-lg mb-6">
            The cost of custom development depends on project scope, complexity, and technology stack. Typical cost factors include:
          </p>
          <ul className="list-disc space-y-3 text-gray-400 text-left pl-5">
            <li><strong>Basic Custom Solutions:</strong> $10,000 to $50,000 for small projects with minimal features.</li>
            <li><strong>Mid-Range Projects:</strong> $50,000 to $150,000 for medium-scale solutions with integrations.</li>
            <li><strong>Enterprise-Level Development:</strong> $150,000+ for large-scale, complex systems.</li>
          </ul>
          <p className="mt-4">
            Note: Costs include analysis, development, testing, deployment, and ongoing maintenance.
          </p>
        </div>
      </div>

      {/* Process Flow Section */}
      <ProcessFlow />
    </div>
  );
};

export default CustomDevelopment;
