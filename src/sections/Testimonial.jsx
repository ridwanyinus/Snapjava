import React from "react";

const Testimonial = () => {
   return (
      <section id="#testimonial" className="rounded-[40px] padding bg-white flex flex-col justify-center items-center w-[100%] ">
         <h1 className="text-primary text-center font-semibold leading-[166%] max-sm:text-4xl text-5xl tracking-[-0.88px] pb-20 ">
            Trusted by Amazing Customers <br /> Around The World
         </h1>

         <div className="flex gap-8 lg:gap-12 justify-center items-center max-lg:flex-col">
            <div className="justify-center items-center flex">
               <img src="./assets/customer.png" alt="customer" className="max-xs:w-[80%] flex items-center justify-center" />
            </div>

            <div className="max-sm:px-4">
               <h3 className="text-primary max-xs:text-2xl text-[32px] leading-[125%] font-semibold pb-2">Samuel Chadwick</h3>
               <p className="text-primary opacity-[80%] max-xs:text-base text-lg leading-[24px] "> CEO of Inductur Inc</p>
               <h2 className="text-primary text-4xl font-semibold leading-[50px] tracking-[-0.36px] max-w-[604px] pt-8 lg:pt-12 max-xs:text-2xl">
                  “Now, i can track my business activity with easier and have a great understandable to operate the products with SnapJava!”
               </h2>
               <div className="pt-6 lg:pt-16 flex gap-2 ">
                  <div className="max-xs:w-[100px] w-[134px] h-[7px] bg-brown rounded-[49px]"></div>
                  <div className="max-xs:w-[60px] w-[74px] h-[7px] bg-[#CFCFCF] rounded-[49px]"></div>
                  <div className="max-xs:w-[60px] w-[74px] h-[7px] bg-[#CFCFCF] rounded-[49px]"></div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonial;
