import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img
          src={props.image}
          alt="item-image"
          className="w-full hover:brightness-75 transition duration-300"
        />
      </Link>
      <div className="p-4">
        <p>{props.name}</p>
        <div className="flex">
          <div className="text-red-500 font-bold mr-2">$ {props.new_price}</div>
          <div className="text-gray-500 line-through">$ {props.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
