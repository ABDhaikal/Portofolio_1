import Image from "next/image";
import React from "react";

const Testimonial = () => {
   return (
      <section id="testimony" className="container m-auto items-center flex flex-col relative my-10 px-9 gap-8">
         <div className=" justify-center items-center gap-[47px] inline-flex relative">
            <div>
               <h2 className="text-4xl md:text-6xl font-['Space_Grotesk'] text-black ">
                  Testimony
               </h2>
            </div>
            <div
               data-svg-wrapper
               className="absolute top-[110%] overflow-hidden w-full"
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
         </div>

         <div className="grid md:grid-cols-2  gap-4 p-4  md:w-[80%]">
            <TestimonialCard title="Siti Premium" img="woman1" position="Senior Designer" says="Design is a bridge that connects everyone and everything" />
            <TestimonialCard title="Alex Turbo" img="man1" position="Frontend Developer" says="An incredible team, creating stunning, user-friendly interfaces with precision and creativity." />
            <TestimonialCard title="Subekti SuperLite" img="man2" position="Senior Backend Developer" says="Ensuring seamless operations and robust systems every day with remarkable expertise." />
            <TestimonialCard title="Mamang Racing" img="man3" position="CEO of Subekti Corps" says="Dedicated, innovative, and driving our company's success with passion and commitment." />
         </div>
      </section>
   );
};

export default Testimonial;

interface testiCardProps {
   title: string;
   position: string;
   says: string;
   img: string;
}

export const TestimonialCard: React.FC<testiCardProps> = ({
   title,
   position,
   says,
   img,
}) => {
   return (
      <div key={"testi"} className="p-[5%]  relative text-black bg-white rounded-sm shadow-[12px_12px_0px_0px_rgba(191,191,180,1.00)] border-4 border-black flex-col justify-start items-start space-y-4 ">
         <div className=" w-full flex flex-row relative gap-3">
            <div className="w-1/3 flex items-center justify-center">
            <Image src={`/testi/${img}.png`} alt={img} width={70} height={70} className=" rounded-full object-cover justify-self-center aspect-square "/>

            </div>
            <div className="w-2/3">
               <h3 className="text-black text-xl lg:text-4xl font-medium font-['Space Grotesk']">
                  {title}
               </h3>
               <h4 className="text-sm">{position}</h4>
            </div>
            <Image src={"/testi/testitag.svg"} alt="“" width={50} height={50} className=""/>
         </div>

         <p className="w-full  text-sm md:text-xl font-medium  leading-8">”{says}”</p>
      </div>
   );
};
