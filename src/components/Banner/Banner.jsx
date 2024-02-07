import React from "react";
import testImg from "../../assets/istockphoto-1146517111-612x612.jpg";

const Banner = () => {
  return (
    <div className="container  py-9 ">
      <div className="lg:flex lg:border-b-2 border-opacity-40 border-black">
        <div className="lg:w-7/12 w-full  ">
          <div className="flex justify-center ">
            <img src={testImg} className="rounded-3xl w-11/12 h-96" alt="" />
          </div>
          <div className=" w-full py-6 flex justify-center">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Alternative
            </button>
          </div>
        </div>
        <hr className="w-0.5 h-[250px] mr-7 my-auto rotate-180 lg:block hidden bg-neutral-600" />
        <div className="lg:w-5/12 w-full">
          <div className="flex justify-center  ">
            <img src={testImg} className="rounded-3xl h-96 " alt="" />
          </div>
          <div className=" w-full h-10 flex justify-center py-5">
            <h1 className="text-center w-8/12">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
