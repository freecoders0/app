import React, { useState } from "react";
import Product from "../../components/product/Product";
import useProducts from "../../Hooks/useProducts";

const Apppage = () => {
  const { products } = useProducts();

  const [search, setsearch] = useState("");

  const term = search.trim().toLocaleLowerCase();
  const searchproducts = term
    ? products.filter((searchproduct) =>
        searchproduct.title.toLocaleLowerCase().includes(term)
      )
    : products;

  return (
    <div>
      <div className="flex justify-center items-center flex-col mb-3 mt-10  md:mb-10">
        <h3 className="text-4xl font-bold font-[#inter] ">
          Our All Applications
        </h3>
        <p className="mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between">
        <div className="text-3xl">
          Apps Found (
          <span className=" text-green-500">{searchproducts.length}</span>)
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              type="search"
              required
              placeholder="Search Products"
            />
          </label>
        </div>
      </div>

      {searchproducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-10">
          {searchproducts.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      ) : (
        <div> No App found</div>
      )}
    </div>
  );
};

export default Apppage;
