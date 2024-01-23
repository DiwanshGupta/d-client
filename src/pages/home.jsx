import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" mx-auto homebg  items-center justify-center flex flex-col  border-orange-300">
        <div className="max-w-screen-2xl m-5  md:mx-32  text-white flex items-center flex-col md:flex-row justify-between mt-8">
          <div className="md:w-2/4">
            <div className=" mt-16">
              <h2 className=" text-md">This is the world best MERN project</h2>
              <br />
              <h1 className=" text-5xl">
                Welcome to Project <br /> MERN2024
              </h1>
            </div>
            <div className=" my-4 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              ipsam aliquam sit pariatur consequatur, porro autem beatae libero,
              amet excepturi nisi quo rem, modi officia cupiditate quia!
              Molestias, vitae corrupti.
            </div>
            <button
              type="button"
              className=" mt-6 mx-4 px-2 py-1 border border-blue-500 dark:bg-blue-900 rounded-lg"
            >
              <NavLink to="/service"> Connect Now</NavLink>
            </button>
            <button
              type="button"
              className=" mt-6 px-2 py-1 border border-blue-500  rounded-lg"
            >
              <NavLink to="/about"> Learn more</NavLink>
            </button>
          </div>
          <div className="">
            <img
              src="/computer-setting-3635143-3041090.webp"
              alt="img"
              className="  md:ml-16 mt-10   mr-10"
            />
          </div>
        </div>
        <div className="w-full bg-black">
          <div className="max-w-screen-2xl m-5  md:mx-32">
            <div className="grid  md:grid-cols-4 items-center  rounded-xl p-4 bg-slate-300">
              <div className="  w-full border-b-2 md:border-b-0  md:border-r-2 border-black justify-center text-black   font-bold text-xl   mt-3 mb-3  flex flex-col items-center  m-auto  ">
                <span>50 +</span>
                <span className="mb-3">Register Companies</span>
              </div>
              <div className="justify-center w-full text-black border-b-2 md:border-b-0  md:border-r-2 border-black  font-bold text-xl   mt-3 mb-3  flex flex-col items-center  m-auto  ">
                <span>100 +</span>
                <span className="mb-3">Happy client</span>
              </div>
              <div className=" justify-center w-full text-black border-b-2 md:border-b-0  md:border-r-2 border-black  font-bold text-xl   mt-3 mb-3  flex flex-col items-center  m-auto  ">
                <span>500 +</span>
                <span className="mb-3">Trusted Develpoers</span>
              </div>
              <div className=" justify-center w-full text-black   font-bold text-xl   mt-3 mb-3  flex flex-col items-center  m-auto  ">
                <span>24/7</span>
                <span className="mb-3">Service</span>
              </div>
            </div>
            <div className=" m-5    text-white flex items-center flex-col md:flex-row justify-between mt-8">
              <div className="">
                <img
                  src="/istockphoto-1097092670-612x612-removebg-preview.png"
                  alt="img"
                  className="hidden md:block  md:ml-16 mt-10   mr-10"
                />
              </div>
              <div className="md:w-2/4">
                <div className=" mt-16">
                  <h2 className=" text-md">We are here to help you</h2>
                  <br />
                  <h1 className=" text-5xl">
                    Get Start now <br />
                  </h1>
                </div>
                <div className=" my-4 text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque ipsam aliquam sit pariatur consequatur, porro autem
                  beatae libero, amet excepturi nisi quo rem, modi officia
                  cupiditate quia! Molestias, vitae corrupti.
                </div>
                <button
                  type="button"
                  className=" mt-6 mx-4 px-2 py-1 border border-blue-500 dark:bg-blue-900 rounded-lg"
                >
                  <NavLink to="/service"> Connect Now</NavLink>
                </button>
                <button
                  type="button"
                  className=" mt-6 px-2 py-1 border border-blue-500  rounded-lg"
                >
                  <NavLink to="/about"> Learn more</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
