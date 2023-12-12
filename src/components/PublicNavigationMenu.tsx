// src/components/PublicNavigationMenu.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/button";

const PublicNavigationMenu = () => {
  return (
    <nav className="flex space-x-4 opacity-80">
      <Link href="/admin" passHref>
        <Button>Admin Login</Button>
      </Link>
    </nav>
  );
};

export default PublicNavigationMenu;
