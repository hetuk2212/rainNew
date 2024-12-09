import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 p-8 bg-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 my-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-700">
            Contact Us
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Have questions or feedback? We'd love to hear from you! Fill out the
            form below, and we’ll respond shortly.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 block w-full px-4 py-3 border border-blue-200 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="Your Name"
              />
            </div>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 block w-full px-4 py-3 border border-blue-200 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="Your Email"
              />
            </div>
          </div>

          {/* Subject Input */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-2 block w-full px-4 py-3 border border-blue-200 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Subject of Your Inquiry"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-2 block w-full px-4 py-3 border border-blue-200 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
