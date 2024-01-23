import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const [datas, setdata] = useState({
    username: "",
    email: "",
    phone: "",
  });
  //   console.log("this is datas", datas[0].email);
  const { autheader } = useAuth();
  const params = useParams();
  console.log(params);
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata({
      ...datas,
      [name]: value,
    });
  };
  const getusers = async () => {
    try {
      const response = await fetch(
        `https://d-mernserver.onrender.com/api/admin/user/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: autheader,
          },
        }
      );
      const data = await response.json();
      console.log("update data", data);

      setdata(data[0]);
    } catch (error) {
      console.error("An unexpected error occurred", error);
      // Handle error, e.g., show a notification
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://d-mernserver.onrender.com/api/admin/user/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: autheader,
          },
          body: JSON.stringify(datas),
        }
      );

      if (response.ok) {
        toast.success("Update successful");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
      toast.error("Update failed");
    }
  };

  useEffect(() => {
    getusers();
  }, []);
  return (
    <>
      {" "}
      <div className=" flex items-center mt-16 flex-col m-auto justify-center md:w-3/4  lg:w-2/6  w-4/5">
        <ToastContainer />
        <div className="font-semibold text-3xl p-5">Update Contact Info.</div>
        <div className="p-5   md:p-0 justify-center  items-center w-full h-fit   text-white    focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm ">
          <form method="post" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full md:p-1.5 mb-6 group">
              <input
                type="text"
                name="username"
                id="username"
                className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                placeholder=" "
                value={datas.username}
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
                value={datas.email}
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
                  value={datas.phone}
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

            <div className=" text-center">
              <button
                type="submit"
                className="text-violet-300  m-auto  bg-cyan-500 hover:bg-teal-600 hover:text-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
