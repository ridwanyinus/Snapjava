import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CTA = () => {
   return (
      <section id="#facilitates" className="bg-brown pt-20  sm:px-10 rounded-t-[40px] justify-center items-center flex flex-col lg:gap-6">
         <h1 className="text-white font-bold max-sm:text-3xl text-4xl lg:text-6xl leading-[133%] max-lg:w-full text-center ">
            Let’s Grow Your Business <br /> With Our Products
         </h1>
         <div className="pt-8 max-lg:mb-12 lg:pb-3">
            <button className="button px-8 py-3 text-center text-secondary bg-white">
               Download Now <IoIosArrowForward size={24} />
            </button>
         </div>
      </section>
   );
};

export default CTA;
