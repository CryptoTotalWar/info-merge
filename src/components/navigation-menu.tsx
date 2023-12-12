// src/components/NavigationMenu.js
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/button";

const NavigationMenu = () => {
  return (
    <nav className="flex space-x-4">
      {/* @ts-ignore */}
      <Link href="/admin" passHref>
        <Button>Admin Home</Button>
      </Link>
      {/* @ts-ignore */}
      <Link href="/admin/create-headline" passHref>
        <Button>Create Headline</Button>
      </Link>
      {/* @ts-ignore */}
      <Link href="/admin/edit-headline" passHref>
        <Button>Edit Headline</Button>
      </Link>
    </nav>
  );
};

export default NavigationMenu;
