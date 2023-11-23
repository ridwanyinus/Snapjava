import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaWindows } from "react-icons/fa";
import KeyFeatures from "../component/KeyFeatures";

const Hero = () => {
   return (
      <section className="bg-secondary flex flex-col w-full items-center justify-center px-0">
         <div>
            <div className="flex justify-center items-center">
               <h1 className="text-white max-md:text-4xl text-5xl lg:text-[64px] text-center font-bold capitalize leading-normal lg:leading-[80px] lg:max-w-[747px]">
                  Energize Your Workflow with a Click and a Sip!
               </h1>
            </div>

            <div className="flex items-center justify-center gap-2 lg:gap-8 text-base mt-12 max-xs:flex-col-reverse flex-1 lg:pb-20">
               <button className="button gap-1  px-8 max-xs:mt-2 hero__btn">
                  <AiFillApple size={25} /> Download For Mac
               </button>
               <button className="button gap-1 text-primary   bg-white px-4 hero__btn">
                  <FaWindows size={25} color="#262A2C" /> Download For Windows
               </button>
            </div>

            <div className="padding-y relative w-full h-full">
               <div className="xl:bg-dashboard xl:w-[1035px] lg:h-[593px] flex justify-center items-center  ">
                  <img src="./assets/dashboard.svg" alt="dashboard" className="mb-8" />
               </div>
               <img src="./assets/Group-74.svg" alt="dashboard" className="absolute top-5 right-0 xl:-right-5 max-lg:hidden" />

               <img src="./assets/Group-352-1.svg" alt="dashboard" className="absolute bottom-40 lg:-left-20 xl:-left-12  max-lg:hidden" />
            </div>

            <div>
               <KeyFeatures />
            </div>
         </div>
      </section>
   );
};

export default Hero;
