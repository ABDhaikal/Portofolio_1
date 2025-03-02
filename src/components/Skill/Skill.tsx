import { Hedvig_Letters_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const Skill = () => {
   return (
      // header
      <section className="container m-auto my-[24px]   md:max-h-[816px] relative flex flex-col px-8">
         <SkillHead />
         <SkillBody />
      </section>
   );
};

export default Skill;

// header

export const SkillHead = () => {
   return (
      <section className="h-[20%] md:my-6">
         <div className="justify-start items-center gap-[48px] inline-flex my-[16px]  ">
            <div className=" flex-col justify-between items-center inline-flex">
               <div className="self-stretch">
                  <span className="text-black text-4xl font-bold font-['Space Grotesk']">
                     Skill
                  </span>
                  <span className="text-black text-4xl font-medium font-['Space Grotesk']">
                     {" "}
                     we’re{" "}
                  </span>
               </div>
               <div className="self-stretch text-right text-black text-4xl font-bold font-['Space Grotesk']">
                  provide
               </div>
            </div>
            <div data-svg-wrapper className="relative">
               <svg
                  className="viewbox"
                  width="74"
                  height="70"
                  viewBox="0 0 73 70"
               >
                  <path
                     d="M38.6181 9.26942C36.8542 12.0849 39.3811 20.1529 42.9486 23.1258C45.6852 25.3491 47.71 24.3295 48.2431 20.4262C48.8556 16.312 45.841 10.4717 42.4096 9.00381C39.795 7.8565 39.4802 7.91438 38.6181 9.26942Z"
                     fill="black"
                  />
                  <path
                     d="M15.0585 11.142C13.2947 13.9574 15.8215 22.0255 19.389 24.9984C22.1256 27.2217 24.1504 26.2021 24.6835 22.2987C25.296 18.1846 22.2814 12.3443 18.8501 10.8764C16.2354 9.72906 15.9206 9.78693 15.0585 11.142Z"
                     fill="black"
                  />
                  <path
                     d="M5.08328 34.0269C5.80646 38.4839 14.0815 46.6915 21.4377 50.1839C23.7064 51.3164 27.6199 52.1268 31.0796 52.2753C36.5131 52.4727 37.2844 52.2917 44.3031 49.0592C51.0382 45.9574 52.0789 45.2168 55.3089 41.4649C59.4237 36.6087 63.354 26.1765 62.1062 23.2674C61.0144 20.7221 59.4292 21.9747 56.2531 28.2275C52.7367 35.0725 50.7772 37.6297 46.6851 40.5594C42.7745 43.3184 35.4609 45.4674 30.8612 45.2343C25.3965 44.9641 15.1222 39.419 9.53555 33.7182C6.69117 30.8478 4.60683 30.9368 5.08328 34.0269Z"
                     fill="agree"
                  />
               </svg>
            </div>
         </div>
      </section>
   );
};



export const SkillBody = () => {
   return (
      <section className="h-full flex flex-col md:flex-row md:pl-[8%] text-black font-medium font-['Space Grotesk'] relative">
         {/* Project and dexcription */}
         <div className=" min-h-[20%] min-w-[20%] flex flex-col  relative">
            <div className="border-4 md:border-l-0  border-black relative p-[8%] item-center flex flex-col  ">
               <p className="text-4xl">2</p>
               <p className="text-2xl">Project</p>
            </div>
            <div className="border-4 border-t-0 md:border-l-0 border-black grow relative p-[8%] item-center flex flex-col">
               <p className="text-4xl">My Skill</p>
               <p className="text-2xl">
                  can provide your dream into the future
               </p>
            </div>
         </div>
         <div className="grid md:grid-cols-2 relative  min-w-[80%] min-h-[80%] grow">
            {/* UIUX  */}
            <div className="border-4 border-black border-t-0 md:border-l-0 md:border-t-4 flex flex-col relative">
               <div className="w-full py-[2%] p-3 gap-3 flex flex-col">
                  {" "}
                  <Image
                     src={"/Skill/UIUX.svg"}
                     alt=""
                     width={50}
                     height={50}
                     className="md:w-[70px] w-[50px] aspect-squares"
                  />
                  <h3 className="text-black text-2xl md:text-4xl font-bold font-['Space Grotesk']">
                     UI/UX
                  </h3>
                  <p className="text-xl md:text-2xl">
                     Services we’re providing that derive 99% result
                  </p>
               </div>

               <div className="grow border-t-2 border-black p-3 flex">
                  <Image
                     src={"/Skill/figma.svg"}
                     alt=""
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />
                  <Image
                     src={"/Skill/framer.svg"}
                     alt=""
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />
               </div>
            </div>

            {/* frontend */}
            <div className="border-4 border-black flex flex-col border-t-0 md:border-l-0 md:border-t-4 relative">
               <div className="w-full py-[2%] p-3 gap-3 flex flex-col">
                  {" "}
                  <Image
                     src={"/Skill/FRONTEND.svg"}
                     alt=""
                     width={50}
                     height={50}
                     className="md:w-[70px] w-[50px] aspect-squares"
                  />
                  <h3 className="text-black text-2xl md:text-4xl font-bold font-['Space Grotesk']">
                     Frontend
                  </h3>
                  <p className="text-xl md:text-2xl">
                     Services we’re providing that derive 99% result
                  </p>
               </div>

               <div className="grow border-t-2 border-black p-3 flex">
                  <Image
                     src={"/Skill/Html.svg"}
                     alt="Html"
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />
                  <Image
                     src={"/Skill/Css.svg"}
                     alt="Css"
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />
                                    <Image
                     src={"/Skill/react.svg"}
                     alt="react"
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />
                  <Image
                     src={"/Skill/Typescript.svg"}
                     alt="Typescript"
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />

               </div>
            </div>

            {/* Backend  */}
            <div className="border-4 border-black border-t-0 flex flex-col md:border-l-0 relative">
               <div className="w-full py-[2%] p-3 gap-3 flex flex-col">
                  {" "}
                  <Image
                     src={"/Skill/BACKEND.svg"}
                     alt="Backend"
                     width={50}
                     height={50}
                     className="md:w-[70px] w-[50px] aspect-squares"
                  />
                  <h3 className="text-black text-2xl md:text-4xl font-bold font-['Space Grotesk']">
                  Backend
                  </h3>
                  <p className="text-xl md:text-2xl">
                     Services we’re providing that derive 99% result
                  </p>
               </div>

               <div className="grow border-t-2 border-black p-3 flex">
                  <Image
                     src={"/Skill/Django.svg"}
                     alt="Django"
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />
                  <Image
                     src={"/Skill/NodeJs.svg"}
                     alt="NodeJs"
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />
               </div>
            </div>

{/* DevOps */}
            <div className="border-4 border-black border-t-0 md:border-l-0 flex flex-col relative">
               <div className="w-full py-[2%] p-3 gap-3 flex flex-col">
                  {" "}
                  <Image
                     src={"/Skill/DEVOPS.svg"}
                     alt="DEVOPS"
                     width={50}
                     height={50}
                     className="md:w-[70px] w-[50px] aspect-squares"
                  />
                  <h3 className="text-black text-2xl md:text-4xl font-bold font-['Space Grotesk']">
                  DevOps & Tools
                  </h3>
                  <p className="text-xl md:text-2xl">
                     Services we’re providing that derive 99% result
                  </p>
               </div>

               <div className="grow border-t-2 border-black p-3 flex">
                  <Image
                     src={"/Skill/Git.svg"}
                     alt="Git"
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />
                  <Image
                     src={"/Skill/docker.svg"}
                     alt="docker"
                     width={50}
                     height={50}
                     className="md:w-[50px] w-[30px] aspect-squares"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
