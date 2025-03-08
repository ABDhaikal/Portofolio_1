import React from "react";
import NavbarButton from "./NavbarButton";
import { Content } from "next/font/google";
import NavbarHome from "./NavbarHome";
import Image from "next/image";
import NavbarMore from "./NavbarMore";

const Navbar = () => {
   return (
      <div className="items-center flex  justify-between p-8  md:justify-center  border-black border-b-4  h-[96px] py-8 overflow-hidden  ">
         <Image
            src="/star.svg"
            alt=""
            width={151}
            height={151}
            className="absolute top-[0%] left-[0%] hidden lg:block "
         />
         <NavbarHome />
         <NavbarMore />
         <div className= "hidden  md:flex">
            <NavbarButton content="About Me" clickLink="#about" />
            <NavbarButton content="Skill" clickLink="#skill" />
            <NavbarButton content="Porto  " clickLink="#porto" />
         </div>
         <Image
            src="/star.svg"
            alt=""
            width={150}
            height={150}
            className="absolute top-[0%] right-[0%] hidden lg:block "
         />
      </div>
   );
};

export default Navbar;
