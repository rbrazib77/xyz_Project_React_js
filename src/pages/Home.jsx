import React from "react";
import About from "../components/AboutItem";
import Banner from "../components/Banner";
import FeaturesItem from "../components/FeaturesItem";
import AboutItem from "../components/AboutItem";
import Pricing from "../components/Pricing";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Banner heading="Develop your skills without diligence" subheading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China." btn1="Get Started" btn2="Discount"/>
      <FeaturesItem/>
      <AboutItem/>
      <Pricing/>
      <Newsletter/>
    </>
  );
};

export default Home;
