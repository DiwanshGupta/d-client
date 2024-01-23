import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { useAuth } from "../../store/auth";

const Admin = () => {
  const { user, isloading } = useAuth();
  console.log("hello", user);

  if (isloading) {
    return (
      <h1 className="flex items-center justify-center m-auto text-3xl font-bold h-screen">
        loading....
      </h1>
    );
  }
  if (user.isadmin == false) {
    return <Navigate to="/" />;
  }
  return (
    <div className="text-white text-xl dark:bg-black min-h-screen">
      <div className=" grid grid-cols-5">
        <div className="min-h-screen border-r-8 border-gray-600">
          <div className="py-10 px-16 min-w-full border-b-4 border-gray-600 rounded-xl">
            <NavLink className=" ">
              <FaUser className="text-9xl" />
              <br />
            </NavLink>
          </div>
          <div className=" mx-16 pt-4 pb-4 text-blue-500">
            <NavLink to="/" className="mx-2 my-8 flex">
              <FaHome className="mx-2" />
              Home
            </NavLink>
            <NavLink to="/admin/user" className="mx-2 my-8 flex text-center">
              <FaUser className=" mx-2" />
              users
            </NavLink>
            <NavLink to="/admin/contact" className="mx-2 my-8 flex">
              <RiMessage3Fill className="mx-2" />
              contacts
            </NavLink>
          </div>
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
