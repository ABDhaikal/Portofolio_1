import React from "react";

const AboutMe = () => {
   return (
      <section id="about" className="flex flex-col items-center  container m-auto  my-10 relative">
         <div className="h-[20%] justify-center items-center gap-[47px] inline-flex relative">
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
            <h2 className="text-4xl md:text-6xl font-['Space_Grotesk']">
               <span className="text-black font-medium ">
                  About{" "}
               </span>
               <span className="text-black  font-bold ">
                  Me
               </span>
            </h2>
         </div>

         <div className="gap-[36px] relative w-full py-[10%] px-[10%] items-center justify-evenly flex flex-col">
            <LineVector />
            <div className="w-full flex ">
               <AboutMeCard
                  content="“As Bachelor of Science in Information Technology, I am passionate about creating innovative solutions in web development”"
                  rotate="2"
               />
            </div>
            <div className=" w-full flex justify-end">
               <AboutMeCard
                  content="“Always learning, growing, and seeking opportunities for growth”"
                  rotate="-3"
               />
            </div>
            <div className=" w-full flex">
               <AboutMeCard
                  content=" “Dedicated to delivering results while staying ahead of trends.”"
                  rotate="2.5"
               />
            </div>
            <div className=" w-full flex  justify-end">
               <AboutMeCard
                  content="“I prioritize timeliness, attention to detail, and clear communication and effective collaboration.”"
                  rotate="2"
               />
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

export const AboutMeCard: React.FC<RotatingCardProps> = ({
   content,
   rotate,
}) => {
   return (
      <div
         className={`w-[100%] lg:w-[40%] h-[100%] p-[1%] origin-top-left  bg-white rounded-sm shadow-[11.465076446533203px_11.465076446533203px_0px_0px_rgba(191,191,180,1.00)] border-4 border-black flex-col justify-start items-start  inline-flex `}
         style={{ transform: `rotate(${rotate}deg)` }}
      >
         <div className=" text-[#181818] text-xl md:text-2xl font-medium font-['Inter'] leading-10">
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
         fill="none"
         className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-full "
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
