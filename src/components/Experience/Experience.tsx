import Image from "next/image";
import React from "react";

const Experience = () => {
   return (
      <section id="experience" className="container m-auto    items-center justify-center flex flex-col my-10 px-[20px] relative overflow-hidden gap-8 ">
         <Image
            src={"/exp/exp1.svg"}
            alt="exp1"
            width={194}
            height={206}
            className="absolute left-0 top-[50%] w-[20%] max-w-[194px]"
         />
         <Image
            src={"/exp/exp2.svg"}
            alt="exp2"
            width={112}
            height={117}
            className="absolute right-0 top-[20%] w-[15%] max-w-[112px]"
         />

         <div className="h-[20%] justify-center items-center gap-[47px] inline-flex relative">
            <div
               data-svg-wrapper
               className="absolute top-[90%] w-full overflow-hidden"
            >
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
            <h2 className="text-4xl md:text-6xl font-['Space_Grotesk'] text-black ">
               <span className="font-bold ">
                  Exp
               </span>
               <span className=" font-medium">
                  erience
               </span>
            </h2>
         </div>

         <div className="w-[80%] md:w-[60%] gap-5   p-5  bg-white shadow-[12px_12px_4px_0px_rgba(191,191,180,1.00)] border-4 border-black flex flex-col justify-center items-center relative ">
            <div className="h-min  w-full justify-start items-center gap-[5%]relative grid grid-cols-5">
               <div className="    md:h-full md:w-full flex  justify-center items-center  ">
                  <div className="h-3/4 w-3/4 flex items-center justify-center text-center text-black  bg-[#ff6258] rounded border-2 border-[#0e0e0d] md:text-3xl font-normal font-['Handlee']">
                     1
                  </div>
               </div>

               <div className="h-full col-span-4 flex-col justify-start gap-[3.07px] items-center  ">
                  <div className="text-black text-2xl md:text-4xl  font-['Space_Grotesk']">
                     <span className="font-normal ">Design intern at </span>
                     <span className="font-bold ">Gogle</span>
                  </div>

                  <div className="text-black text-xl md:text-2xl font-normal font-['Space_Grotesk']">
                     Worked on design system at Material designs
                  </div>
                  <div className="text-[#706e6e] text-xs md:text-xs font-medium font-['Space_Grotesk'] leading-none">
                     20, April 2021
                  </div>
               </div>
            </div>

            <div className="h-min  w-full justify-start items-center gap-[5%]relative grid grid-cols-5">
               <div className="    md:h-full md:w-full flex  justify-center items-center  ">
                  <div className="h-3/4 w-3/4 flex items-center justify-center text-center text-black  bg-[#fedc57] rounded border-2 border-[#0e0e0d] md:text-3xl font-normal font-['Handlee']">
                     2
                  </div>
               </div>

               <div className="h-full col-span-4 flex-col justify-start gap-[3.07px] items-center  ">
                  <div className="text-black text-2xl md:text-4xl  font-['Space_Grotesk']">
                     <span className="font-normal ">Frontend at </span>
                     <span className="font-bold ">Mikroskop</span>
                  </div>

                  <div className="text-black text-xl md:text-2xl font-normal font-['Space_Grotesk']">
                     Worked on design system at Material designs
                  </div>
                  <div className="text-[#706e6e] text-xs md:text-xs font-medium font-['Space_Grotesk'] leading-none">
                     20, April 2021
                  </div>
               </div>
            </div>

            <div className="h-min  w-full justify-start items-center gap-[5%]relative grid grid-cols-5">
               <div className="    md:h-full md:w-full flex  justify-center items-center  ">
                  <div className="h-3/4 w-3/4 flex items-center justify-center text-center text-black  bg-[#c5a1ff] rounded border-2 border-[#0e0e0d] md:text-3xl font-normal font-['Handlee']">
                     3
                  </div>
               </div>

               <div className="h-full col-span-4 flex-col justify-start gap-[3.07px] items-center  ">
                  <div className="text-black text-2xl md:text-4xl  font-['Space_Grotesk']">
                     <span className="font-normal ">Backend at </span>
                     <span className="font-bold ">Gooogle</span>
                  </div>

                  <div className="text-black text-xl md:text-2xl font-normal font-['Space_Grotesk']">
                     Worked on design system at Material designs
                  </div>
                  <div className="text-[#706e6e] text-xs md:text-xs font-medium font-['Space_Grotesk'] leading-none">
                     20, April 2021
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
