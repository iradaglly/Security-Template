import React from "react";
import HomePage from "../Pages/HomePage";
import Services from "./Services";
import Features from "./Features";
import Counts from "./Counts";
import Cards from "./Cards";
import Images from "./Images";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <HomePage />
      <Services />
      <Features />
      <Counts />
      <Images />
      <Cards />
    </>
  );
};

export default Home;
