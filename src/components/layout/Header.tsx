"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Logo from "@/components/ui/Logo";

export const Header: React.FC = () => {
  const { cart, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-[#0C2318] text-white border-b border-[#D4AF37]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand lockup */}
          <Link href="/" className="flex-shrink-0">
            <Logo variant="gold" className="h-11" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-8 text-sm font-semibold tracking-wider uppercase font-sans">
            <Link href="/holidays" className="text-white/90 hover:text-[#D4AF37] transition duration-200">
              Holidays
            </Link>
            <Link href="/shop" className="text-white/90 hover:text-[#D4AF37] transition duration-200">
              Shop Gear
            </Link>
            <Link href="/courts" className="text-white/90 hover:text-[#D4AF37] transition duration-200">
              Court Builds
            </Link>
            <Link href="/about" className="text-white/90 hover:text-[#D4AF37] transition duration-200">
              Our Heritage
            </Link>
            <Link href="/blog" className="text-white/90 hover:text-[#D4AF37] transition duration-200">
              Club Journal
            </Link>
            <Link href="/contact" className="text-white/90 hover:text-[#D4AF37] transition duration-200">
              Contact
            </Link>
          </nav>

          {/* Actions & Cart */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/quote"
              className="bg-transparent text-[#D4AF37] border border-[#D4AF37] px-5 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-[#D4AF37] hover:text-[#0C2318] transition duration-300"
            >
              Get a Quote
            </Link>

            <button
              onClick={toggleCart}
              className="relative p-2 text-white hover:text-[#D4AF37] transition duration-200"
              aria-label="Open Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#0C2318] text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center border border-[#0C2318]">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleCart}
              className="relative p-2 text-white hover:text-[#D4AF37]"
              aria-label="Open Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#0C2318] text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center border border-[#0C2318]">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D4AF37]"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D4AF37]/20 bg-[#0C2318] px-4 pt-4 pb-6 space-y-3 font-sans">
          <Link
            href="/holidays"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/95 hover:text-[#D4AF37]"
          >
            Holidays
          </Link>
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/95 hover:text-[#D4AF37]"
          >
            Shop Gear
          </Link>
          <Link
            href="/courts"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/95 hover:text-[#D4AF37]"
          >
            Court Builds
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/95 hover:text-[#D4AF37]"
          >
            Our Heritage
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/95 hover:text-[#D4AF37]"
          >
            Club Journal
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/95 hover:text-[#D4AF37]"
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#D4AF37] text-[#0C2318] py-3 text-sm font-bold uppercase tracking-wider"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
