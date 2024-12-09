import React from "react";

const ServiceCards = () => {
  const services = [
    {
      id: "01",
      title: "Digital Transformation",
      description:
        "Digital transformation is a continuous journey that requires strategic planning, strong leadership, and a holistic approach that considers technology, people, processes, and culture.",
      icon: "💻",
    },
    {
      id: "02",
      title: "RPA",
      description:
        "RPA helps organizations improve efficiency, accuracy, and speed of business processes, reduce costs, and free up human workers to focus on more strategic and value-added activities.",
      icon: "🤖",
    },
    {
      id: "03",
      title: "ERP Practice (Oracle)",
      description:
        "Successful ERP practice can bring numerous benefits to an organization, including increased operational efficiency, customer service, better financial management, and reduced costs.",
      icon: "📊",
    },
    {
      id: "04",
      title: "ERP Practice (Oracle)",
      description:
        "Successful ERP practice can bring numerous benefits to an organization, including increased operational efficiency, customer service, better financial management, and reduced costs.",
      icon: "📊",
    },
    {
      id: "05",
      title: "ERP Practice (Oracle)",
      description:
        "Successful ERP practice can bring numerous benefits to an organization, including increased operational efficiency, customer service, better financial management, and reduced costs.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-800">
          Choose The Best{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            IT Service
          </span>{" "}
          Company
        </h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Background Color Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* ID in the Background */}
              <div className="absolute top-5 right-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-200 group-hover:opacity-20 transition-opacity duration-300">
                {service.id}
              </div>

              {/* Icon */}
              <div className="flex items-center justify-center mt-8 sm:mt-10 mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 sm:p-4 rounded-full shadow-md">
                  <span className="text-3xl sm:text-4xl text-white">
                    {service.icon}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="text-center px-4 sm:px-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-2 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white text-sm sm:text-base leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Button */}
              <div className="text-center mt-6 sm:mt-8 mb-6 sm:mb-10">
                <button className="px-4 sm:px-6 py-2 bg-white text-blue-600 font-bold rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:shadow-lg transform transition-all duration-300">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
