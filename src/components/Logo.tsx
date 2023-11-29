// src/components/Logo.tsx
"use client";
import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-3xl font-semibold italic tracking-wider text-shadow-lg hover:text-blue-500">
        INFOMERGE
      </h1>
    </Link>
  );
};

export default Logo;
