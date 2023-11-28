import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"; // Rename Inter to FontSans for consistency.
import "./globals.css";
import { cn } from "@/lib/utils"; // Ensure you have the cn function in your utils or create one.

// Instantiate the FontSans with the subsets and a CSS variable.
// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

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
      <head />
      <body
        // className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
        // className={cn(
        //   "min-h-screen bg-background font-sans antialiased",
        //   fontSans.variable // Use the CSS variable for the font family.
        // )}
      >
        {children}
      </body>
    </html>
  );
}
