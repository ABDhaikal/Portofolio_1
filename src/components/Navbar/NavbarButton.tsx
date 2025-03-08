import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

interface contentBox {
   content: string;
   clickLink: Url;
}

const NavbarButton = ({ content, clickLink }: contentBox) => {
   return (
      <Link
         href={clickLink}
         target="_self"
         className="group  h-[78px] px-8 bg-white border-2 border-black justify-center items-center  flex  container w-fit m-1 hover:scale-105 font-sans"
      >
         <div className="w-[150px] h-[31px] relative ">
            <div className="w-[86px] h-2.5 left-[46px] top-[19px] absolute bg-[#ffdc58] hidden group-hover:block" />
            <div className="w-[150px] left-0 top-0 absolute text-center text-[#0c0c0c] text-2xl font-normal font-sans">
               {content}
            </div>
         </div>
      </Link>
   );
};

export default NavbarButton;
