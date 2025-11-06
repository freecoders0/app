import React, { useEffect, useState } from "react";
import Installapp from "../../components/Installapp.jsx/Installapp";
import { toast } from "react-toastify";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savelist = JSON.parse(localStorage.getItem("install"));
    if (savelist) setInstall(savelist);
  }, []);

  const sortedOrder = () => {
    if (sortOrder === "price-asc") {
      return [...install].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "price-dsc") {
      return [...install].sort((a, b) => b.downloads - a.downloads);
    } else {
      return install;
    }
  };

  const removeApp = (id) => {
    const exitinglist = JSON.parse(localStorage.getItem("install"));
    let upadtedlist = exitinglist.filter((p) => p.id !== id);

    setInstall((previous) => previous.filter((p) => p.id !== id));

    localStorage.setItem("install", JSON.stringify(upadtedlist));
  };
  console.log(install);
  return (
    <div>
      {" "}
      <div className="flex justify-between ">
        <div className="text-3xl">{install.length} Apps Found</div>
        <div>
          <label className="form-control w-full max-w-xs">
            <select
              className="p-2 border-2 border-solid border-gray-400 "
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort in downloads</option>
              <option value="price-asc">Low to high</option>
              <option value="price-dsc">Hight to low</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        {sortedOrder().map((inApp) => (
          <div className=" max-h-[100px] w-full card mt-10 md:card-side bg-base-100 shadow-sm">
            <figure>
              <img
                className="max-w-[100px] "
                src={`/demo-app (${inApp.id}).jpeg`}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-md font-bold">{inApp.title} </h2>

              <div className="flex justify-between ">
                <div className="flex gap-10">
                  <div className=" flex  justify-center items-center flex-row ml-1">
                    <img
                      className="max-w-auto "
                      src="/icon-downloads.png"
                      alt=""
                      srcset=""
                    />

                    <p className="text-sm font-bold ">{inApp.downloads} </p>
                  </div>

                  <div className=" flex   justify-center items-center flex-row ml-1">
                    <img
                      className="max-w-auto  "
                      src="/icon-review.png"
                      alt=""
                      srcset=""
                    />

                    <p className="text-sm font-bold ">{inApp.reviews} </p>
                  </div>
                </div>
                <button
                  className="btn text-white bg-[#00D390] "
                  onClick={() => removeApp(inApp.id)}
                >
                  Uninstall Now <span>{inApp.size} M </span>{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
