import React from "react";

const NewsLatter = () => {
  return (
    <div className="newsletter mb-20 bg-gradient-to-r from-purple-200 to-green-200 rounded-lg shadow-xl p-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-lg mb-4">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Your Email Id"
          className="px-4 py-2 rounded-l-md bg-white text-gray-800 focus:outline-none"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-md transition duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLatter;
