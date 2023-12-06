import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offer";
import NewsLatter from "../Components/NewsLetter/NewsLetter";
import NewCollections from "../Components/NewCollections/NewCollections";

const Shop = () => {
  return (
    <div>
      <Hero />
      <div className="p-4">
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLatter />
      </div>
    </div>
  );
};

export default Shop;
