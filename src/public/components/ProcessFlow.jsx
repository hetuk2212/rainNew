import React from "react";
import  enterprise from "../services/assets/enterprise.png"
import  hyper from "../services/assets/hyper.png"
import  design from "../services/assets/design.png"
import  upskill from "../services/assets/upskill.png"
import  imporoving from "../services/assets/imporoving.png"
import  incresing from "../services/assets/incresing.png"
import  enhancing from "../services/assets/enhancing.png"
// Dummy image links (replace these with your actual images)
const dummyImages = [
    enterprise,
    hyper,
    design,
    upskill,
    imporoving,
    incresing,
    enhancing,
      
];

const data = [
  { title: "Enterprise Platform", img: dummyImages[0] },
  { title: "Hyper Automation", img: dummyImages[1] },
  { title: "Design and Build", img: dummyImages[2] },
  { title: "Upskilling and Reskilling Workforce", img: dummyImages[3] },
  { title: "Improving Customer Experience", img: dummyImages[4] },
  { title: "Enhancing Operational Efficiency", img: dummyImages[5] },
  { title: "Increasing Service Accessibility", img: dummyImages[6] },
  { title: "Ensuring Data Security", img: dummyImages[7] },
];

const ProcessFlow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Our Process
        </h2>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Connector Lines */}
        <div className="relative w-full h-20 mt-6">
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
            <svg className="w-full h-6" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 10,10 Q 50,30 90,10 T 180,10 T 270,10 T 360,10 T 450,10 T 540,10 T 630,10 T 720,10"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
