"use client";

import React from "react";
import AdminHeader from "@/components/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminHeader />
      <main className="container mx-auto py-6 px-4">{children}</main>
    </>
  );
}
