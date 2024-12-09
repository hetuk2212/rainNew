import React from 'react';
import servicesbackgroundimage from "./assets/servicesbackgroundimage.jpg";
import { Link } from 'react-router-dom';
import ProcessFlow from '../components/ProcessFlow';

const ChatBots = () => {
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
            Chatbots
          </h1>
          <p className="text-sm sm:text-lg">
            <Link to="/" className="hover:underline text-gray-300">
              Home
            </Link>
            <span className="mx-2">»</span>
            <span className="text-white">Chatbots</span>
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          What are Chatbots?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Chatbots are AI-powered tools designed to simulate human-like conversations with users, enabling businesses to provide instant, efficient, and personalized customer interactions. They revolutionize how organizations engage with their customers.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Features of Chatbots
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Natural Language Understanding", description: "Interact with users in a conversational and intuitive way." },
              { title: "Multi-Channel Support", description: "Operate seamlessly across platforms like websites, apps, and social media." },
              { title: "AI-Powered Learning", description: "Continuously improve through machine learning algorithms." },
              { title: "Integration Capabilities", description: "Connect with APIs, CRMs, and other tools for enhanced functionality." },
              { title: "Voice and Text Interaction", description: "Support both text and voice communication for user convenience." },
              { title: "Customizable Workflows", description: "Tailor conversation flows to meet specific business needs." },
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
          Advantages of Chatbots
        </h3>
        <ul className="list-disc space-y-3 text-gray-700 pl-5">
          <li>Enhanced Customer Experience: Quick, accurate, and personalized interactions.</li>
          <li>Cost Reduction: Minimize overheads by automating repetitive tasks.</li>
          <li>Increased Efficiency: Handle high volumes of customer queries simultaneously.</li>
          <li>Data-Driven Insights: Analyze user behavior for continuous improvement.</li>
          <li>Global Accessibility: Provide support across time zones and languages.</li>
        </ul>
      </div>

      {/* Disadvantages Section */}
      <div className="container mx-auto my-12 px-4 lg:px-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Disadvantages of Chatbots
        </h3>
        <ul className="list-disc space-y-3 text-gray-700 pl-5">
          <li>Limited Understanding: May struggle with complex or ambiguous queries.</li>
          <li>Initial Setup Costs: Requires investment in development and training.</li>
          <li>Dependency on AI Models: Accuracy depends on the quality of AI algorithms.</li>
          <li>Lack of Human Empathy: May not fully replicate human-like emotional responses.</li>
          <li>Security Concerns: Sensitive user data must be handled carefully.</li>
        </ul>
      </div>

      {/* Costing Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Cost Considerations for Chatbots</h3>
          <p className="text-gray-400 text-lg mb-6">
            The cost of implementing a chatbot varies based on its complexity and features. Here are typical cost factors:
          </p>
          <ul className="list-disc space-y-3 text-gray-400 text-left pl-5">
            <li><strong>Basic Chatbots:</strong> $3,000 to $10,000 for simple, rule-based bots.</li>
            <li><strong>Intermediate Chatbots:</strong> $10,000 to $30,000 for bots with AI and integration capabilities.</li>
            <li><strong>Advanced Chatbots:</strong> $30,000+ for bots with advanced AI, multi-channel support, and voice recognition.</li>
          </ul>
          <p className="mt-4">
            Note: Costs also include maintenance, updates, and server hosting.
          </p>
        </div>
      </div>

      {/* Process Flow Section */}
      <ProcessFlow />
    </div>
  );
};

export default ChatBots;
