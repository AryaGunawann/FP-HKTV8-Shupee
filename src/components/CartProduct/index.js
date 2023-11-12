import React from "react";
import { FaStar } from "react-icons/fa";

const CardProduct = ({
  img,
  title,
  category,
  price,
  quantity,
  actionDetail,
  rate,
}) => {
  return (
    <div
      className="container mx-auto border border-black rounded-2xl p-4 clickable-card relative cursor-pointer"
      onClick={actionDetail}
    >
      <figure className="relative h-56 ">
        <img
          className="w-full h-full object-contain rounded-t-2xl"
          src={img}
          alt={title}
        />
      </figure>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-black line-clamp-1">
          {title}
        </h2>
        <p className="text-gray-600 text-sm">Stock: {quantity}</p>
        <p className="text-2xl font-bold text-black mt-2">{`$${price}`}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <p className="ml-1">{rate}</p>
          </div>
          <div className="bg-gray-200 text-black text-sm px-2 py-1 rounded-lg">
            {category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
