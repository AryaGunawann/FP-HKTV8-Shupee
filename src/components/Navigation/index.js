/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";

export const Navbar = () => {
  const token = localStorage.token;
  const isAdmin = token === "admin";
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar sticky top-0 drop-shadow-lg bg-white z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content gap-1 mt-3 p-2 shadow bg-white rounded-box w-52 text-black ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              {isAdmin ? (
                <Link to="admin" className="text-black hover:text-primary">
                  Product
                </Link>
              ) : (
                <Link to="/" className="text-black hover:text-primary">
                  Product
                </Link>
              )}
            </li>
            {isAdmin && (
              <li>
                <Link
                  to="admin/sales-recap"
                  className="text-black hover:text-primary"
                >
                  Sales Recap
                </Link>
              </li>
            )}
            <li>
              {token ? (
                <button
                  onClick={logoutHandler}
                  className="btn btn-error text-black"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-green-500 hover:bg-white text-black hover:text-black"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="flex gap-[1.13rem]">
          <a className="btn btn-ghost normal-case text-black text-xl">Shupee</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-5 menu-horizontal px-1 text-black">
          <li>
            {isAdmin ? (
              <Link to="admin" className="text-black hover:text-primary">
                Admin Page
              </Link>
            ) : (
              <Link
                to="/"
                className={`${
                  isAdmin ? "bg-white hover:bg-gray-400" : "bg-white"
                } text-black hover:text-black`}
              >
                {isAdmin ? "Product" : "Product"}
              </Link>
            )}
          </li>
          <li>{isAdmin && <Link to="admin/sales-recap">Sales Recap</Link>}</li>
          <li>
            {token ? (
              <button
                onClick={logoutHandler}
                className={`${
                  isAdmin ? "btn-error text-white" : "btn text-white"
                }`}
              >
                {isAdmin ? "Logout" : "Logout"}
              </button>
            ) : (
              <Link
                to="/login"
                className={`${
                  isAdmin
                    ? "bg-red-500 hover:bg-red-700"
                    : "bg-green-500 hover:bg-white"
                } text-black hover:text-black`}
              >
                {isAdmin ? "Logout" : "Login"}
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!isAdmin && token ? (
          <Link to="/cart" className="btn gap-2">
            <FaShoppingCart />
            Cart
          </Link>
        ) : null}
      </div>
    </div>
  );
};
