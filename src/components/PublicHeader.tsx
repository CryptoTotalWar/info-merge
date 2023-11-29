// src/components/PublicHeader.tsx
"use client";
import React from "react";
import PublicNavigationMenu from "./PublicNavigationMenu";
import Logo from "./Logo"; // Update the import statement

const PublicHeader = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Logo /> {/* Use the Logo component */}
        <PublicNavigationMenu />
      </div>
    </header>
  );
};

export default PublicHeader;
