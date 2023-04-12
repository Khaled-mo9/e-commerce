import React, { useState } from "react";
import image1 from "../assets/SlideImages/slide-1.png";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../Store/ProductSlice";

const Crad = ({ products }) => {
  const [reactLove, setreactLove] = useState(false);
  const dispatch = useDispatch()

  return (
    <div className="bg-white cursor-pointer group rounded-md px-4 shadow-lg py-2  overflow-hidden h-[400px] flex flex-col justify-between">
      {/* first row */}
      <div className="flex justify-between">
        <span className="bg-red-400 h-fit p-1 text-sm rounded text-whiteColor">
          50% off
        </span>
        <div className="space-y-2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all">
          <span className="bg-nav p-1 rounded text-sm text-whiteColor">0</span>
          <button onClick={() => setreactLove(!reactLove)}>
            {reactLove ? (
              <AiFillHeart className="text-xl text-redColor" />
            ) : (
              <AiOutlineHeart className="text-xl text-redColor" />
            )}
          </button>
        </div>
      </div>
      {/* second row */}
      <div className="flex justify-center">
        <img
          src={products.image}
          alt=""
          className="max-w-[150px] max-h-[200px]"
          width={150}
          height={200}
        />
      </div>
      {/* third row */}
      <div className="space-y-1">
        <p className="font-semibold line-clamp-1">{products.title}</p>
        <div className="flex space-x-1 text-yellow-400">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar className="" />
        </div>
        <div className="text-redColor flex justify-between font-bold">
          <span>{products.price}$</span>
          <button
            className="text-2xl border rounded shadow-sm cursor-pointer hover:bg-redColor hover:text-whiteColor transition-all"
            onClick={() => dispatch(setCartItems(products))}
          >
            <MdOutlineAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crad;
