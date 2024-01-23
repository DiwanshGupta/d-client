import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../store/auth";
const Register = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const { storetokeinLs } = useAuth();

  const navigate = useNavigate();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://d-mernserver.onrender.com/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        const data = await response.json();
        storetokeinLs(data.token);
        setuser({ username: "", email: "", phone: "", password: "" });
        navigate("/");
      } else {
        const data = await response.json();
        toast.error(data.message || "An error occurred");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };
  return (
    <div className="mt-14 h-screen">
      <div className="grid grid-rows-1 p-3 items-center justify-center">
        {" "}
        <div className=" mb-4 font-semibold text-5xl">Registrartin form</div>
        <ToastContainer />
      </div>
      <div className="flex justify-around md:flex-row  items-center flex-col">
        <div className="hidden md:block">
          {" "}
          <img src="../src/assets/giphy.gif" />
        </div>
        <div className=" md:w-1/2 lg:w-2/6  w-4/5">
          <div className="p-5   md:p-4 justify-center mt-16 items-center   text-white  signgh hover:signgh focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm ">
            <form method="post" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  value={user.username}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="Username"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Name
                </label>
              </div>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  value={user.email}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="grid md:grid-cols-1 md:gap-6">
                <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-text-cyan-500 peer"
                    placeholder=" "
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                    required
                  />

                  <label
                    htmlFor="Phone"
                    className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  value={user.password}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <div className=" text-center">
                <button
                  type="submit"
                  className="text-gray-300  m-auto  bg-teal-500 hover:bg-teal-600 hover:text-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className=" text-center md:text-center justify-center md:justify-center  flex ">
              <div className="  w-2/3 md:w-2/3 md:flex md:justify-center  ">
                <h1>
                  <div className="text-white text-xl ">
                    Already have an account ?{" "}
                    <NavLink to="/login" className="text-gray-300 ">
                      Login
                    </NavLink>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
