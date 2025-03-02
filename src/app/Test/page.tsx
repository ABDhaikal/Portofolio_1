import AboutMe from "@/components/AboutMe/AboutMe";
import EndCard from "@/components/EndCard/EndCard";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Portofolio from "@/components/Portofolio/Portofolio";
import Skill from "@/components/Skill/Skill";
import Testimonial from "@/components/Testimonial/Testimonial";
import React from "react";

const Testpage = () => {
   return (
      <div>
         <div className="h-[200px] w-full container m-auto bg-slate-400"></div>
         {/* <Navbar /> */}
         {/* <Hero /> */}
         {/* <Skill /> */}
         <Portofolio />
         <div className="flex justify-center items-center h-screen bg-gray-100">
      
 
    </div>
         {/* <AboutMe /> */}
         {/* <Experience /> */}
         {/* <Testimonial /> */}
         <div className="h-[200px] w-full container m-auto bg-slate-300"></div>
      </div>
   );
};

export default Testpage;
