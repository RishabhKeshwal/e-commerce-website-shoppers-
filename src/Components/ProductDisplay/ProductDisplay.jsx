import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch px-4 lg:px-0 py-8 lg:py-12 mx-auto max-w-7xl">
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:justify-between lg:items-start">
        {/* Product Images */}
        <div className="w-full flex flex-col gap-4 lg:gap-2">
          {/* Small Images */}
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={product.image}
              alt={`product-image-${index}`}
              className="w-full lg:w-1/4 h-auto mb-2 lg:mb-0 object-cover object-center"
            />
          ))}
        </div>
        {/* Main Product Image */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0">
          <img
            src={product.image}
            alt="product-image"
            className="w-full h-auto lg:h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 pl-0 lg:pl-8 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            {product.name}
          </h1>
          <div className="flex items-center mb-4">
            <img src={star_icon} alt="star-icon" className="w-5 h-5 mr-1" />
            <img src={star_icon} alt="star-icon" className="w-5 h-5 mr-1" />
            <img src={star_icon} alt="star-icon" className="w-5 h-5 mr-1" />
            <img src={star_icon} alt="star-icon" className="w-5 h-5 mr-1" />
            <img
              src={star_dull_icon}
              alt="star-icon"
              className="w-5 h-5 mr-1"
            />
            <p className="text-sm">(122)</p>
          </div>
          <div className="flex gap-8 mb-4">
            <div className="text-gray-500 line-through">
              ${product.old_price}
            </div>
            <div className="font-bold">${product.new_price}</div>
          </div>
          <p className="text-sm mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            fugiat corrupti molestiae tenetur necessitatibus consequatur
            consectetur enim nisi et perspiciatis.
          </p>
        </div>
        <div className="flex flex-col mb-6">
          <h1 className="text-lg font-bold mb-2">Select Size</h1>
          <div className="flex">
            <div className="bg-gray-200 px-5 py-3 text-sm font-semibold mr-2">
              S
            </div>
            <div className="bg-gray-200 px-5 py-3 text-sm font-semibold mr-2">
              M
            </div>
            <div className="bg-gray-200 px-5 py-3 text-sm font-semibold mr-2">
              L
            </div>
            <div className="bg-gray-200 px-5 py-3 text-sm font-semibold mr-2">
              XL
            </div>
            <div className="bg-gray-200 px-5 py-3 text-sm font-semibold mr-2">
              XXL
            </div>
          </div>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="text-xs mt-4">
          <span className="font-semibold">Category:</span> Women, T-Shirt, Crop
          top
        </p>
        <p className="text-xs">
          <span className="font-semibold">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
