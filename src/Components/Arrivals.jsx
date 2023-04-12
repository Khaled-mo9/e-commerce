import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import { IoMdArrowDropright } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../Store/ProductSlice";
const Arrivals = () => {
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push(
      <div
        key={i}
        className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
      >
        <SmallCard item={products[i]} />
      </div>
    );
  }

  const handlSeeAll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(setCategory(products));
    navigate("/products");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl text-blueColor">New Arrivals</h2>
        <div
          className="cursor-pointer text-grayColor text-lg font-medium flex space-x-2 items-center"
          onClick={() => handlSeeAll()}
        >
          <span className="">See all</span>
          <IoMdArrowDropright />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        {/* <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
          <SmallCard />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
          <SmallCard />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
          <SmallCard />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
          <SmallCard />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
          <SmallCard />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
          <SmallCard />
        </div> */}
        {items}
      </div>
    </div>
  );
};

export default Arrivals;
