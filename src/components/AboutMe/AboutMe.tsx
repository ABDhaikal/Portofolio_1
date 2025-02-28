import React from "react";

const AboutMe = () => {
   return (
      <section className="flex flex-row my-[92px] container m-auto h-[calc(100vh-96px)]  max-h-[916px] bg-green-300 relative">
         <div className="flex-grow-1 relative w-full mx-[10%] items-center justify-evenly flex flex-col">
            <LineVector />
            <div className="w-full flex ">
               <AboutMeCard content="“Passionate about creating innovative solutions in web development”" rotate="2"/>
            </div>
            <div className=" w-full flex justify-end">
               <AboutMeCard  content="“Always learning, growing, and seeking opportunities for growth”" rotate="-3"/>
            </div>
            <div className=" w-full flex">
               <AboutMeCard  content=" “Dedicated to delivering results while staying ahead of trends.”" rotate="2.5"/>
            </div>
            <div className=" w-full flex  justify-end">
               <AboutMeCard  content="“I prioritize timeliness, attention to detail, and clear communication and effective collaboration.”" rotate="2"/>
            </div>
         </div>
      </section>
   );
};

export default AboutMe;


interface RotatingCardProps {
   content: string;
   rotate: string;
}

export const AboutMeCard : React.FC<RotatingCardProps> = ({ content, rotate }) => {
   return (
         <div className={`w-[100%] md:w-[40%] h-[100%] p-[1%] origin-top-left  bg-white rounded-sm shadow-[11.465076446533203px_11.465076446533203px_0px_0px_rgba(191,191,180,1.00)] border-4 border-black flex-col justify-start items-start  inline-flex `} style={{ transform: `rotate(${rotate}deg)` }}>
            <div className=" text-[#181818] text-[27.99px] font-medium font-['Inter'] leading-10">
               {content}
            </div>
         </div>
   );
};

export const LineVector = () => {
   return (
            <svg
               width="138"
               height="956"
               viewBox="0 0 138 956"
               fill="none" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-full "
            >
                  <path
                     d="M66.9995 1C30.6662 74.8961 -17.4855 239.327 66.9995 324.129C221.999 479.71 39.9996 561.204 41.9996 679.172C43.5996 773.546 86.6662 902.38 108 955"
                     stroke="black"
                     strokeWidth="4"
                  />
                  <path
                     d="M38 162.849C38 174.588 29.7033 183.645 20 183.645C10.2967 183.645 2 174.588 2 162.849C2 151.11 10.2967 142.054 20 142.054C29.7033 142.054 38 151.11 38 162.849Z"
                     fill="#FEDC57"
                     stroke="black"
                     strokeWidth="4"
                  />
                  <path
                     d="M136 360.032C136 378.066 123.226 392.226 108 392.226C92.7738 392.226 80 378.066 80 360.032C80 341.999 92.7738 327.839 108 327.839C123.226 327.839 136 341.999 136 360.032Z"
                     fill="#FEDC57"
                     stroke="black"
                     strokeWidth="4"
                  />
                  <path
                     d="M73 607.935C73 618.101 65.8226 625.882 57.5 625.882C49.1774 625.882 42 618.101 42 607.935C42 597.77 49.1774 589.989 57.5 589.989C65.8226 589.989 73 597.77 73 607.935Z"
                     fill="#FEDC57"
                     stroke="black"
                     strokeWidth="4"
                  />
                  <path
                     d="M88 785.742C88 802.202 76.3454 815.086 62.5 815.086C48.6546 815.086 37 802.202 37 785.742C37 769.282 48.6546 756.398 62.5 756.398C76.3454 756.398 88 769.282 88 785.742Z"
                     fill="#FEDC57"
                     stroke="black"
                     strokeWidth="4"
                  />
     
            </svg>
   );
};
