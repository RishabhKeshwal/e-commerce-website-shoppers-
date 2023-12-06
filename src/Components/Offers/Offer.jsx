import React from "react";

const Offers = () => {
  return (
    <section className="bg-gradient-to-r from-purple-200 to-green-200 rounded-lg shadow-xl p-8 max-w-screen-xl mx-auto">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4">Discover Exclusive Deals</h2>
        <p className="text-lg mb-6">
          Explore our exclusive collection and get access to premium products
          and special discounts.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-md">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Offers;
