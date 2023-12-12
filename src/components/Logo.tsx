"use client";
import React from "react";
import { FaCopyright } from "react-icons/fa";

const Logo = () => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center cursor-pointer transform skew-x-12 shadow-inner bg-slate-900 opacity-90 text-shadow-lg shadow-slate-900 hover:text-slate-900 px-12 py-2"
    >
      <h1 className="text-4xl font-semibold drop-shadow-2x1 italic tracking-wider">
        INFO-MERGE
      </h1>
      <div className="pl-2 absolute bottom-3 right-5">
        <FaCopyright size={16} />
      </div>
    </div>
  );
};

export default Logo;
