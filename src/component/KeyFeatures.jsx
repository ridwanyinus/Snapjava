import React from "react";

const KeyFeatures = () => {
   return (
      <div className="flex lg:gap-28 gap-20 max-md:grid grid-cols-2 justify-center items-center ">
         <div className="flex items-center justify-center flex-col text-center ">
            <div className="bg-white bg-opacity-[9%] rounded-full">
               <img src="./assets/bell.svg" alt="notification_bell" className="p-5" />
            </div>

            <p className=" text-white max-sm:text-lg text-2xl leading-[150%] pt-4">
               Notifications <br />
               System
            </p>
         </div>

         <div className="flex items-center justify-center flex-col text-center ">
            <div className="bg-white bg-opacity-[9%] rounded-full">
               <img src="./assets/extension.svg" alt="extension" className="p-5" />
            </div>

            <p className=" text-white text-2xl leading-[150%] pt-4 max-sm:text-lg ">
               Extension <br />
               Facilities
            </p>
         </div>

         <div className="flex items-center justify-center flex-col text-center ">
            <div className="bg-white bg-opacity-[9%] rounded-full">
               <img src="./assets/quick.svg" alt="quick-Customization" className="p-5 max-sm:text-lg " />
            </div>

            <p className=" text-white text-2xl leading-[150%] pt-4 max-sm:text-lg ">
               Quick <br />
               Customization
            </p>
         </div>

         <div className="flex items-center justify-center flex-col text-center ">
            <div className="bg-white bg-opacity-[9%] rounded-full">
               <img src="./assets/unlimited.svg" alt="unlimited" className="p-5" />
            </div>

            <p className=" text-white text-2xl leading-[150%] pt-4 max-sm:text-lg ">
               Unlimited <br />
               Projects
            </p>
         </div>
      </div>
   );
};

export default KeyFeatures;
