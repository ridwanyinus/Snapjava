import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaWindows } from "react-icons/fa";

const Hero = () => {
   return (
      <section className="bg-secondary flex flex-col w-full items-center justify-center">
         <div>
            <h1 className="text-white max-md:text-4xl text-5xl lg:text-[64px] text-center font-bold capitalize leading-normal lg:leading-[80px] lg:max-w-[747px]">
               Energize Your Workflow with a Click and a Sip!
            </h1>

            <div className="flex items-center justify-center gap-2 lg:gap-8 text-base mt-12 max-xs:flex-col-reverse">
               <button className="button gap-1  px-8 max-xs:mt-2 hero__btn">
                  <AiFillApple size={25} /> Download For Mac
               </button>{" "}
               <button className="button gap-1 text-primary   bg-white px-4 hero__btn">
                  <FaWindows size={25} color="#262A2C" /> Download For Windows
               </button>
            </div>
         </div>
      </section>
   );
};

export default Hero;
