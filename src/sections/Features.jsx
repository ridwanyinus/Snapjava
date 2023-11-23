import React from "react";
const Features = () => {
   return (
      <section className="rounded-[40px] padding bg-white flex flex-col justify-center items-center">
         <h1 className="text-secondary text-center text-3xl leading-[40px] font-semibold">Loved by 10,000+ growing businesses</h1>
         <div className=" grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-3 gap-10 items-center  pt-10 padding-b">
            <img src="./assets/asuna.png" alt="asuna" />
            <img src="./assets/phasekit.svg" alt="phasekit" />
            <img src="./assets/covenant.svg" alt="covenant" />
            <img src="./assets/apollo.svg" alt="apollo" />
            <img src="./assets/natchpay.svg" alt="natchpay" />
            <img src="./assets/tribe.svg" alt="tribe" />
         </div>

         <div>
            <img src="./assets/Group-74.svg" alt="dashboard" className="absolute " />

            <img src="./assets/Group-352-1.svg" alt="dashboard" className="absolute" />
         </div>
      </section>
   );
};

export default Features;
