import React from 'react';
import servicesbackgroundimage from "./assets/servicesbackgroundimage.jpg";
import { Link } from 'react-router-dom';
import ProcessFlow from '../components/ProcessFlow';

const ERPPractice = () => {
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
            ERP Practices
          </h1>
          <p className="text-sm sm:text-lg">
            <Link to="/" className="hover:underline text-gray-300">
              Home
            </Link>
            <span className="mx-2">»</span>
            <span className="text-white">ERP Practices</span>
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          What is ERP Practice?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          ERP (Enterprise Resource Planning) practices involve the implementation and management of software systems that streamline business processes across various departments. These solutions integrate functions like finance, supply chain, HR, and operations into a unified platform to enhance efficiency and decision-making.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Features of ERP Systems
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Centralized Data Management", description: "Streamline data from all departments into one system." },
              { title: "Real-Time Reporting", description: "Generate accurate, real-time business insights." },
              { title: "Scalability", description: "Adapt to the growing needs of your business." },
              { title: "Integration Capabilities", description: "Connect with existing software and tools for seamless operations." },
              { title: "Automation", description: "Reduce manual tasks and improve efficiency with automated workflows." },
              { title: "Enhanced Security", description: "Protect sensitive business data with advanced security features." },
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
          Advantages of ERP Systems
        </h3>
        <ul className="list-disc space-y-3 text-gray-700 pl-5">
          <li>Improved Efficiency: Automate repetitive tasks and standardize workflows.</li>
          <li>Better Decision-Making: Access accurate, real-time data for strategic planning.</li>
          <li>Cost Savings: Reduce operational costs by eliminating redundancies.</li>
          <li>Scalability: Easily adapt to the evolving needs of your business.</li>
          <li>Enhanced Collaboration: Break down silos and improve communication across teams.</li>
        </ul>
      </div>

      {/* Challenges Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Challenges in ERP Implementation
        </h3>
        <ul className="list-disc space-y-3 text-gray-700 pl-5">
          <li>High Initial Costs: Significant investment in software, infrastructure, and training.</li>
          <li>Complexity: Requires careful planning and management to avoid disruptions.</li>
          <li>Resistance to Change: Employees may be hesitant to adopt new systems.</li>
          <li>Data Migration Issues: Ensuring data accuracy during migration is critical.</li>
          <li>Ongoing Maintenance: Regular updates and support are essential for optimal performance.</li>
        </ul>
      </div>

      {/* Costing Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Cost Considerations for ERP</h3>
          <p className="text-gray-400 text-lg mb-6">
            The cost of implementing an ERP system depends on the organization's size, industry, and specific requirements. Typical cost factors include:
          </p>
          <ul className="list-disc space-y-3 text-gray-400 text-left pl-5">
            <li><strong>Basic ERP Solutions:</strong> $5,000 to $20,000 for small businesses with limited features.</li>
            <li><strong>Mid-Range ERP Systems:</strong> $20,000 to $100,000 for businesses requiring advanced features and integrations.</li>
            <li><strong>Enterprise-Level ERP Systems:</strong> $100,000+ for large organizations with complex requirements.</li>
          </ul>
          <p className="mt-4">
            Note: Costs also include customization, training, and ongoing support.
          </p>
        </div>
      </div>

      {/* Process Flow Section */}
      <ProcessFlow />
    </div>
  );
};

export default ERPPractice;
