// src/components/PublicNavigationMenu.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PublicNavigationMenu = () => {
  return (
    <nav className="flex space-x-4 opacity-80">
      <Link href="http://localhost:5555" passHref>
        <Button>Add New Headlines</Button>
      </Link>
    </nav>
  );
};

export default PublicNavigationMenu;
