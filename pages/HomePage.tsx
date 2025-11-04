import React from "react";
import Hero from "../components/home/Hero";
import Journey from "../components/home/Journey";
import Grades from "../components/home/Grades";
import WhyUs from "../components/home/WhyUs";
import PartnershipCTA from "../components/home/PartnershipCTA";
import Recipes from "../components/home/Recipes";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Journey />
      <Grades />
      <WhyUs />
      <PartnershipCTA />
      <Recipes />
    </div>
  );
};

export default HomePage;
