import React from "react";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex items-center h-screen flex-col justify-center">
      <span>404 | Page Not found</span>
      <span>
        Let s got to Home page
        <NavLink to="/">
          <button
            type="button"
            className=" mt-6 mx-4 px-2 py-1 border border-blue-500 dark:bg-blue-900 rounded-lg"
          >
            Home
          </button>
        </NavLink>
      </span>
    </div>
  );
};

export default Notfound;
