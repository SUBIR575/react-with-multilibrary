import React from "react";
import Multiselect from "./Multiselect";
import MultiCheckbox from "./MultiCheckbox";
import Home from "./Home";
import Shop from "./Shop";
import SingleProduct from "./SingleProduct";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/multiselect" element={<Multiselect />}></Route>
          <Route path="/multicheckbox" element={<MultiCheckbox />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:id" element={<SingleProduct />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
