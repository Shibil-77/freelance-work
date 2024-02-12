import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Service from "../../components/Service/Service";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Service />
    </>
  );
};

export default Home;
