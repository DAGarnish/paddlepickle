"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0C2318] text-white border-t border-[#D4AF37]/30 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <Logo variant="gold" className="h-11" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Padel Pickle HQ is the leading luxury sports-travel and equipment brand, delivering bespoke racket-sport holidays, premium gear, and turn-key court construction in Spain and Portugal.
            </p>
            <div className="flex space-x-4">
              {/* Instagram link */}
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Twitter link */}
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick navigation */}
          <div>
            <h3 className="font-serif text-[#D4AF37] text-lg font-bold mb-6">Service Portfolios</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/holidays/padel" className="hover:text-[#D4AF37] transition">
                  Padel Holidays Spain
                </Link>
              </li>
              <li>
                <Link href="/holidays/pickleball" className="hover:text-[#D4AF37] transition">
                  Pickleball Holidays Spain
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#D4AF37] transition">
                  Iberian Destinations
                </Link>
              </li>
              <li>
                <Link href="/courts" className="hover:text-[#D4AF37] transition">
                  Court Construction Overview
                </Link>
              </li>
              <li>
                <Link href="/courts/villas" className="hover:text-[#D4AF37] transition">
                  Villa Homeowner Courts
                </Link>
              </li>
              <li>
                <Link href="/courts/commercial" className="hover:text-[#D4AF37] transition">
                  Hotel, Club & Resort B2B
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Shop & Resources */}
          <div>
            <h3 className="font-serif text-[#D4AF37] text-lg font-bold mb-6">Shop & Support</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/shop" className="hover:text-[#D4AF37] transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/padel-rackets" className="hover:text-[#D4AF37] transition">
                  Padel Rackets
                </Link>
              </li>
              <li>
                <Link href="/shop/pickleball-paddles" className="hover:text-[#D4AF37] transition">
                  Pickleball Paddles
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4AF37] transition">
                  Racket Club Journal
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition">
                  Brand Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter signup */}
          <div>
            <h3 className="font-serif text-[#D4AF37] text-lg font-bold mb-6">The Headquarters Dispatch</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Subscribe to receive exclusive travel dates, premium equipment launches, and B2B feasibility analyses.
            </p>
            {subscribed ? (
              <p className="text-[#D4AF37] text-sm font-semibold">
                Thank you. You have been added to our mailing list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1A1D1A] border border-[#D4AF37]/40 p-3 text-sm text-white placeholder-gray-500 rounded-none focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-[#0C2318] py-2.5 text-xs uppercase tracking-wider font-bold hover:bg-white transition duration-300"
                >
                  Join the Club
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="border-t border-[#D4AF37]/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Padel Pickle HQ. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37]">Terms of Service</a>
            <a href="#" className="hover:text-[#D4AF37]">Cookie Preferences</a>
          </div>
          <p className="text-gray-500">Priced in Euros (€). Tailored specifically for British customers.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
