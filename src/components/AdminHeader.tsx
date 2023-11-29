"use client";
import React, { useEffect, useState } from "react";
import NavigationMenu from "./navigation-menu";
import { useRouter, usePathname } from "next/navigation";
const AdminHeader = () => {
  const [headerName, setHeaderName] = useState("Admin Home");
  const url = usePathname();

  useEffect(() => {
    const name =
      url === "/admin"
        ? "Admin Home"
        : url.includes("/admin/create-headline")
          ? "Create Headline"
          : url.includes("/admin/edit-headline")
            ? "Edit Headline"
            : "Admin Home";
    setHeaderName(name);
  }, [url]);

  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">{headerName}</h1>
        <NavigationMenu />
      </div>
    </header>
  );
};

export default AdminHeader;
