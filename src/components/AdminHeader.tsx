"use client"
import React from 'react';
import NavigationMenu from '../components/ui/navigation-menu';

const AdminHeader = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <NavigationMenu />
            </div>
        </header>
    );
};

export default AdminHeader;
