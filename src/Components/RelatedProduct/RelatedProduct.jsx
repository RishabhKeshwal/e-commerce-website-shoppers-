import React from "react";
import data_product from "../Assets/data";
import Items from "../Items/Items";

const RelatedProduct = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-14 flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl font-semibold mb-2">
        Related Products
      </h1>
      <hr className="border-4 border-red-600 w-44 rounded-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-14 px-4">
        {data_product.map((item, i) => (
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
    </section>
  );
};

export default RelatedProduct;
