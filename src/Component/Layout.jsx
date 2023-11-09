import React from "react";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
const Layout = ({children}) => {
  return (
    <>
      <TopNavbar/>
      <div>
      {children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
