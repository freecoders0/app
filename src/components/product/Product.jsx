import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { title, downloads, ratingAvg, id } = product;
  return (
    <div className="card bg-base-100 shadow-lg p-3 hover:scale-105 transition ease-in ">
      <Link to={`/app/${id}`}>
        <figure>
          <img src={`/src/assets/demo-app (${id}).jpeg`} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-between">
            <div className="badge bg-[#F1F5E8] p-1 ">
              <img
                className="h-5"
                src="/src/assets/icon-downloads.png"
                alt=""
                srcset=""
              />{" "}
              {downloads}{" "}
            </div>
            <div className="badge bg-[#e8ceb9] p-1 ">
              <img
                className="h-5"
                src="/src/assets/icon-ratings.png"
                alt=""
                srcset=""
              />{" "}
              {ratingAvg}{" "}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
