import React from "react";
import BannerImg from "../../assets/test/test1.jpg";
import BannerImg2 from "../../assets/test/test2.jpg";
import video from "../../assets/BB_4abc3c56-03b3-4f0e-91c7-3e2771ba48af_preview.mp4";

const Banner = () => {
  return (
    <>
      <div className="lg:container justify-center  lg:py-9  ">
        <div className="lg:flex my-5 ">
          <div className="lg:w-7/12 w-full ">
            <div className="flex  lg:mx-0 mx-5">
              <img src={BannerImg} className="rounded-3xl h-96 w-full" alt="" />
            </div>
            <div className=" w-full py-6 flex justify-center ">
              <button
                type="button"
                class="text-white shadow-sm bg-[#1a1717] bg-opacity-90 px-16 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                SHOP NOW
              </button>
              <button
                type="button"
                class="py-2.5 px-16 me-2 mb-2 text-sm font-medium shadow-sm text-gray-900 focus:outline-none bg-transparent border-2 rounded-lg  border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                LEARN MORE
              </button>
            </div>
          </div>
          <hr className="w-0.5 h-[250px] mx-10 mt-20 rotate-180 lg:block hidden bg-neutral-600" />
          <div className="lg:w-5/12 w-full ">
            <div className="flex  lg:mx-0 mx-5">
              <img
                src={BannerImg2}
                className="rounded-3xl h-96 w-full"
                alt=""
              />
              {/* <video className="rounded-3xl " width={700} autoPlay controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </div>
            <div className=" w-full h-auto flex justify-center py-5">
              <h1 className="text-center w-8/12 font-mono">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has
              </h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-11/12 mx-auto h-[2px]   bg-neutral-600 opacity-40" />
    </>
  );
};

export default Banner;
