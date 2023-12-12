"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/clerk-react";
import AdminHeader from "@/components/AdminHeader";
import Logo from "@/components/Logo";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();

  // Render the layout only if the user is loaded and authenticated
  return isLoaded && user ? (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-800 py-6">
        <Logo />
      </div>
      <AdminHeader />
      <UserButton afterSignOutUrl="/" />
      <main className="container mx-auto py-6 px-4">{children}</main>
    </>
  ) : (
    <div>Loading or Not Authenticated</div> // Or any other placeholder for non-authenticated state
  );
}
