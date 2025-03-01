import AboutMe from "@/components/AboutMe/AboutMe";
import EndCard from "@/components/EndCard/EndCard";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Portofolio from "@/components/Portofolio/Portofolio";
import Skill from "@/components/Skill/Skill";
import React from "react";

const Testpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Portofolio />
      <AboutMe />
      <Experience />
    </div>
  );
};

export default Testpage;
