import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";
import { destinationsData } from "@/data/mockData";

export const metadata = {
  title: "Luxury Pickleball Retreats Spain & Portugal | Padel Pickle HQ",
  description: "Bespoke pickleball holidays, elite skills clinics, and luxury villa retreats in Quinta do Lago and Marbella. Tailored for British players.",
};

export default function PickleballHolidaysHubPage() {
  const pickleballDestinations = destinationsData.filter((d) => d.sport === "Pickleball" || d.sport === "Both");

  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Holidays", url: "/holidays" },
    { name: "Pickleball Holidays", url: "/holidays/pickleball" }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/holidays" className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
            &larr; Back to Holidays Overview
          </Link>

          {/* Intro Section */}
          <div className="max-w-3xl mx-auto text-center mt-6 mb-16">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">Pickleball Retreats</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318]">Pickleball Holidays Spain &amp; Portugal</h1>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Improve kitchen line mechanics, master third shot drops, and relax in luxury villas with private pools under sunny coastal skies.
            </p>
          </div>

          {/* Destination grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {pickleballDestinations.map((dest) => (
              <div key={dest.slug} className="bg-white border border-[#E2E1D9] flex flex-col justify-between hover:shadow-md transition">
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={dest.heroImage}
                    alt={dest.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0C2318] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                    {dest.location}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#0C2318]">{dest.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{dest.overview}</p>
                  
                  <div className="pt-4 border-t border-[#E2E1D9] flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase">Priced from</span>
                      <span className="text-[#0C2318] font-bold text-lg">€{dest.priceFrom}</span>
                    </div>
                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="bg-[#0C2318] text-white hover:bg-[#D4AF37] hover:text-[#0C2318] px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition"
                    >
                      View Retreat Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Group details */}
          <div className="bg-[#0C2318] text-white p-12 border border-[#D4AF37] text-center max-w-3xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#D4AF37]">Algarve &amp; Andalusia Retreats</h3>
            <p className="text-gray-300 text-xs max-w-xl mx-auto leading-relaxed">
              We design specialized pickleball getaways combining elite court clinics with private wine tours, gourmet dining, and luxury accommodation.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-[#D4AF37] text-[#0C2318] border border-[#D4AF37] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:border-white transition duration-300"
            >
              Request Custom Proposal
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
