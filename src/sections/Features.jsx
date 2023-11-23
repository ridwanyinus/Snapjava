import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
const Features = () => {
   return (
      <section className="rounded-[40px] padding bg-white flex flex-col justify-center items-center w-[100%]">
         <h1 className="text-secondary text-center text-3xl leading-[40px] font-semibold">Loved by 10,000+ growing businesses</h1>
         <div className=" grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-3 gap-10 items-center  pt-10 ">
            <img src="./assets/asuna.png" alt="asuna" />
            <img src="./assets/phasekit.svg" alt="phasekit" />
            <img src="./assets/covenant.svg" alt="covenant" />
            <img src="./assets/apollo.svg" alt="apollo" />
            <img src="./assets/natchpay.svg" alt="natchpay" />
            <img src="./assets/tribe.svg" alt="tribe" />
         </div>

         <div className="flex relative gap-20 justify-center items-center h-[100%] padding-t max-md:flex-col">
            <div className="flex flex-col gap-0 h-[100%] relative justify-center items-center max-sm:hidden">
               <img src="./assets/Group-74.svg" alt="dashboard" width={452} height={275} className="" />
               <img src="./assets/Group-352-1.svg" alt="dashboard" width={366} height={249} className="absolute bottom-[148px] -left-16" />
            </div>

            <div className="flex flex-col  flex-wrap">
               <h1 className="text-[#111204] text-4xl xs:text-[42px] leading-[55px] font-semibold tracking-[-1px] ">
                  Solutions for every <br />
                  single problems
               </h1>

               <div className="flex gap-6 py-10 justify-center items-center ">
                  <div className="bg-[#4A2C2A17] rounded-full bg-opacity-[9%] flex items-center justify-center p-5">
                     <FaLayerGroup className="w-[30px] h-[30px]" color="#CC9966" />
                  </div>

                  <div>
                     <h3 className="text-[#111204] text-xl xs:text-2xl font-semibold leading-[150%]">Multiple managers</h3>
                     <p className="text-[#7B7B7B] text-lg xs:text-xl  leading-[120%] pt-3">Manage multiple admins at a time.</p>
                  </div>
               </div>

               <div className="flex items-start">
                  <div className="flex gap-6  justify-center items-start">
                     <div className="bg-[#4A2C2A17] rounded-full bg-opacity-[9%] flex items-start justify-center p-5">
                        <IoDiamond className="w-[30px] h-[30px] items-start" color="#CC9966" />
                     </div>

                     <div>
                        <h3 className="text-[#111204] text-xl xs:text-2xl font-semibold leading-[150%] w-full">Easy to customizations</h3>
                        <p className="text-[#7B7B7B] text-lg xs:text-xl  leading-[120%] pt-3">Very easy interface to customize</p>
                     </div>
                  </div>
               </div>

               <div className="pt-16 flex justify-center items-center">
                  <button className="button px-8 py-3 text-center">
                     Learn More <IoIosArrowForward className="mx-1" width={24} hanging={24} />
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
