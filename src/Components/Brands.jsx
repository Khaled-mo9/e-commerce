import React, { useEffect } from "react";
import { BsApple } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Store/ProductSlice";
import Crad from "./Crad";
const Brands = () => {
  const { category } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory("electronics"));
  }, []);

  const items = [];
  for (let i = 0; i < category?.length; i++) {
    items.push(
      <div key={i} className="col-span-8 sm:col-span-4 md:col-span-3 xl:col-span-2">
        <Crad products={category[i]} />
      </div>
    );
  }
  return (
    <div className="flex container mx-auto px-4 sm:px-6 lg:px-8">
      {/* brands */}
      <div className="grid grid-cols-12 lg:gap-4 w-full">
        <div className="bg-white h-fit hidden lg:block p-4 shadow-lg lg:col-span-2 rounded-lg space-y-4">
          <div className="flex justify-between">
            <span className="font-bold text-lg">Brands</span>
            <span className="w-px h-10 bg-grayColor"></span>
            <span className="font-bold text-lg text-grayColor">Shops</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-lg cursor-pointer space-x-3 bg-whiteColor p-2 rounded">
              <BsApple />
              <span className="font-semibold">Apple</span>
            </div>
            <div className="flex items-center text-lg cursor-pointer space-x-3 bg-whiteColor p-2 rounded">
              <BsApple />
              <span className="font-semibold">Apple</span>
            </div>
            <div className="flex items-center text-lg cursor-pointer space-x-3 bg-whiteColor p-2 rounded">
              <BsApple />
              <span className="font-semibold">Apple</span>
            </div>
            <div className="flex items-center text-lg cursor-pointer space-x-3 bg-whiteColor p-2 rounded">
              <BsApple />
              <span className="font-semibold">Apple</span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-10 space-y-4">
          <h2 className="font-bold text-2xl mx-4">Electronics</h2>
          <div className="grid grid-cols-8 md:grid-cols-9 xl:grid-cols-8 gap-4 ">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
