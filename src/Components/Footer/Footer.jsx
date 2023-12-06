import React from "react";
import { Link } from "react-router-dom";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icom from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 shadow-lg">
      <div className="container mx-auto px-4 xl:px-8 flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-8 lg:mb-0">
          <Link to="/" className="flex items-center mb-4">
            <img src={footer_logo} alt="footer_logo" className="h-16" />
            <p className="text-3xl font-bold ml-2">SHOPPER</p>
          </Link>
        </div>

        <div className="flex gap-8">
          <div className="footer-social-icon-container">
            <img src={instagram_icon} alt="Instagram" className="h-8" />
          </div>
          <div className="footer-social-icon-container">
            <img src={pintester_icon} alt="Pinterest" className="h-8" />
          </div>
          <div className="footer-social-icon-container">
            <img src={whatsapp_icom} alt="WhatsApp" className="h-8" />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 text-sm text-gray-700 text-center">
        <hr className="border-0 bg-gray-300 h-0.5 w-full rounded-full mb-2" />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
