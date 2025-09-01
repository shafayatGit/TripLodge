import React from "react";
import Hero from "../../Components/Hero";
import FeaturedDestination from "../../Components/FeaturedDestination";
import ExclusiveOffer from "../../Components/ExclusiveOffer";
import Testimonial from "../../Components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffer/>
      <Testimonial/>
    </>
  );
};

export default Home;
