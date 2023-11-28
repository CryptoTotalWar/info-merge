import * as React from "react";
import Link from 'next/link';

const NavigationMenu = () => {
  return (
    <nav className="flex space-x-4">
      <Link href="/admin">
        <a className="text-sm font-medium hover:underline">Admin Home</a>
      </Link>
      <Link href="/admin/create-headline">
        <a className="text-sm font-medium hover:underline">Create Headline</a>
      </Link>
      <Link href="/admin/edit-headline">
        <a className="text-sm font-medium hover:underline">Edit Headline</a>
      </Link>
    </nav>
  );
};

export default NavigationMenu;
