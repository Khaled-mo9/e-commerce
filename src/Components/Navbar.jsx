import React, { useCallback, useEffect, useState } from "react";
import { BsTelephone, BsFillCartFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { AiOutlineMail, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [showSide, setShowSide] = useState(false);
  const [showDrop, sethowDrop] = useState(false);

  const navs = [
    "Home",
    "Pages",
    "User Account",
    "Vendor Account",
    "Track My Order",
    "Contact",
  ];

  const handleHome = () => {
    setShowSide(!showSide);
    navigate("/");
  };

  const items = navs.map((val, i) => (
    <li
      key={i}
      className="hover:text-redColor cursor-pointer w-fit transition-all hover:translate-x-5 md:hover:translate-x-0  duration-500 "
      onClick={() => i == 0 && handleHome()}
    >
      {val}
    </li>
  ));

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        console.log("scrolling down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="relative">
      {showSide && (
        <div className="bg-nav w-3/4 md:w-1/2 h-screen text-whiteColor space-y-6 p-8 md:hidden fixed transition-all duration-1000  z-[120]">
          <div
            className="flex justify-end text-whiteColor"
            onClick={() => setShowSide(!showSide)}
          >
            <AiOutlineClose className="text-xl w-fit cursor-pointer" />
          </div>
          <ul className="space-y-4">{items}</ul>
        </div>
      )}
      {/* top */}
      <div className="bg-nav flex justify-center">
        <div
          className={`w-full h-12 bg-nav container px-4 sm:px-6 lg:px-8 mx-0  hidden md:flex text-whiteColor justify-between text-sm items-center`}
        >
          <div className="flex space-x-6">
            <div className="flex space-x-2 items-center">
              <BsTelephone />
              <span>01014031704</span>
            </div>
            <div className="flex space-x-2 items-center">
              <AiOutlineMail />
              <span>kmohamed9231@gmail.com</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <span>Theme FAQ's</span>
            <span>Nedd Helps</span>
            <span>EN</span>
            <span>USD</span>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-white shadow-lg sticky h-[72px] md:h-fit top-0 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 w-full left-0   pb-2 bg-white">
          {/* first row */}
          <div className="flex justify-between w-full">
            <div className="">
              <h2
                className="text-redColor font-extrabold text-3xl cursor-pointer"
                onClick={() => navigate("/")}
              >
                Twister
              </h2>
            </div>
            <div className="md:w-4/6 hidden md:flex items-center justify-between border rounded-lg px-2">
              <div className="flex items-center w-full">
                <AiOutlineSearch />
                <input
                  type="search"
                  className="outline-none  w-full bg-transparent p-2"
                  placeholder="Search..."
                />
              </div>
              <button className="flex justify-end border text-sm w-[100px] h-full items-center border-r-0 border-b-0 border-t-0 text-grayColor">
                All Category
              </button>
            </div>
            <div className="flex items-center space-x-4 justify-end text-xl">
              {/* <div className=" rounded-full p-2 cursor-pointer">
                <HiUser className="" />
              </div> */}
              <div
                className=" rounded-full p-2 text-xl cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <BsFillCartFill />
              </div>
              <div className="flex md:hidden  rounded-full p-2 text-xl cursor-pointer">
                <GiHamburgerMenu
                  className="text-2xl cursor-pointer"
                  onClick={() => setShowSide(!showSide)}
                />
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="hidden md:flex items-center justify-between mt-8 relative">
            <div
              className="flex space-x-2 items-center border hover:text-redColor transition-all cur rounded-md p-2 "
              // onClick={() => sethowDrop(!showDrop)}
            >
              <BiCategory />
              <span>Categories</span>
              <MdKeyboardArrowDown />
            </div>
            {/* {showDrop && (
            <div className="absolute p-4 bg-nav w-[200px] shadow-md top-10 left-0 z-[400]">
              <ul className="capitalize space-y-2">
                <li className="cursor-pointer hover:text-redColor hover:transition-all">
                  men's clothing
                </li>
                <li className="cursor-pointer hover:text-redColor hover:transition-all">
                  women's clothing
                </li>
                <li className="cursor-pointer hover:text-redColor hover:transition-all">
                  jewelery
                </li>
                <li className="cursor-pointer hover:text-redColor hover:transition-all">
                  electronics
                </li>
              </ul>
            </div>
          )} */}
            <div className="hidden md:flex">
              <ul className="flex space-x-3 items-center">{items}</ul>
            </div>
            <div className="flex md:hidden">
              <GiHamburgerMenu
                className="text-2xl cursor-pointer"
                onClick={() => setShowSide(!showSide)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
