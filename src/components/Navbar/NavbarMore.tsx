"use client";
import Link from "next/link";
import React, { useState } from "react";
interface NavbarProps {
   // Add any props you need here
}

const Navbar: React.FC<NavbarProps> = () => {
   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <nav className="md:hidden text-black">
         <button onClick={handleToggle} className="z-20">
            <NavbarLogo />
         </button>
         {isOpen && (
            <div className="fixed top-0 left-0 z-10 w-screen h-full bg-[#b1b2a8] flex flex-col item-center justify-start   overflow-hidden font-sans ">
               <div className="h-[96px] p-8 items-center w-full flex justify-end">
                  <div onClick={handleToggle}>
                     <CloseIcon />
                  </div>
               </div>
               <ul className="text-center flex flex-col items-center gap-7 text-4xl">
                  <Link href={"#about"} onClick={handleToggle}>
                     About
                  </Link>
                  <Link href={"#skill"} onClick={handleToggle}>
                     Skill
                  </Link>
                  <Link href={"#porto"} onClick={handleToggle}>
                     Portofolio
                  </Link>
               </ul>
            </div>
         )}
      </nav>
   );
};

export default Navbar;

export const NavbarLogo = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="50"
         height="50"
         viewBox="0 0 50 50"
      >
         <path d="M 2 9 L 2 11 L 48 11 L 48 9 L 2 9 z M 2 24 L 2 26 L 48 26 L 48 24 L 2 24 z M 2 39 L 2 41 L 48 41 L 48 39 L 2 39 z"></path>
      </svg>
   );
};

const CloseIcon = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="50"
         height="50"
         viewBox="0 0 50 50"
      >
         <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
      </svg>
   );
};
