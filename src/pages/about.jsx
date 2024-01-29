import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="min-h-screen mb-4 p-4 bg-black">
        <div className=" md:mx-32  text-white mt-16">
          <div className="">
            <div className="">
              <h2 className="text-xl">
                Welcome{" "}
                <span className="font-semibold">
                  {user ? `${user.username} To our website` : "To our website"}
                </span>
              </h2>
              <h1 className=" mt-2 text-5xl">Why Choose Us?</h1>
            </div>
            <div className=" mt-8 text-md">
              <p className=" mt-4">
                <span className=" font-bold">Expertise: </span>Our team consists
                of experienced IT professionals who are passionate about staying
                up-to-date with the latest industry trends.
              </p>
              <p className=" mt-4">
                <span className=" font-bold">Customization: </span>We understand
                that every business is unique. That&apos;s why we create
                solutions that are tailored to your specific needs and goals.
              </p>
              <p className=" mt-4">
                <span className=" font-bold">Customer-Centric Approach:</span>{" "}
                We prioritize your satisfaction and provide top-notch support to
                address your IT concerns.
              </p>
              <p className=" mt-4">
                <span className=" font-bold">Affordability:</span> We offer
                competitive pricing without compromising on the quality of our
                services.
              </p>
              <p className=" mt-4">
                <span className=" font-bold">Reliability:</span> Count on us to
                be there when you need us. We&apos;re committed to ensuring your
                IT environment is reliable and available 24/7.
              </p>
            </div>
            <NavLink to="/contact">
              <button
                type="button"
                className=" mt-6 mx-4 px-2 py-2 border border-blue-500 dark:bg-blue-900 rounded-lg"
              >
                Connect Now
              </button>
            </NavLink>
            <button
              type="button"
              className=" mt-6 px-2 py-2 border border-blue-500  rounded-lg"
            >
              Learn more
            </button>
            <div className=""></div>
          </div>
          <div className="flex items-center justify-center  w-3/4 mx-auto">
            <img
              src="/work-in-office-vector-30573353-removebg-preview.png"
              alt="img"
            />
          </div>
          <div className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            tempore, eius architecto officia molestias earum. Minima recusandae,
            perferendis enim, neque tempore reprehenderit, beatae iure soluta
            ipsa similique tenetur libero laudantium sit consequuntur. Ea
            officiis animi at nisi nobis nihil corrupti minima labore totam
            voluptatem eos alias in reiciendis, incidunt earum amet. Totam,
            explicabo iusto adipisci ea rem excepturi ut quam quisquam ex quia
            placeat dolor consectetur sunt dolorem! Asperiores dolor quibusdam
            aliquid ab quis quasi rerum totam modi, consectetur suscipit
            officiis, perspiciatis nemo eaque est! Repudiandae nobis voluptas
            temporibus iure excepturi repellendus quibusdam odit corporis. Id at
            natus dolores, exercitationem laborum esse aut libero enim porro
            laudantium eum sunt, accusantium, magni reiciendis ut iusto facilis
            similique possimus corporis inventore harum nemo amet! Laboriosam
            quae doloremque officia animi architecto dignissimos sequi nisi
            deleniti, nulla necessitatibus, ab dolorem accusantium at voluptates
            eligendi quidem? Non repellendus assumenda quas voluptas similique.
            Quidem, atque corrupti.
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
