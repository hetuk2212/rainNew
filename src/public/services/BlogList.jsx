import React from 'react';
import servicesbackgroundimage from "./assets/servicesbackgroundimage.jpg";
import { Link } from 'react-router-dom';
import ProcessFlow from '../components/ProcessFlow';

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Mindfulness",
      description: "Discover how mindfulness can improve your life.",
      image: "https://via.placeholder.com/150",
      link: "/blog/mindfulness",
    },
    {
      id: 2,
      title: "Healthy Living Tips",
      description: "Tips for leading a healthier, happier life.",
      image: "https://via.placeholder.com/150",
      link: "/blog/healthy-living",
    },
    {
      id: 3,
      title: "Exploring Meditation",
      description: "An introduction to meditation for beginners.",
      image: "https://via.placeholder.com/150",
      link: "/blog/meditation",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className=" relative bg-cover bg-center h-[450px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${servicesbackgroundimage})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold animate-fade-in-up">
            Welcome to Our Blog
          </h1>
          <p className="mt-4 text-lg animate-fade-in-up">
            Explore insights, tips, and stories to inspire your journey.
          </p>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <Link
                  to={blog.link}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow Section */}
      <ProcessFlow />
    </div>
  );
};

export default BlogList;
