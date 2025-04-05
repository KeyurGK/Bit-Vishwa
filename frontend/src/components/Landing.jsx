import React from "react";
import bitVishwa from "../assets/bitVishwaLogo.png"
import { Navigate, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center mt-[10%]">
      <div className="text-emerald-500 text-center">
        <h1 className="text-5xl font-rowdies">Welcome to Bit-Vishwa</h1>
        <p>View the top cryptocurrencies with the latest data</p>
        <div className="flex justify-center items-center">
          <img
            className="h-[150px] rounded-full"
            src={bitVishwa}
            alt="Bit-Vishwa Logo"
          />
        </div>
        <p className="cursor-pointer" onClick={navigate("/login")}>Sign In to continue</p>
      </div>
    </div>
  );
};

export default Landing;
