import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { useRouteError } from "react-router";

const Eror = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <div className=" flex justify-center items-center flex-col mt-20 mb-20">
        <img src="/src/assets/error-404.png" alt="" srcset="" />
        <p>{error.message} </p>
        <h4 className=" text-6xl font-bold font-[#inter]  ">
          Opps page not Found
        </h4>
        <p className="mt-4">the page looking for not found</p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Eror;
