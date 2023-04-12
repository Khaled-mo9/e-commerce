import React from "react";

const SmallCard = ({ item }) => {
  return (
    <div className="bg-white p-4 space-y-3 rounded-lg">
      <div className=" flex justify-center">
        <img
          src={item?.image}
          alt={item?.category}
          className="hover:scale-110 transition-all h-28 max-h-28"
        />
      </div>
      <div className="font-semibold text-lg flex flex-col">
        <span>{item?.category}</span>
        <span className="text-redColor">{item?.price}$</span>
      </div>
    </div>
  );
};

export default SmallCard;
