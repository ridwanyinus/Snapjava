import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Features2 = () => {
   return (
      <section className="bg-secondary flex max-lg:flex-col justify-start items-center gap-10 xl:gap-20 lg:padding-t ">
         <div className="flex flex-col items-start ">
            <h2 className="text-white leading-normal xs:leading-[55px] font-semibold text-3xl xs:text-[42px] pb-6">
               Real Time <br /> Transaction Report
            </h2>
            <p className="text-white text-xl leading-[35px] sm:w-[474px]">
               Everyone must work, but for many of us that job isn’t just a paycheck, it’s an opportunity to express ourselves and make something better.
            </p>
            <div className="pt-8 max-lg:mb-12">
               <button className="button px-8 py-3 text-center">
                  Learn More <IoIosArrowForward className=" w-[24px] h-[24px]" />
               </button>
            </div>
         </div>

         <div className="flex-0.5 flex flex-col    h-[100%] relative justify-center items-center max-sm:w-[80%] max-lg:mt-16">
            <img src="./assets/Feature-stat1.svg" alt="feature-stat" className="lg:w-[443px] lg:h-[392px] max-xl:max-w-[80%]" />
            <img src="./assets/Feature-stat.svg" alt="feature-stat" className="absolute max-lg:-top-[108px] lg:-top-[108px] xl:-right-[99px] -right-[60px]  max-xl:max-w-[80%]  object-contain " />
         </div>
      </section>
   );
};

export default Features2;
