import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setuserData] = useState(true);
  const { user } = useAuth();
  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setuserData(false);
  }
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://d-mernserver.onrender.com/api/form/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }
      );

      if (response.ok) {
        const data = await response.text();
        console.log(data);
        toast.success("Message send Successfully");

        setContact({ username: user.username, email: user.email, message: "" });
      } else {
        const errorData = await response.text();
        toast.error(`Error: ${errorData}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="mt-14 bg-black bg-opacity-25 h-screen">
      <div className="grid grid-rows-1 p-3 items-center justify-center">
        {" "}
        <div className=" mb-4 font-semibold text-5xl">Contact us</div>
        <ToastContainer />
      </div>
      <div className="flex justify-around md:flex-row  items-center flex-col">
        <div className="hidden md:block">
          {" "}
          <img
            src="/computer-setting-3635143-3041090.webp"
            alt="img"
            className="  md:ml-16 mt-10   mr-10"
          />{" "}
        </div>
        <div className=" md:w-1/2 lg:w-2/6  w-4/5">
          <div className="p-5   md:p-4 justify-center mt-16 items-center   text-white  focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm ">
            <form method="post" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none  dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                  placeholder=" "
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="Username"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Name
                </label>
              </div>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none  dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                  placeholder=" "
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none  dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                  placeholder=" "
                  value={contact.message}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>

              <div className=" text-center">
                <button
                  type="submit"
                  className="text-white  m-auto  bg-gray-700 hover:bg-teal-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
