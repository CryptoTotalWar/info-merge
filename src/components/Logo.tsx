// src/components/Logo.tsx
"use client";
import React from "react";
import Link from "next/link";

const Logo = () => {
  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <h1
      onClick={handleClick}
      className="transform skew-x-12 shadow-inner text-4xl py-2 px-10 font-semibold drop-shadow-2x1 italic tracking-wider bg-slate-900 opacity-90 text-shadow-lg shadow-slate-900 hover:text-slate-900"
    >
      INFO-MERGE
    </h1>
  );
};

export default Logo;
