import React from "react";

const Experience = () => {
   return (
      <section className="container m-auto h-[50vh] md:h-[70vh] max-h-[816px] relative  items-center justify-center flex py-[5%]">
         <div className="w-[80%] md:w-[60%]   p-[5%]  bg-white shadow-[12px_12px_4px_0px_rgba(191,191,180,1.00)] border-4 border-black flex flex-col justify-center items-center  ">
            <div className="h-[100%] justify-center mb-[10%] items-center  inline-flex text-black text-4xl md:text-[64px]  font-['Space_Grotesk']">
               <span className=" font-bold">Exp</span>
               <span className="font-medium">erience</span>
            </div>

            <div>
               <div className="h-min  w-full justify-start items-center gap-[5%]relative grid grid-cols-5">
                  <div className="    md:h-full md:w-full flex  justify-center items-center  ">
                     <div className="h-3/4 w-3/4 flex items-center justify-center text-center text-black  bg-[#ff6258] rounded border-2 border-[#0e0e0d] md:text-3xl font-normal font-['Handlee']">
                        1
                     </div>
                  </div>

                  <div className="h-full col-span-4 flex-col justify-start gap-[3.07px] items-center  ">
                     <div className="text-black text-xl md:text-4xl  font-['Space_Grotesk']">
                        <span className="font-normal ">Design intern at </span>
                        <span className="font-bold ">Google</span>
                     </div>

                     <div className="text-black text-sm md:text-2xl font-normal font-['Space_Grotesk']">
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
                     <div className="text-black text-xl md:text-4xl  font-['Space_Grotesk']">
                        <span className="font-normal ">Design intern at </span>
                        <span className="font-bold ">Mikroskop</span>
                     </div>

                     <div className="text-black text-sm md:text-2xl font-normal font-['Space_Grotesk']">
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
                     <div className="text-black text-xl md:text-4xl  font-['Space_Grotesk']">
                        <span className="font-normal ">Design intern at </span>
                        <span className="font-bold ">Google</span>
                     </div>

                     <div className="text-black text-sm md:text-2xl font-normal font-['Space_Grotesk']">
                        Worked on design system at Material designs
                     </div>
                     <div className="text-[#706e6e] text-xs md:text-xs font-medium font-['Space_Grotesk'] leading-none">
                        20, April 2021
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
