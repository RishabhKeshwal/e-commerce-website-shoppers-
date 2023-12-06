import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="flex flex-col md:flex-row p-4 max-w-7xl mx-auto mt-10 gap-8">
      {/* Cart Item Table */}
      {Object.keys(cartItems).some((key) => cartItems[key] > 0) ? (
        <table className="table-auto w-full">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="text-left">
                  <th className="px-4 py-2">Products</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {all_product.map((item) => {
                  if (cartItems[item.id] > 0) {
                    return (
                      <tr key={item.id}>
                        <td className="px-4 py-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="carticon-product-icon h-12 w-12 object-cover rounded-lg"
                          />
                        </td>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2">{item.new_price}</td>
                        <td className="px-4 py-2">
                          <button className="cartitems-quantity">
                            {cartItems[item.id]}
                          </button>
                        </td>
                        <td className="px-4 py-2">
                          ${item.new_price * cartItems[item.id]}
                        </td>
                        <td className="px-4 py-2">
                          <img
                            src={remove_icon}
                            alt="remove-icon"
                            onClick={() => {
                              removeFromCart(item.id);
                            }}
                            className="cartitems-remove-icon h-4 w-4 cursor-pointer"
                          />
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        </table>
      ) : (
        <div className="w-full flex justify-center items-center">
          <div className="p-8 rounded-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-4">
              It seems like there are no items in your cart.
            </p>
            {/* You can add a button or link to redirect users to shopping */}
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
      {/* Total Price Section */}

      <div className="flex flex-col gap-8">
        <div
          className="p-6"
          style={{ background: "linear-gradient(to left, #f0f0f0, #ffffff)" }}
        >
          <h1 className="text-4xl font-semibold mb-6">Cart Totals</h1>
          <div className="flex justify-between mb-6">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-6">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-6">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div
          className="mt-4 p-6 space-y-6"
          style={{ background: "linear-gradient(to left, #f0f0f0, #ffffff)" }}
        >
          <p>If you have a promo code, Enter it here</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Promo Code"
              className="border rounded-l py-2 px-4"
            />
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
