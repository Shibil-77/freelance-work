/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import testImg from "../../assets/test/test2.jpg";
import arrowIcon from "../../assets/icons/arrow-right.png";
import { services } from "..";

const arr = [1, 2, 3, 4, 5, 6];

const Service = () => {
  return (
    <div className="lg:container">
      <h1 className="text-center text-8xl mb-3 font-extrabold">SERVICE'S</h1>
      <hr className="w-full h-[3px]  my-4 mx-auto  bg-neutral-600" />
      <h1 className="text-center text-xl font-mono">
        {" "}
        Dedicated to overcoming obstacles with unwavering quality, precision, and passion.
      </h1>
      <hr className="w-8/12 h-[3px]  mt-3 mx-auto  bg-neutral-600" />
      <div className="flex gap-5 justify-center my-10 flex-wrap">
        {services.map((items, index) => {
          return (
            <>
              <div class="lg:w-4/12  w-full max-w-sm bg-transparent   rounded-t-3xl  ">
                <a href="#">
                  <img class="rounded-3xl h-80" src={items.image} alt="" />
                </a>
                <div class="p-5 flex">
                  <div className="w-3/4">
                    <a href="#">
                      <h5 class="mb-2 text-xl  font-bold tracking-tight text-gray-900 dark:text-white">
                        {items.title}
                      </h5>
                    </a>
                    <p class="mb-3 font-mono  text-gray-700 dark:text-gray-400">
                      {items.desc}
                    </p>
                  </div>
                  <div className="flex justify-end items-end w-1/4">
                    <img src={arrowIcon} width={40} height={40} alt="" />
                  </div>
                </div>
              </div>
              {index + 1 === 3 ||
                (index + 1 !== 6 && (
                  <hr className="w-0.5 h-[250px] mx-2 rounded-full mt-12 rotate-180 lg:block hidden bg-neutral-600" />
                ))}
            </>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          class="text-white shadow-sm bg-[#1a1717] bg-opacity-90 px-16 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Service;
