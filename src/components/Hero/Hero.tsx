import Image from "next/image";
import React from "react";

const Hero = () => {
   return (
      <section>
         <section className=" container m-auto px-[5%] grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* grid left */}
            <div className="flex flex-col gap-6 justify-center">
               <Image
                  src="/hero/papperSun.svg"
                  alt=""
                  width={185}
                  height={186}
                  className="w-[20%]"
               />
               <div>
                  <div className=" text-black text-5xl md:text-7xl font-normal font-['Space Grotesk']">
                     I create ✍️ top
                     <br />
                     notch websites{" "}
                  </div>
                  <button
                     type="button"
                     className="mt-9  px-2 py-4 w-[50%] md:px-[55px] md:py-[30px] origin-top-left  bg-[#b9e6fe] rounded-[92px] border-4 border-black justify-center items-center gap-2.5 inline-flex"
                  >
                     <div className="text-center text-black text-xl  md:text-3xl font-bold font-['Space Grotesk']">
                        Hire Me
                     </div>
                  </button>
               </div>
            </div>

            {/* grid right */}
            <div className=" flex items-center justify-center relative p-6">
               {/* <Image src="/hero/arrow.svg" alt="" width={300} height={178} /> */}
               <Image
                  src="/hero/frame.svg"
                  alt=""
                  width={512}
                  height={512}
                  className="w-[90%]"
               />
            </div>
         </section>
         <HeroSeparator />
      </section>
   );
};

export default Hero;

const HeroSeparator = () => {
   return (
      <section className="items-center justify-center">
         <div className=" h-[96px] px-[168px] bg-black shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)]   flex-col justify-center items-center gap-2.5 flex overflow-hidden">
            <div className="justify-between items-start md:text-5xl text-xl gap-4 md:gap-[113px] inline-flex">
               <p className="text-white  font-medium font-['Space Grotesk']">
                  Figma
               </p>
               <p className="text-white  font-medium font-['Space Grotesk']">
                  HTML
               </p>
               <p className="text-white  font-medium font-['Space Grotesk']">
                  TypeScript
               </p>
               <p className="text-white  font-medium font-['Space Grotesk']">
                  CSS
               </p>
               <p className="text-white  font-medium font-['Space Grotesk']">
                  C++
               </p>
            </div>
         </div>
      </section>
   );
};
