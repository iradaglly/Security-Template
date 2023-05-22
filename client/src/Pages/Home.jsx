import React from "react";
import HomePage from "../Pages/HomePage";
import Services from "./Services";
import Features from "./Features";
import Counts from "./Counts";
import Cards from "./Cards";
const Home = () => {
  return (
    <>
      <HomePage />
      <Services />
      <Features />
      <Counts />
      <Cards/>
    </>
  );
};

export default Home;
