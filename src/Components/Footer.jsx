import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
const Footer = () => {
  const about = [
    "Careers",
    "Our Strores",
    "our Cares",
    "Term & Conditions",
    "Privacy Policy",
  ];
  const care = [
    "Help Center",
    "How To Buy",
    "Track Your Order",
    "Corporate & Bulk PurChasing",
    "Returns & Refunds",
  ];
  const contact = [
    "35st square,Manchester",
    "kmohamed9231@gmail.com",
    "+201014031704",
  ];
  const aboutItems = [];
  const carItems = [];
  const contactItems = [];
  for (let i = 0; i < about.length; i++) {
    carItems.push(
      <li key={i} className="text-grayColor hover:underline">
        {care[i]}
      </li>
    );
    aboutItems.push(
      <li key={i} className="text-grayColor hover:underline">
        {about[i]}
      </li>
    );
    if (i < 3)
      contactItems.push(
        <li key={i} className="text-grayColor hover:underline">
          {about[i]}
        </li>
      );
  }
  return (
    <footer className="bg-nav">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  text-whiteColor grid text-center lg:text-start lg:grid-cols-8 gap-8 py-12">
        {/* 1st-col */}
        <div className="col-span-2 space-y-4">
          <h2 className="font-bold text-4xl text-redColor">Twister</h2>
          <p className="text-grayColor text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            iste error possimus. Voluptatibus possimus veritatis neque, quidem
            blanditiis saepe eos adipisci qui, necessitatibus, reprehenderit
            cumque obcaecati debitis voluptate aspernatur optio!
          </p>
          <div className="flex space-x-4 text-sm justify-center lg:justify-start">
            <div className="flex space-x-2 items-center bg-specialbg p-2 rounded-md cursor-pointer">
              <FaGooglePlay className="text-base" />
              <span>Google play</span>
            </div>
            <div className="flex space-x-2 items-center bg-specialbg p-2 rounded-md cursor-pointer">
              <GrAppleAppStore className="text-base" />
              <span>App store</span>
            </div>
          </div>
        </div>
        {/* 2nd-col */}
        <div className="col-span-2 space-y-4">
          <h3 className="font-semibold text-lg">About Us</h3>
          <ul className="space-y-1 ">{aboutItems}</ul>
        </div>
        {/* 3rd-col */}
        <div className="col-span-2 space-y-4">
          <h3 className="font-semibold text-lg">Customer Care</h3>
          <ul className="space-y-1 ">{carItems}</ul>
        </div>
        {/* 4th-col */}
        <div className="col-span-2 space-y-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <ul className="space-y-1 ">{contactItems}</ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
