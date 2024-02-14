import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Service from "../../components/Service/Service";
import Footers from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Service />
      {/* <Gallery /> */}
      <Footers />
    </>
  );
};

export default Home;
