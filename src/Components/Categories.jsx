import React from "react";
import { BiCategory } from "react-icons/bi";
import image1 from "../assets/Categories/cat-1.jpg";
import image2 from "../assets/Categories/cat-2.jpg";
import image3 from "../assets/Categories/cat-3.jpg";
import image4 from "../assets/Categories/cat-4.jpg";
import { useDispatch } from "react-redux";
import { getCategory } from "../Store/ProductSlice";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNanigation = (cat) => {
    dispatch(getCategory(cat));
    navigate("/products");
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
      <div className="flex space-x-4 items-center text-2xl font-semibold ">
        <BiCategory className="text-redColor" />
        <span>Top Categories</span>
      </div>
      <div className="flex justify-center w-full items-center flex-col sm:grid sm:grid-cols-4 gap-4 text-whiteColor">
        <div
          className="bg-white col-span-4 sm:col-span-2 cursor-pointer lg:col-span-1 rounded-lg p-4 w-fit relative"
          onClick={() => handleNanigation("men's clothing")}
        >
          <span className="bg-nav p-1 text-xs absolute rounded m-2">
            Men's Clothing
          </span>
          <span className="bg-grayColor text-black p-1 text-xs absolute rounded right-6 m-2">
            24K order this week
          </span>
          <img
            src={image1}
            alt=""
            className="w-[350px] h-[250px] rounded-md "
          />
        </div>
        <div
          className="bg-white relative col-span-4 sm:col-span-2 cursor-pointer lg:col-span-1 rounded-lg p-4 w-fit"
          onClick={() => handleNanigation("women's clothing")}
        >
          <span className="bg-nav p-1 text-xs absolute rounded m-2">
            Women's clothing
          </span>
          <span className="bg-grayColor text-black p-1 text-xs absolute rounded right-6 m-2">
            24K order this week
          </span>

          <img src={image2} alt="" className="w-[350px] h-[250px] rounded-md" />
        </div>
        <div
          className="bg-white relative col-span-4 sm:col-span-2 cursor-pointer lg:col-span-1 rounded-lg p-4 w-fit"
          onClick={() => handleNanigation("electronics")}
        >
          <span className="bg-nav p-1 text-xs absolute rounded m-2">
            Electronics
          </span>
          <span className="bg-grayColor text-black p-1 text-xs absolute rounded right-6 m-2">
            24K order this week
          </span>
          <img src={image3} alt="" className="w-[350px] h-[250px] rounded-md" />
        </div>
        <div
          className="bg-white relative col-span-4 sm:col-span-2 cursor-pointer lg:col-span-1 rounded-lg p-4 w-fit"
          onClick={() => handleNanigation("jewelery")}
        >
          <span className="bg-nav p-1 text-xs absolute rounded m-2">
            Jewelery
          </span>
          <span className="bg-grayColor text-black p-1 text-xs absolute rounded right-6 m-2">
            24K order this week
          </span>
          <img src={image4} alt="" className="w-[350px] h-[250px] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
