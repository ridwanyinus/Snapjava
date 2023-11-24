import React from "react";
import { LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { footerLinks } from "../constants";
const Footer = () => {
   return (
      <footer className="text-white flex flex-col ">
         <div className="flex justify-around max-lg:gap-0 items-start gap-20 max-sm:flex-col max-sm:pt-8">
            <div className=" flex flex-col max-md:pb-6">
               <img src="./assets/Logo.svg" alt="logo" className="w-[164px]" />

               <p className="flex  items-center gap-2 py-8 opacity-[60%] hover:opacity-100">
                  <LuMail /> hello@ridwanyinusa15@email.com
               </p>
               <p className="flex  items-center gap-2 opacity-[60%] hover:opacity-100">
                  <IoCallOutline /> +(234) 81 663 197 47
               </p>
            </div>

            <div className="flex lg:gap-40 max-md:flex-col max-lg:gap-10">
               {footerLinks.map((items) => (
                  <div key={items.links} className="max-lg:gap-10">
                     <p className="font-semibold text-[24px] leading-[165%] pb-4 pt-4">{items.title}</p>
                     {items.links.map((link) => (
                        <ul className="opacity-[60%] font-medium text-lg leading-[165%] hover:opacity-100 " key={link.name}>
                           <li className="py-1">
                              <a href={link.link}>{link.name}</a>
                           </li>
                        </ul>
                     ))}
                  </div>
               ))}
            </div>
         </div>
         <div className="bg-white opacity-[56%] h-[0.5px] w-full mt-20"></div>
         <p className="text-center opacity-[60%] text-lg leading-[24px] py-10 ">© 2023 Copyright By Ideapeel Inc. All Rights Reserved.</p>
      </footer>
   );
};

export default Footer;
