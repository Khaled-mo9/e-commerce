import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Crad from "../Components/Crad";
import Flash from "../Components/Flash";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { getCarts, getProducts } from "../Store/ProductSlice";
import Categories from "../Components/Categories";
import Banners from "../Components/Banners";
import Services from "../Components/Services";
import Brands from "../Components/Brands";
import Arrivals from "../Components/Arrivals";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCarts());
  }, [dispatch]);
  return (
    <div className="space-y-12">
      <Sidebar />
      <Flash />
      <Categories />
      <Brands />
      <Arrivals />
      <Banners />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
