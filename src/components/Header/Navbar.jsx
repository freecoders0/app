import React from "react";
import { GrGithub } from "react-icons/gr";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>

              <li>
                <NavLink to={"/app"}>App</NavLink>
              </li>
              <li>
                <NavLink to={"/install"}>Installation</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-[#632EE3] " href="/">
            <img
              className="w-auto max-h-[60px] "
              src="/src/assets/logo.png"
              alt=""
              srcset=""
            />{" "}
            <span className=" font-bold font-[inter] uppercase ">Hero.io</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/app"}>App</NavLink>
            </li>
            <li>
              <NavLink to={"/install"}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a
            href="https://github.com/freecoders0"
            className="btn bg-gradient-to-b text-white  from-[#632EE3] to-[#9F62F2] hover:bg-gradient-to-r transition duration-2000 "
          >
            <GrGithub></GrGithub>
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
