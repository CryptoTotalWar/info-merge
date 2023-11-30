// src/components/PublicHeader.tsx
"use client";
import React from "react";
import PublicNavigationMenu from "./PublicNavigationMenu";
import Logo from "./Logo"; // Update the import statement

const PublicHeader = () => {
  return (
    <header className="text-white py-4 px-6 mb-4 ">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="self-end mt-2 space-x-4">
          <PublicNavigationMenu />
        </nav>
        <Logo />
      </div>
    </header>
  );
};

export default PublicHeader;
