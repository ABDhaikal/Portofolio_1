import React from "react";

const Experience = () => {
  return (
    <section className="container m-auto h-[90vh] max-h-[816px] relative bg-yellow-200 items-center justify-center flex">
      <div className="w-full h-[80%] m-[10%] px-[15%]  bg-white shadow-[12px_12px_4px_0px_rgba(191,191,180,1.00)] border-4 border-black flex-col justify-start items-center gap-2.5 inline-flex">
     
     
        <div className="h-1/4 justify-center items-center gap-[47px] inline-flex">
          <div>
            <span className="text-black text-[64px] font-bold font-['Space_Grotesk']">
              Exp
            </span>
            <span className="text-black text-[64px] font-medium font-['Space_Grotesk']">
              erience
            </span>
          </div>
        </div>

        <div className="h-1/4 w-full justify-start items-center gap-[15px] inline-flex relative">
          
          <div className="w-1/5 h-full  bg-[#ff6258] rounded border-2 border-[#0e0e0d] flex-col justify-center items-center gap-[6.37px] inline-flex overflow-hidden">
            <div className="text-center text-black text-3xl font-normal font-['Handlee']">
              1
            </div>
          </div>

          <div className="h-[100.15px] w-full flex-col justify-start gap-[3.07px] bg-black">
            <div>
              <span className="text-black text-4xl font-normal font-['Space_Grotesk']">
                Design intern at{" "}
              </span>
              <span className="text-black text-4xl font-bold font-['Space_Grotesk']">
                Google
              </span>
            </div>
            <div className="text-black text-2xl font-normal font-['Space_Grotesk']">
              Worked on design system at Material designs
            </div>
            <div className="text-[#706e6e] text-xs font-medium font-['Space_Grotesk'] leading-none">
              20, April 2021
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Experience;
