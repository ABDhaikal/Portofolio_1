import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
   return (
      <footer className="container m-auto h-[360px] flex items-end relative ">
         <div className="absolute top-0 left-1/2 w-[100px] md:w-[150px] aspect-square ">
            <Image src="/star.svg" alt="papperSun" fill />
         </div>
         <div className="flex md:flex-row flex-col items-center justify-around w-full h-[300px] border-t-4 text-black font-['Space Grotesk'] border-black">
            
            <div className="flex flex-col  items-center">
               <Image src="/NavbarIcon/SmileLogo.svg" alt="smile" width={50} height={50}/>
               <p className="text-xl">
                  Haikal Abdurrahman
               </p>
            </div>

            <div className="text-center text-4xl md:text-5xl  gap-3">
               <p>Porotofolio </p> <p>2025</p>
            </div>
            
            <div className="flex gap-3">
               <Link href="https://github.com/ABDhaikal" ><Image src="/footer/github.png" alt="github" width={50} height={50} className="hover:cursor-pointer hover:scale-105"/></Link>
               <Link href="https://mail.google.com/mail/u/0/?fs=1&to=haikalabdurrahman95@gmail.com&su=Contact%20From%20Porto&tf=cm"><Image src="/footer/gmail.png" alt="gmail" width={50} height={50} className="hover:cursor-pointer hover:scale-105"/></Link>
               <Link href="https://www.linkedin.com/in/haikalabdurrahman/"><Image src="/footer/linkedin.png" alt="linkedin" width={50} height={50} className="hover:cursor-pointer hover:scale-105"/></Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;


