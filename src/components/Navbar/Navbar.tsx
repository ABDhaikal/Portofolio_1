import React from "react";
import NavbarButton from "./NavbarButton";
import { Content } from "next/font/google";
import NavbarHome from "./NavbarHome";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="items-center justify-center flex gap-x-[-12px] border-black border-b-4  h-[96px] py-8 overflow-hidden ">
        <Image src="/star.svg" alt="" width={151} height={151} className="absolute top-16 left-[-20] hidden md:block" />
        <NavbarHome />
        <NavbarButton content="About Me" clickLink="#about" />
        <NavbarButton content="Skill" clickLink="#about"/>
        <NavbarButton content="Porto  " clickLink="#about"/>
        <Image src="/star.svg" alt="" width={150} height={150} className="absolute top-[0] right-[0] hidden md:block" />
    </div>
  );
};

export default Navbar;
