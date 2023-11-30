// src/components/PublicHeader.tsx
"use client";
import React from "react";
import PublicNavigationMenu from "./PublicNavigationMenu";
import Logo from "./Logo";

const PublicHeader = () => {
  return (
    <header className="text-white py-4 mb-20">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <PublicNavigationMenu />
      </div>
    </header>
  );
};

export default PublicHeader;
