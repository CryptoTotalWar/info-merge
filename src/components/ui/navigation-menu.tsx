"use client";
import React from "react";
import Link from 'next/link';

const NavigationMenu = () => {
  return (
    <nav className="flex space-x-4">
      <Link href="/admin" className="text-sm font-medium hover:underline">
        Admin Home
      </Link>
      <Link href="/create-headline" className="text-sm font-medium hover:underline">
        Create Headline
      </Link>
      <Link href="/edit-headline" className="text-sm font-medium hover:underline">
        Edit Headline
      </Link>
    </nav>
  );
};

export default NavigationMenu;
