import React from "react";

const Button = ({ label }) => {
   return (
      <button className={`${backgroundColor ? `${backgroundColor} ${textColor}` : "text-white"}   border-none outline-none cursor-pointer  flex justify-center items-center`}>
         {label}

      </button>
    
   );
};

export default Button;
