// src/components/PublicHeader.tsx
"use client";
import React from "react";
import PublicNavigationMenu from "./PublicNavigationMenu";

const PublicHeader = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">InfoMerge</h1>
        <PublicNavigationMenu />
      </div>
    </header>
  );
};

export default PublicHeader;
