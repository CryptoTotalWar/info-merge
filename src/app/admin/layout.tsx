"use client";

import React from "react";
import AdminHeader from "@/components/AdminHeader";
import Logo from "@/components/Logo"; // Import the Logo component

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-800 py-6">
        <Logo /> {/* Place the Logo component here */}
      </div>
      <AdminHeader />
      <main className="container mx-auto py-6 px-4">{children}</main>
    </>
  );
}
