import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className="navlink"
          to="/"
          style={({ isActive }) =>
            isActive
              ? { fontWeight: "600", color: "#23be0a", background: "#f0fdf4" }
              : { fontWeight: "600", background: "white" }
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink"
          to="/listedBooks"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#23be0a",
                  background: "#f0fdf4",
                }
              : { fontWeight: "600", background: "white" }
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink"
          to="/dashboard"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#23be0a",
                  background: "#f0fdf4",
                }
              : { fontWeight: "600", background: "white" }
          }
        >
          Page to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#23BE0A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-[#23BE0A] border-1 solid border-[#23BE0A] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn-ghost hover:bg-transparent text-xl font-semibold"
        >
          Book<span className="text-[#23BE0A]">Haven</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavLink
          to="/singIn"
          className="p-2 cursor-pointer rounded-lg text-base border-2 solid "
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  background: "#f0fdf4",
                  border: "solid 2px #23BE0A",
                  color: "#23BE0A",
                }
              : {
                  fontWeight: "600",
                  background: "#f0fdf4",
                  border: "solid 2px #23BE0A",
                  color: "#23BE0A",
                }
          }
        >
          Sing In
        </NavLink>
        <NavLink
          to="/singUp"
          className="p-2 cursor-pointer rounded-lg ml-2 text-base border-2 solid "
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "white",
                  background: "#23BE0A",
                  border: "solid 2px #23BE0A",
                }
              : {
                  fontWeight: "600",
                  color: "white",
                  background: "#23BE0A",
                  border: "solid 2px #23BE0A",
                }
          }
        >
          Sing Up
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
