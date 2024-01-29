import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full  bg-gray-500/40">
      <div className="max-w-screen-sm text-base items-center m-auto flex justify-between  px-3 p-3">
        <div> @ Project Dev.All right Reseved</div>
        <div className="flex gap-4 ">
          <NavLink to={"https://github.com/DiwanshGupta"}>
            <FaGithub />
          </NavLink>
          <NavLink to={"https://www.linkedin.com/in/diwansh-gupta-568027237"}>
            <FaLinkedinIn />{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
