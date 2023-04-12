import React from 'react'
import banner1 from '../assets/Banners/banner-1.png'
import banner2 from '../assets/Banners/banner-2.png'
const Banners = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap md:flex-nowrap gap-8">
      <img
        src={banner1}
        alt="banner1"
        className="w-full md:w-1/4 h-[350px] cursor-pointer "
      />
      <img
        src={banner2}
        alt="banner2"
        className="w-full md:w-3/4 h-[350px] cursor-pointer"
      />
    </div>
  );
}

export default Banners