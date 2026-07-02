import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";
import { destinationsData } from "@/data/mockData";

export const metadata = {
  title: "Premium Padel & Pickleball Holidays Spain & Portugal",
  description: "Bespoke sports coaching retreats and weekend escapes designed specifically for British players in sunny Marbella, Barcelona, and Quinta do Lago.",
};

export default function HolidaysIndexPage() {
  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Holidays", url: "/holidays" }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">Luxury Sports Travel</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0C2318] tracking-tight">Active Racket Escapes</h1>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Combine elite coaching clinics with 5-star hotel accommodations, panoramic court setups, private transfers, and sunny Mediterranean coastlines.
            </p>
          </div>

          {/* Core Sport Selection portals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Padel Holidays */}
            <div className="bg-[#0C2318] text-white p-12 border border-[#D4AF37] flex flex-col justify-between hover:shadow-lg transition relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1545224933-73c33a153245?q=80&w=600')] bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition duration-700" />
              <div className="relative z-10 space-y-4">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Sport Portfolio</span>
                <h3 className="font-serif text-3xl font-bold">Padel Tennis Holidays</h3>
                <p className="text-gray-300 text-xs leading-relaxed max-w-md">
                  Intensive doubles matchplay strategy clinics, glass rebound defense workshops, and pro level exhibition viewings in Barcelona and Marbella.
                </p>
              </div>
              <div className="relative z-10 pt-10">
                <Link
                  href="/holidays/padel"
                  className="bg-[#D4AF37] text-[#0C2318] border border-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white hover:border-white transition inline-block"
                >
                  Explore Padel Travel
                </Link>
              </div>
            </div>

            {/* Pickleball Holidays */}
            <div className="bg-[#0C2318] text-white p-12 border border-[#D4AF37] flex flex-col justify-between hover:shadow-lg transition relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600')] bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition duration-700" />
              <div className="relative z-10 space-y-4">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Sport Portfolio</span>
                <h3 className="font-serif text-3xl font-bold">Pickleball Retreats</h3>
                <p className="text-gray-300 text-xs leading-relaxed max-w-md">
                  Master the art of the dink, improve kitchen-line mobility, and enjoy private pool estate villas and wine tastings in Quinta do Lago.
                </p>
              </div>
              <div className="relative z-10 pt-10">
                <Link
                  href="/holidays/pickleball"
                  className="bg-[#D4AF37] text-[#0C2318] border border-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white hover:border-white transition inline-block"
                >
                  Explore Pickleball Retreats
                </Link>
              </div>
            </div>
          </div>

          {/* Destinations directory map */}
          <div className="border-t border-[#E2E1D9] pt-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0C2318] mb-8">
              Available Iberian Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinationsData.map((dest) => (
                <div key={dest.slug} className="bg-white border border-[#E2E1D9] flex flex-col justify-between hover:shadow-sm transition">
                  <div className="relative overflow-hidden aspect-video bg-gray-100">
                    <img
                      src={dest.heroImage}
                      alt={dest.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0C2318]">{dest.title}</h3>
                      <p className="text-gray-500 text-xs mt-1">{dest.location} • {dest.duration}</p>
                    </div>
                    <div className="pt-6 border-t border-[#E2E1D9] mt-6 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-gray-400 block uppercase font-medium">Priced from</span>
                        <span className="text-[#0C2318] font-bold">€{dest.priceFrom}</span>
                      </div>
                      <Link
                        href={`/destinations/${dest.slug}`}
                        className="bg-[#0C2318] text-white hover:bg-[#D4AF37] hover:text-[#0C2318] px-4 py-2 text-xs uppercase tracking-wider font-semibold transition"
                      >
                        View Escape
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
