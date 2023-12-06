import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 shadow-lg">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="logo" className="h-8" />
            <p className="text-xl font-semibold">SHOPPER</p>
          </Link>

          {/* Large Screen Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
            <NavItem menu={menu} setMenu={setMenu} to="/" label="Shop" />
            <NavItem menu={menu} setMenu={setMenu} to="/mens" label="Men" />
            <NavItem menu={menu} setMenu={setMenu} to="/womens" label="Women" />
            <NavItem menu={menu} setMenu={setMenu} to="/kids" label="Kids" />
          </ul>

          <div className="flex items-center gap-8">
            <Link to="/login" className="hidden md:flex">
              <button className="w-28 h-12 border border-gray-500 rounded-full text-gray-600 text-lg hover:bg-gray-200 focus:outline-none">
                Login
              </button>
            </Link>
            <Link to="/cart" className="relative">
              <img src={cart_icon} alt="cart_icon" className="h-10" />
              <div className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-red-500 rounded-full text-white text-xs">
                1 {/* Replace this with getTotalCartItems() */}
              </div>
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Small Devices Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-6 bg-gray-200 rounded-md m-2 py-4 px-10 shadow-lg transition-all duration-300">
          <ul className="flex flex-col items-center gap-4 text-lg font-medium">
            <NavItem menu={menu} setMenu={setMenu} to="/" label="Shop" />
            <NavItem menu={menu} setMenu={setMenu} to="/mens" label="Men" />
            <NavItem menu={menu} setMenu={setMenu} to="/womens" label="Women" />
            <NavItem menu={menu} setMenu={setMenu} to="/kids" label="Kids" />
          </ul>
          <div className="mt-4">
            <Link to="/login">
              <button className="w-28 h-12 border border-gray-500 rounded-full text-white text-lg bg-gray-800 hover:bg-gray-900 focus:outline-none">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const NavItem = ({ menu, setMenu, to, label }) => (
  <li
    onClick={() => {
      setMenu(label.toLowerCase());
    }}
    className="relative cursor-pointer"
  >
    <Link to={to} className="hover:text-gray-800">
      {label}
    </Link>
    {menu === label.toLowerCase() && (
      <hr className="w-full mx-auto absolute bottom-0 left-0 bg-red-500 h-1 rounded-full" />
    )}
  </li>
);

export default Navbar;
