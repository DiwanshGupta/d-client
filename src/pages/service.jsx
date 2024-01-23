import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <>
      <div className="mx-auto mt-14">
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
                    className="w-72 flex items-center flex-col border m-3 border-violet-600 p-3"
                  >
                    <div>
                      <img
                        src="/education-pattern-background-doodle-style_53876-115365.avif"
                        className="w-60 h-56"
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
                        <p className="font-semibold text-gray-400 text-sm">
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
