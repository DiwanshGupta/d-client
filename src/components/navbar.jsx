import React from "react";
import { useState } from "react";
import { BiLogIn, BiSolidHome, BiDetail, BiSolidContact } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
const Navbar = () => {
  const { islogin } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className=" fixed w-full z-20 top-0 left-0  ">
      <div className="w-full flex flex-wrap bg-violet-800 items-center md:justify-between  justify-between mx-auto p-2">
        <NavLink to="/" className="flex md:ml-5 items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-600">
            D
          </span>
        </NavLink>
        <div className="flex  ">
          <button
            onClick={toggleMobileMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-cyan-700 rounded-lg md:hidden  focus:outline-none   dark:text-cyan-600 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox={`${isMobileMenuOpen ? "0 0 24 24" : "0 0 17 14"}`}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={`${
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M1 1h15M1 7h15M1 13h15"
                }`}
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto  ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 text-xl navmer font-medium text-center  md:mr-9  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0    ">
            <li>
              <NavLink
                to="/"
                className="block py-2 pl-3 flex pr-4 text-center justify-center text-cyan-500  hover:text-cyan-700  rounded md:bg-transparent  md:p-0 "
                aria-current="page"
              >
                <BiSolidHome className=" text-center text-xl m-1" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block justify-center py-2 pl-3 pr-4 flex text-cyan-500  hover:text-cyan-600  md:hover:bg-transparent  md:p-0 "
              >
                <BiDetail className=" text-center text-xl m-1" />
                {"  "}
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block justify-center py-2 pl-3 flex pr-4 text-cyan-500  hover:text-cyan-700  md:hover:bg-transparent  md:p-0 "
              >
                <BiSolidContact className=" text-center  text-xl m-1" />
                {"  "}
                Contact
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/service"
                className="block justify-center py-2 pl-3 flex pr-4 text-cyan-500  hover:text-cyan-700  md:hover:bg-transparent  md:p-0 "
              >
                <BiSolidContact className=" text-center  text-xl m-1" />
                {"  "}
                Service
              </NavLink>
            </li>
            {islogin ? (
              <li>
                <NavLink
                  to="/logout"
                  className="block flex justify-center py-2 pl-3 pr-4 text-cyan-500  hover:text-cyan-600  md:hover:bg-transparent  md:p-0 "
                >
                  <BiLogIn className=" text-center text-xl m-1" />
                  {"  "}
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="block flex justify-center py-2 pl-3 pr-4 text-cyan-500  hover:text-cyan-600  md:hover:bg-transparent  md:p-0 "
                  >
                    <BiLogIn className=" text-center text-xl m-1" />
                    {"  "}
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="block flex justify-center py-2 pl-3 pr-4 text-cyan-500  hover:text-cyan-600  md:hover:bg-transparent  md:p-0 "
                  >
                    <BiLogIn className=" text-center text-xl m-1" />
                    {"  "}
                    Register{" "}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
