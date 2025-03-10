import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
   return (
      <section>
         <section className=" container m-auto px-[5%] grid grid-cols-1 md:grid-cols-2 gap-4 my-8 ">
            {/* grid left */}
            <div className="flex flex-col gap-6 justify-center ">
               <Image
                  src="/hero/papperSun.svg"
                  alt=""
                  width={185}
                  height={186}
                  className="w-[20%] transition hover:animate-ping"
               />
               <div>
                  <div className=" text-black text-5xl md:text-7xl font-normal font-['Space Grotesk']">
                     Haikal Abdurrahman
                  </div>
                  <div className=" text-gray-800   text-xl md:text-3xl font-normal font-['Space Grotesk']">
                     WEB DEVELOPER
                  </div>

                  <div className=" text-black text-2xl md:text-4xl font-normal font-['Space Grotesk']">
                     I create ✍️ top notch websites{" "}
                  </div>
                  <Link
                     href={"https://wa.me/6285161615695"}
                     target="_blank"
                     type="button"
                     className="mt-9  px-2 py-4 w-fit md:px-[55px] md:py-[30px] origin-top-left  bg-[#b9e6fe] rounded-3xl md:rounded-[92px] border-4 border-black justify-center items-center gap-2.5 inline-flex 
                     hover:bg-[#fbdb4b] hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  "
                  >
                     <p className="text-center  text-black text-xl  md:text-3xl font-bold font-['Space Grotesk'] ">
                        Hire Me
                     </p>
                  </Link>
               </div>
            </div>

            {/* grid right */}
            <div className=" flex flex-col items-center justify-center relative p-6 min-h-[400px] text-black">
               <div className=" aspect-square relative w-[90%]">
                  <Image src="/hero/frame.svg" alt="" fill />
               </div>
               <Image
                  src="/hero/arrow.png"
                  alt="Haikal Abdurrahman"
                  width={200}
                  height={200}
                  className="absolute top-0 left-0  "
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
      <section className="container m-auto h-[96px]  bg-black shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
         <div className="  relative h-full w-full ">
            <div className="flex justify-evenly items-center md:text-5xl text-xl w-full  h-full text-white font-medium font-['Space Grotesk']">
               <p>Figma</p>
               <p>HTML</p>
               <p>TypeScript</p>
               <p>CSS</p>
               <p>C++</p>
            </div>
         </div>
      </section>
   );
};
