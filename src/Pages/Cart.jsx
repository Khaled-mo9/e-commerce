import React, { useEffect, useState } from "react";
import image1 from "../assets/SlideImages/slide-1.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Footer from "../Components/Footer";
import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import {
  decreaseCartItem,
  deleteCartItem,
  increaseCartItem,
  updateTotalPrice,
} from "../Store/ProductSlice";
const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [cartProductItems, setItems] = useState(cartItems);
  const addProduct = (item) => {
    if (!item.count) {
      item.count = 1;
    }

    item.count = item.count + 1;
    const newCartItems = cartItems.map((obj) => {
      if (obj.id === item.id) {
        return item;
      }
      return obj;
    });
    setItems(newCartItems);
    console.log(item);
  };

  const removeProduct = (item) => {
    if (!item.count) {
      item.count = 1;
    }
    item.count = item.count - 1;

    const newCartItems = cartItems.map((obj) => {
      if (obj.id === item.id) {
        return item;
      }
      return obj;
    });
    setItems(newCartItems);
    console.log(item);
  };

  useEffect(() => {
    setItems(cartItems);
    dispatch(updateTotalPrice());
  }, [cartItems]);

  console.log(cartItems);
  const items =
    cartItems &&
    cartProductItems?.map((item, i) => {
      return (
        <div key={i} className="flex justify-between bg-white w-full">
          <div className="flex shadow-sm p-4 items-center w-full justify-between">
            <div className="flex items-center space-x-8">
              <img src={item.image} className="w-20" alt="" />
              <div className="flex flex-col space-y-2">
                <span className="font-bold text-lg">{item.title}</span>
                <span className="text-grayColor">
                  {item.price}*{item?.count || 1} =
                  <span className="text-redColor font-bold">
                    {" "}
                    ${(item.price * (item?.count || 1)).toFixed(2)}
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full text-redColor">
              <div className="flex justify-end">
                <div
                  className="border rounded-md p-[4px] hover:bg-redColor hover:text-whiteColor transition-all cursor-pointer"
                  onClick={() => dispatch(deleteCartItem(item.id))}
                >
                  <IoMdClose className="" />
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  className="border rounded-md p-[4px] cursor-pointer hover:bg-redColor hover:text-whiteColor transition-all"
                  onClick={() => dispatch(decreaseCartItem(item))}
                >
                  <AiOutlineMinus />
                </button>
                <button
                  className="border rounded-md p-[4px] cursor-pointer hover:bg-redColor hover:text-whiteColor transition-all"
                  onClick={() => dispatch(increaseCartItem(item))}
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div className="space-y-12 flex flex-col justify-between ">
      <div className="py-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[30vh]">
        {cartItems.length > 0 ? (
          <div className="flex justify-between flex-col-reverse md:flex-row gap-6">
            {/* items */}
            <div className="flex flex-col space-y-4 w-full md:w-3/4">
              {items}
            </div>
            {/* summary */}
            <div className="bg-white space-y-4 h-fit w-full md:w-1/4 p-4">
              <h3>Cart Summary</h3>
              <div className="h-px w-full bg-grayColor"></div>
              <div className="flex justify-between">
                <span className="text-sm font-semibold">Total Price:</span>
                <span className="text-redColor font-bold">${totalPrice}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[30vh] flex justify-center items-center text-4xl font-semibold">
            Your cart is empty.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
