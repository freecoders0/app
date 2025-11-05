import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useProducts from "../../Hooks/useProducts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
} from "recharts";

const Productdetails = () => {
  const [installed, setInstalled] = useState(false);
  const { id } = useParams();
  const { products, loading } = useProducts();
  const product = products.find((specific) => String(specific.id) === id);
  if (loading) return <p>loading....</p>;

  const {
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,

    description,
    ratings,
  } = product;

  const handeleAddinstall = () => {
    const exitinglist = JSON.parse(localStorage.getItem("install"));
    let upadtedlist = [];
    if (exitinglist) {
      const isDuplicate = exitinglist.some((p) => p.id === product.id);
      if (isDuplicate) return toast.error("App Alread added");
      upadtedlist = [...exitinglist, product];
    } else {
      upadtedlist.push(product);
    }
    localStorage.setItem("install", JSON.stringify(upadtedlist));
    toast.success("App installed Successfull");
    setInstalled(true);
  };
  return (
    <div>
      <div className="card md:card-side bg-base-100 shadow-sm">
        <figure>
          <img
            className="max-w-[300px] "
            src={`/src/assets/demo-app (${id}).jpeg`}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{title} </h2>
          <p>
            Developed by<span>{companyName} </span>
          </p>
          <hr className="my-1" />

          <div className="flex gap-10">
            <div className=" flex  justify-center flex-col ml-1">
              <img
                className="max-w-10 "
                src="/src/assets/icon-downloads.png"
                alt=""
                srcset=""
              />
              <p>downloads</p>
              <p className="text-3xl font-bold ">{downloads} </p>
            </div>
            <div className=" flex   justify-center flex-col ml-1">
              <img
                className="max-w-10  "
                src="/src/assets/icon-ratings.png"
                alt=""
                srcset=""
              />
              <p>Average Rating</p>
              <p className="text-3xl font-bold ">{ratingAvg} </p>
            </div>
            <div className=" flex   justify-center flex-col ml-1">
              <img
                className="max-w-10  "
                src="/src/assets/icon-review.png"
                alt=""
                srcset=""
              />
              <p>Review</p>
              <p className="text-3xl font-bold ">{reviews} </p>
            </div>
          </div>

          <div className="card-actions ">
            <button
              onClick={() => handeleAddinstall()}
              disabled={installed}
              className={`px-4 py-2 rounded-lg text-white font-medium ${
                installed
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-blue-700"
              }`}
            >
              {installed ? "Installed" : "Install"}
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl"> Rating</h2>
        <div className=" bg-amber-50  border-2  h-[70vh] p-5">
          <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={ratings}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </div>
      </div>

      <hr className="my-5" />
      <div>
        <h3 className="text-3xl ">Description</h3>
        <p className="text-gray-400 mt-2">{description} </p>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Productdetails;
