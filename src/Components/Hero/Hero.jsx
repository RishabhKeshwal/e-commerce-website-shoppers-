import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero bg-gradient-to-b from-purple-100 to-green-200 w-xl mx-auto md:max-h-[650px] flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center items-start lg:ml-10 gap-4 md:gap-8 px-8 md:px-24">
        <h2 className="text-black text-2xl md:text-4xl font-semibold flex gap-2">
          NEW ARRIVALS ONLY{" "}
          <img src={hand_icon} alt="hand_icon" className="h-16" />
        </h2>
        <p className="text-black text-3xl md:text-6xl font-bold">
          New collections for everyone
        </p>
        <button className="flex items-center justify-center md:justify-start gap-2 py-2 px-4 md:px-8 rounded-full bg-red-500 text-white text-lg font-semibold">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow_icon" className="w-6 md:w-8" />
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={hero_image}
          alt="hero_image"
          className="w-full h-full object-cover md:object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
