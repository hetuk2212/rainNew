import React from 'react';
import servicesbackgroundimage from "./assets/servicesbackgroundimage.jpg";
import { Link } from 'react-router-dom';
import ProcessFlow from '../components/ProcessFlow';

const DigitalWorkforce = () => {
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
            Digital Workforce
          </h1>
          <p className="text-sm sm:text-lg">
            <Link to="/" className="hover:underline text-gray-300">
              Home
            </Link>
            <span className="mx-2">»</span>
            <span className="text-white">Digital Workforce</span>
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          What is a Digital Workforce?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          A digital workforce refers to the integration of automation, artificial intelligence (AI), and digital tools to enhance and support human productivity. It enables businesses to automate repetitive tasks, improve efficiency, and focus on strategic goals.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Features of a Digital Workforce
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Automation", description: "Streamline repetitive tasks and reduce manual effort." },
              { title: "AI-Powered Insights", description: "Leverage AI for data-driven decision-making." },
              { title: "Scalability", description: "Expand operations seamlessly with digital tools." },
              { title: "Enhanced Collaboration", description: "Foster teamwork with digital communication tools." },
              { title: "Real-Time Monitoring", description: "Track progress and performance in real time." },
              { title: "Personalization", description: "Tailor solutions to meet business-specific needs." },
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
          Advantages of a Digital Workforce
        </h3>
        <ul className="list-disc space-y-3 text-gray-700 pl-5">
          <li>Increased Efficiency: Automate processes to save time and resources.</li>
          <li>Cost Savings: Reduce operational expenses with automated solutions.</li>
          <li>Enhanced Accuracy: Minimize human errors with reliable digital tools.</li>
          <li>Improved Flexibility: Scale and adapt to market changes with ease.</li>
          <li>Better Customer Experience: Deliver faster and more personalized services.</li>
        </ul>
      </div>

      {/* Challenges Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Challenges in Building a Digital Workforce
        </h3>
        <ul className="list-disc space-y-3 text-gray-700 pl-5">
          <li>High Initial Investment: Costs for technology acquisition and implementation.</li>
          <li>Skill Gaps: Requires training and upskilling for employees.</li>
          <li>Data Security: Ensuring the protection of sensitive business data.</li>
          <li>Change Management: Resistance to adopting new technologies among staff.</li>
          <li>Integration Issues: Ensuring compatibility with existing systems.</li>
        </ul>
      </div>

      {/* Costing Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Cost Considerations for a Digital Workforce</h3>
          <p className="text-gray-400 text-lg mb-6">
            The cost of building a digital workforce varies based on the size and complexity of the organization. Key cost factors include:
          </p>
          <ul className="list-disc space-y-3 text-gray-400 text-left pl-5">
            <li><strong>Basic Automation:</strong> $10,000 to $30,000 for small-scale implementations.</li>
            <li><strong>Comprehensive AI Solutions:</strong> $50,000 to $200,000 for medium-scale projects.</li>
            <li><strong>Enterprise-Level Digital Workforce:</strong> $200,000+ for large-scale integrations and customization.</li>
          </ul>
          <p className="mt-4">
            Note: Costs include implementation, training, maintenance, and support.
          </p>
        </div>
      </div>

      {/* Process Flow Section */}
      <ProcessFlow />
    </div>
  );
};

export default DigitalWorkforce;
