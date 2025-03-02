"use client";

import Image from "next/image";
import React, { useState } from "react";
import PortofolioCard from "./PortoCard";

const Portofolio = () => {
   return (
      <section id="porto" className="container m-auto items-center justify-center flex flex-col relative my-10">
        <div className="justify-center items-center relative">
            <Image src={"/porto/PortoAcent.svg"} alt="Acent" width={112} height={117} className="absolute w-[40%] max-w-[112px] top-[0%] right-[-50%]"/>
            <div data-svg-wrapper className="absolute top-[90%] overflow-hidden w-full">
               <svg
                  width="384"
                  height="15"
                  viewBox="0 0 384 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M381.53 8.90703C305.893 1.05767 228.977 5.39925 153.149 3.98596C103.008 3.04038 52.8636 0.762796 2.75881 0.000228063C1.25659 -0.0201071 0.0211089 1.32197 0.000244788 3.00979C-0.0197122 4.69761 1.18314 6.08044 2.68445 6.10077C52.7838 6.86334 102.923 9.14092 153.059 10.0865C228.75 11.4998 305.521 7.14802 381.022 14.9872C382.519 15.1397 383.844 13.9095 383.989 12.2318C384.125 10.5542 383.018 9.06971 381.53 8.90703Z"
                     fill="black"
                  />
               </svg>
            </div>
            <h2 className="text-black text-4xl md:text-6xl font-medium font-['Space_Grotesk']">
               Portofolio
            </h2>
         </div>
         
         <div className=" grid  lg:grid-cols-2 py-16 px-12 md:px-32 gap-8 md:gap-32  relative  ">
            <PortofolioCard title="TokoOnline" subtitle="Developing Online Store" imgSrc="/porto/TokoOnline.png" description="Lead developer for TokoOnline project, an online store. Task: Create a seamless e-commerce experience. Action: Designed and developed a dynamic product catalog and shopping cart using React, and integrated secure payment systems with Stripe. Result: Enhanced user experience, leading to a 30% increase in sales and customer retention."/>
            <PortofolioCard title="Kampung Maju Jaya" subtitle="Developing Community Platform" imgSrc="/porto/webKampungJaya.png" description="Front-end developer for Kampung Maju Jaya, a community platform. Task: Enhance the user experience and interface. Action: Created intuitive and responsive web interfaces using HTML, CSS, and JavaScript. Collaborated closely with UX/UI designers to ensure user-friendly design. Result: Improved user engagement by 40%, with positive feedback on usability and accessibility."/>
 
         </div>
      </section>
   );
};

export default Portofolio;
