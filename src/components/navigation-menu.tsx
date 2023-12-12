// src/components/NavigationMenu.js
"use client";
import React from "react";
import { UserButton } from "@clerk/clerk-react";
// import Link from "next/link";
// import { Button } from "@/components/button";

const NavigationMenu = () => {
  return (
    <nav className="flex space-x-4">
      <UserButton afterSignOutUrl="/" />

      {/* <Link href="/admin" passHref>
        <Button>Admin Home</Button>
      </Link>
      <Link href="/admin/create-headline" passHref>
        <Button>Create Headline</Button>
      </Link>
      <Link href="/admin/edit-headline" passHref>
        <Button>Edit Headline</Button>
      </Link> */}
    </nav>
  );
};

export default NavigationMenu;
