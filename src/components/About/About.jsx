import React from "react";
import AboutImg from "../../assets/img/IMG-20240210-WA0004.jpg";

const About = () => {
  return (
    <div className="w-full lg:flex my-10">
      <div className="lg:w-6/12 w-full flex  ">
          <h1 className="text-black lg:text-7xl text-3xl font-extrabold  my-auto ml-20">HELLO <br /> WORLD HI </h1>
      </div>
      <div className="lg:w-6/12 w-full  flex justify-end ">
        <img src={AboutImg} alt="" className="rounded-s-3xl h-96 w-10/12 border-l-4 border-t-4 border-b-4 border-red-800" />
      </div>
    </div>
  );
};

export default About;