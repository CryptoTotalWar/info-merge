// src/components/Logo.tsx
"use client";
import React from "react";

const Logo = ({ onClick }: { onClick: () => void }) => {
  return (
    <h1
      onClick={onClick}
      className="transform skew-x-12 shadow-inner text-3xl py-2 px-10 font-semibold drop-shadow-2x1 italic tracking-wider bg-slate-600 opacity-90 text-shadow-lg shadow-slate-900 hover:text-slate-900"
    >
      INFO-MERGE
    </h1>
  );
};

export default Logo;
