import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="relative top-3 flex items-center justify-center">
      <nav className="flex gap-1.5 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        <Link href="/" className="nav-item">
          Home
        </Link>
        <Link href="/" className="nav-item">
          Project
        </Link>
        <Link href="/" className="nav-item">
          About
        </Link>
        <Link
          href="/"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
