import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <>
      <div className="mx-auto bg-black bg-opacity-40 mt-14">
        <div className="max-w-screen-xl py-3 h-full items-center m-auto flex flex-col justify-between text-white mt-8">
          <div className="flex items-center m-auto font-semibold text-4xl">
            Our Services
          </div>
          <div className=" flex flex-wrap m-auto  justify-around ">
            {services &&
              services.map((currElem, index) => {
                const { price, description, provider, service } = currElem;
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    className="w-72 flex items-center flex-col  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border m-3 rounded-xl  p-3"
                  >
                    <div>
                      <img
                        src="/education-pattern-background-doodle-style_53876-115365.avif"
                        className="w-60 rounded-xl h-56"
                        alt="service-img"
                      />
                    </div>
                    <div>
                      <div className="grid grid-flow-col gap-4 p-2 justify-between">
                        <span className="text-xs font-semibold">
                          {provider}
                        </span>
                        <span className="text-xs font-semibold">{price}</span>
                      </div>
                      <div className="m-2 my-2">
                        <span className="font-semibold text-lg my-10">
                          {service}
                        </span>
                        <p className="font-semibold text-gray-200 text-sm">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
