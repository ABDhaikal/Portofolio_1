import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <section className=" container m-auto h-[calc(100vh-96px)]  max-h-[816px] px-[5%] flex flex-row ">
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
              <div className=" text-black text-[80px] font-normal font-['Space Grotesk']">
                I create ✍️ top
                <br />
                notch websites{" "}
              </div>
              <div className="h-[97px] w-1/2 mt-9 px-[55px] py-[30px] origin-top-left  bg-[#b9e6fe] rounded-[92px] border-8 border-black justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-black text-[200%] font-bold font-['Space Grotesk']">
                  Hire Me
                </div>
              </div>
            </div>
          </div>

          {/* grid right */}
          <div className="flex items-center justify-center">
            {/* <Image src="/hero/arrow.svg" alt="" width={300} height={178} /> */}
            <Image src="/hero/frame.svg" alt="" width={512} height={512} />
          </div>
      </section>
    </section>
  );
};

export default Hero;

const HeroSeparator = () => {
  return (
    <section className="items-center justify-center">
      <div className=" h-[96px] px-[168px] bg-black shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)]   flex-col justify-center items-center gap-2.5 flex overflow-hidden">
        <div className="justify-start items-start gap-[113px] inline-flex">
          <div className="text-white text-5xl font-medium font-['Space Grotesk']">
            Figma
          </div>
          <div className="text-white text-5xl font-medium font-['Space Grotesk']">
            HTML
          </div>
          <div className="text-white text-5xl font-medium font-['Space Grotesk']">
            TypeScript
          </div>
          <div className="text-white text-5xl font-medium font-['Space Grotesk']">
            CSS
          </div>
          <div className="text-white text-5xl font-medium font-['Space Grotesk']">
            C++
          </div>
        </div>
      </div>
    </section>
  );
};

