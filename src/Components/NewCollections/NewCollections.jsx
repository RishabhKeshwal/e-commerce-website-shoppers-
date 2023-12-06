import React from "react";
import new_collection from "../Assets/new_collections";
import Items from "../Items/Items";

const NewCollections = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-14 flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl font-semibold mb-2">
        New Collection
      </h1>
      <hr className="border-4 border-red-600 w-44 rounded-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-14">
        {new_collection.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
