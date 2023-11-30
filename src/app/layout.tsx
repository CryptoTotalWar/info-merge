import type { Metadata } from "next";
import "./globals.css"; // Ensure this path is correct
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"; // Adjust the import path as necessary

const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Info Merge",
  description:
    "Your Ultimate Millennial News Hub with human curated media feeds. You can say bye to Drudge Report for good now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* Other head tags */}
      </head>{" "}
      <body
        className={cn(
          "bg-slate-800 text-slate-100 container mx-auto p-4 font-sans antialiased",
          interFont.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
