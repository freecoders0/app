import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar></Navbar>
      <div className="p-5 md:p-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
