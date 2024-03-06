import React from "react";
import logo from "../assets/logo.png";
function Logo({ width = "100px" }) {
  return (
    <div className="relative mt-1">
      <span className="text-2xl font-extrabold text-yellow-400 font-serif italic">BlogVerse</span>
    </div>
  );
}

export default Logo;
