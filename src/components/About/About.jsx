import React from "react";
import AboutImg from "../../assets/test/b73c6a32c636d32b8e87e6b7587211d6ac55dcf9_2000x2000.webp";

const About = () => {
  return (
    <div className="w-full lg:flex my-10 bg-[#d1d1d1] py-10">
      <div className="lg:w-6/12 w-full my-auto  lg:ml-36 py-auto lg:mx-0 mx-5">
        <h1 className="text-black lg:text-8xl text-5xl  font-sans ">
          IN THE
          <br />
          SPOTLIGHT!
        </h1>
        <p className="mt-5 font-mono">
          {" "}
          Here are the biggest technology acquisitions of so far, in reverse{" "}
          <br /> chronological order.reverse chronological order.
        </p>
        {/* <div className=" w-full py-6 flex justify-center gap-8 "> */}
        <button
          type="button"
          class="text-white mt-10  shadow-sm bg-[#1a1717] bg-opacity-90 px-16 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          SHOW WALLPAPERS
        </button>
        {/* </div> */}
      </div>
      <div className="lg:w-6/12 w-full  flex justify-end lg:mt-0 mt-10 ">
        <img
          src={AboutImg}
          alt=""
          className="rounded-s-3xl h-auto w-full border-l-4 border-t-4 border-b-4 border-white border-opacity-40"
        />
      </div>
    </div>
  );
};

export default About;
