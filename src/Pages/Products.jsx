import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Crad from "../Components/Crad";

const Products = () => {
  const { category } = useSelector((state) => state.products);
  const items = [];
  for (let i = 0; i < category?.length; i++) {
    items.push(
      <div
        key={i}
        className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
      >
        <Crad products={category[i]} />
      </div>
    );
  }
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8  pt-12 pb-40">
      <div className="grid grid-cols-12 xl:grid-cols-10 gap-2">{items}</div>
    </div>
  );
};

export default Products;
