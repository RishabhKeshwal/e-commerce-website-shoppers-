import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-wrap items-center p-6">
      <span className="flex items-center">
        HOME
        <img src={arrow_icon} alt="arrow-icon" className="mx-2" />
      </span>
      <span className="flex items-center">
        SHOP
        <img src={arrow_icon} alt="arrow-icon" className="mx-2" />
      </span>
      <span className="flex items-center">
        {product.category}
        <img src={arrow_icon} alt="arrow-icon" className="mx-2" />
      </span>
      <span className="flex items-center">{product.name}</span>
    </div>
  );
};

export default Breadcrumbs;
