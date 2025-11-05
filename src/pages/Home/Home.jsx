import React from "react";
import { useLoaderData } from "react-router";
import Product from "../../components/product/Product";
import useProducts from "../../Hooks/useProducts";

const Home = () => {
  // const products = useLoaderData();
  const { products, loading, error } = useProducts();
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center  flex-col px-[20%] ">
          <h1 className=" text-3xl md:text-6xl font-semibold mt-10 text-center ">
            We Build <br />{" "}
            <span className="text-blue-600">Productive Apps</span>
          </h1>
          <p className="mt-10 text-center">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                App Store
              </button>
            </a>

            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition">
                Play Store
              </button>
            </a>
          </div>

          <img src="/src/assets/hero.png" className="mt-5" alt="" srcset="" />
        </div>
      </div>
      <div className="flex h-[60vh] bg-blue-700 flex-col justify-center items-center ">
        <div>
          {" "}
          <h1 className="text-3xl font-semibold text-white">
            Trusted by Millions, Built for You
          </h1>
        </div>
        <div className="flex justify-around mt-10">
          <div className="text-center">
            <p className="text-white text-sm">Total Downloads </p>
            <h1 className="text-white text-2xl font-bold">29.6M</h1>
            <p className="text-white text-sm">21 % more then previous month</p>
          </div>
          <div className="text-center mx-10">
            <p className="text-white text-sm">Total Downloads </p>
            <h1 className="text-white text-2xl font-bold">906</h1>
            <p className="text-white text-sm">21 % more then previous month</p>
          </div>
          <div className="text-center">
            <p className="text-white text-sm">Total Downloads </p>
            <h1 className="text-white text-2xl font-bold">132</h1>
            <p className="text-white text-sm">21 % more then previous month</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mb-3 mt-10  md:mb-10">
        <h3 className="text-4xl font-bold font-[#inter] ">Trending Apps</h3>
        <p className="mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-10">
        {featuredProducts.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <a href="/app">
          {" "}
          <button className="p-3 bg-blue-500 text-white text-2xl ">
            Show More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
