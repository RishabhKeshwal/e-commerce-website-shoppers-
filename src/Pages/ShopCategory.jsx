import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="max-w-screen-xl mx-auto py-10 sm:px-6 lg:px-8">
      <img className="w-full" src={props.banner} alt="" />
      <div className="py-4 flex justify-between items-center">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="flex items-center border border-gray-600 px-6 py-2 gap-2 rounded-full hover:bg-gray-100">
          Sort by <img src={dropdown_icon} alt="dropdown-icon" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="text-center py-8">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
