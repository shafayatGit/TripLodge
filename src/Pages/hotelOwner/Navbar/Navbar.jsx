import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      <Link to={"/"} className="cursor-pointer flex items-center gap-2">
        <img src={"favicon.svg"} alt="logo" className={`h-9 `} />
        <span
          className={`text-white font-playfair font-bold text-4xl`}
        >
          TripLodge
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
