import React, { useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Navbar from "../Components/Navbar";
import Products from "../Pages/Products";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const AppRoute = () => {
 
  return (
    <>
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default AppRoute;
