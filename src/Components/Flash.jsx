import React from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Crad from "./Crad";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoFlashSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const Flash = () => {
  const { products } = useSelector((state) => state.products);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      //   {
      //     breakpoint: 768, // tablet breakpoint
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 1,
      //     },
      //   },
      {
        breakpoint: 780, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990, // tablet breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440, // mobile breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className=" flex justify-end relative -top-[239px]  -right-[15px]"
        onClick={onClick}
      >
        <button className="next bg-nav w-fit text-whiteColor rounded-full">
          <BsArrowRightShort className="text-2xl" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className=" flex justify-start relative top-[230px] -left-[30px] "
        onClick={onClick}
      >
        <button className="next flex bg-nav text-whiteColor rounded-full w-fit items-center">
          <BsArrowLeftShort className="text-2xl" />
        </button>
      </div>
    );
  }

  const items = [];
  for (let i = 0; i < products?.length; i++) {
    items.push(
      <div key={i} className="px-2">
        <Crad products={products[i]} />
      </div>
    );
  }

  let sliderRef = React.useRef();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex space-x-4 items-center text-2xl font-semibold mb-4">
        <IoFlashSharp className="text-redColor" />
        <span>Top Flash</span>
      </div>
      <Slider {...settings} ref={sliderRef} className="">
        {items}
      </Slider>
      <div
        className="absolute top-1/2"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <button className="next flex bg-nav text-whiteColor rounded-full w-fit items-center">
          <BsArrowLeftShort className="text-2xl" />
        </button>
      </div>
      <div
        className="absolute right-8 md:right-16 top-1/2"
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <button className="next bg-nav w-fit text-whiteColor rounded-full">
          <BsArrowRightShort className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Flash;
