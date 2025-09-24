"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/avid-logo.png"
              alt="AVID Signs & Graphics - Vehicle Wraps"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/work" className="text-gray-900 hover:text-blue-600 font-medium">
              Work
            </Link>
            <Link href="/services/signs" className="text-gray-900 hover:text-blue-600 font-medium">
              Signs
            </Link>
            <Link href="/services/vehicle-wraps" className="text-gray-900 hover:text-blue-600 font-medium">
              Vehicle Wraps
            </Link>
            <Link href="/services/large-format" className="text-gray-900 hover:text-blue-600 font-medium">
              Large-Format
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Get Quote Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                href="/work"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/services/signs"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Signs
              </Link>
              <Link
                href="/services/vehicle-wraps"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Vehicle Wraps
              </Link>
              <Link
                href="/services/large-format"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Large-Format
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-4 px-3">
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}