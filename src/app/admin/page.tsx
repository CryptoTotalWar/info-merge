"use client";
import React from "react";

export default function AdminHomePage() {
  return (
    <div className="bg-slate-900 opacity-90 shadow-lg rounded-lg overflow-hidden">
      <iframe
        src="http://localhost:5555"
        style={{ width: "100%", height: "100vh" }}
        title="Embedded Content"
      ></iframe>
    </div>
  );
}
