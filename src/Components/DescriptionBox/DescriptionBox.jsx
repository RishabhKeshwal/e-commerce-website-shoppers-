import React from "react";

const DescriptionBox = () => {
  return (
    <div className="px-4 lg:px-0 py-20">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex border-b border-gray-200">
          <div className="px-10 py-4 text-center text-gray-700 font-medium">
            <button className="focus:outline-none focus:text-blue-500 active:text-blue-500 transition-colors duration-200">
              Description
            </button>
          </div>
          <div className="px-10 py-4 text-center text-gray-700 font-medium">
            <button className="focus:outline-none focus:text-blue-500 transition-colors duration-200">
              Reviews (122)
            </button>
          </div>
        </div>
        <div className="p-4 lg:p-8">
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni
            neque quam reprehenderit culpa cumque, est optio cupiditate esse
            praesentium itaque voluptatum sit ipsa sunt, veniam repellat
            voluptates, molestiae maxime accusantium odit adipisci aut.
            Voluptates a ex optio! Repellendus odio soluta quaerat autem
            consequatur ut maiores deserunt modi. Odio, laboriosam.
          </p>
          <p className="text-gray-800 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos quas vitae aperiam a ad excepturi, odit, aut fugit
            perferendis nihil tempora! Voluptatem similique dolores placeat quod
            sapiente natus voluptates odio?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
