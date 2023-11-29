// src/components/PublicNavigationMenu.tsx
"use client";
import React from "react";
import Link from "next/link";

const PublicNavigationMenu = () => {
  return (
    <nav className="flex space-x-4">
      <Link href="/admin" className="text-sm font-medium hover:underline">
        Admin
      </Link>
    </nav>
  );
};

export default PublicNavigationMenu;
