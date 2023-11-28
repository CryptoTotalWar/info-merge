import React from 'react';
import AdminHeader from '@/components/AdminHeader';
import { Inter } from 'next/font/google';
import { cn } from "@/lib/utils";

const interFont = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <head />
            <body className={cn("bg-slate-800 text-slate-100 container mx-auto p-4 font-sans antialiased", interFont.className)}>
                <AdminHeader />
                <main className="container mx-auto py-6 px-4">
                    {children}
                </main>
            </body>
        </html>
    );
}
