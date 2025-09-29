"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-teal-400 font-bold text-xl flex items-center gap-2"
          >
            📚 <span className="font-serif">Book Catalog</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 font-medium">
            <Link
              href="/"
              className="text-gray-200 hover:text-teal-400 transition"
            >
              🏠 Home
            </Link>
            <Link
              href="/add"
              className="text-gray-200 hover:text-teal-400 transition"
            >
              ➕ Add a Book
            </Link>
            <Link
              href="/auth/signin"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1.5 rounded-lg shadow-sm transition"
            >
              🔐 Sign In
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-teal-400 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2 animate-slide-down">
          <Link href="/" className="block text-gray-200 hover:text-teal-400">
            🏠 Home
          </Link>
          <Link href="/add" className="block text-gray-200 hover:text-teal-400">
            ➕ Add a Book
          </Link>
          <Link
            href="/auth/signin"
            className="block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg shadow-sm"
          >
            🔐 Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
