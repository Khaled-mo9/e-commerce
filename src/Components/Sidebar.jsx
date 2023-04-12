import React from "react";
import { BiCategory } from "react-icons/bi";
import image1 from "../assets/SlideImages/slide-1.png";
import image2 from "../assets/SlideImages/slide-2.png";
import image3 from "../assets/SlideImages/slide-3.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Store/ProductSlice";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
const Sidebar = () => {
  const sides = [
    {
      icon: "BiCategory",
      name: "men's clothing",
    },
    {
      icon: "BiCategory",
      name: "women's clothing",
    },
    {
      icon: "BiCategory",
      name: "jewelery",
    },
    {
      icon: "BiCategory",
      name: "electronics",
    },
    {
      icon: "BiCategory",
      name: "Cars",
    },
    {
      icon: "BiCategory",
      name: "Home & Garden",
    },
    {
      icon: "BiCategory",
      name: "Gifts",
    },
    {
      icon: "BiCategory",
      name: "Music",
    },
    {
      icon: "BiCategory",
      name: "Health & Beauty",
    }
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProducts = (index) => {
    dispatch(getCategory(sides[index]?.name));
    navigate("/products");
  };

  const sidesItems = sides.map((item, i) => {
    return (
      <div
        key={i}
        className="flex space-x-2 capitalize items-center px-4 py-1 hover:bg-red-100 cursor-pointer"
        onClick={() => handleProducts(i)}
      >
        <BiCategory />
        <span>{item.name}</span>
      </div>
    );
  });

  return (
    <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 mt-4 grid grid-cols-12 gap-x-8">
      {/* left  */}
      <div className="space-y-2 pb-2 hidden md:flex flex-col shadow-md h-fit col-span-4">
        {sidesItems}
      </div>
      {/* rigth */}
      <div className="mt-8 col-span-12 md:col-span-8">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center sm:items-start sm:grid grid-cols-12 ">
              <div className="sm:col-span-8 lg:col-span-9 space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  50% off your first <br /> shoping
                </h2>
                <p className=" w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae praesentium voluptates.
                </p>
                <button className="text-center bg-redColor transition-all hover:bg-red-400 p-2 px-6 font-semibold text-sm rounded-md text-whiteColor">
                  Vist Collections
                </button>
              </div>
              <div className="sm:col-span-4 lg:col-span-3">
                <img src={image1} alt="" className="h-60 sm:h-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center sm:items-start sm:grid grid-cols-12 ">
              <div className="sm:col-span-8 lg:col-span-9 space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  50% off your first <br /> shoping
                </h2>
                <p className="w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae praesentium voluptates.
                </p>
                <button className="text-center bg-redColor transition-all hover:bg-red-400 p-2 px-6 font-semibold text-sm rounded-md text-whiteColor">
                  Vist Collections
                </button>
              </div>
              <div className="sm:col-span-4 lg:col-span-3">
                <img src={image2} alt="" className="h-60 sm:h-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center sm:items-start sm:grid grid-cols-12 ">
              <div className="sm:col-span-8 lg:col-span-9 space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  50% off your first <br /> shoping
                </h2>
                <p className="w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae praesentium voluptates.
                </p>
                <button className="text-center bg-redColor transition-all hover:bg-red-400 p-2 px-6 font-semibold text-sm rounded-md text-whiteColor">
                  Vist Collections
                </button>
              </div>
              <div className="sm:col-span-4 lg:col-span-3">
                <img src={image3} alt="" className="h-60 sm:h-full" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sidebar;
