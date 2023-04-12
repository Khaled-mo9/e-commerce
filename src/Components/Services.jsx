import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity, MdPayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
const Services = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4 gap-4">
      <div className="bg-white text-center w-fit col-span-4 md:col-span-2 lg:col-span-1 p-4 flex justify-center items-center space-y-4 flex-col">
        <TbTruckDelivery className="text-2xl" />
        <span className="font-bold text-lg">WorldWide Delivery</span>
        <p className="text-grayColor w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore
          reiciendi.
        </p>
      </div>
      <div className="bg-white text-center w-fit col-span-4 md:col-span-2 lg:col-span-1 p-4 flex justify-center items-center space-y-4 flex-col">
        <MdPayment className="text-2xl" />
        <span className="font-bold text-lg">Safe Payment</span>
        <p className="text-grayColor w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore
          reiciendi.
        </p>
      </div>
      <div className="bg-white text-center w-fit col-span-4 md:col-span-2 lg:col-span-1 p-4 flex justify-center items-center space-y-4 flex-col">
        <MdOutlineSecurity className="text-2xl" />
        <span className="font-bold text-lg">Shop with confidence</span>
        <p className="text-grayColor w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore
          reiciendi.
        </p>
      </div>
      <div className="bg-white text-center w-fit col-span-4 md:col-span-2 lg:col-span-1 p-4 flex justify-center items-center space-y-4 flex-col">
        <BiSupport className="text-2xl" />
        <span className="font-bold text-lg">24/7 Support</span>
        <p className="text-grayColor w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore
          reiciendi.
        </p>
      </div>
    </section>
  );
};

export default Services;
