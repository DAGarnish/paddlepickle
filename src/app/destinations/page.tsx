import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";
import { destinationsData } from "@/data/mockData";

export const metadata = {
  title: "Exclusive Iberian Racket Sport Destinations | Padel Pickle HQ",
  description: "Browse premium padel and pickleball holiday destinations in Barcelona, Costa del Sol, and Quinta do Lago.",
};

export default function DestinationsPage() {
  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">Portfolio</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0C2318] tracking-tight">Destinations Directory</h1>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Explore our handpicked 5-star properties, academies, and wellness destinations across Spain and Portugal.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinationsData.map((dest) => (
              <div key={dest.slug} className="bg-white border border-[#E2E1D9] flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="relative aspect-video overflow-hidden bg-gray-100 border-b border-[#E2E1D9]">
                    <img
                      src={dest.heroImage}
                      alt={dest.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#0C2318] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                      {dest.sport}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">
                      {dest.country} • {dest.location}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0C2318]">{dest.title}</h3>
                    <p className="text-gray-600 text-sm">{dest.overview}</p>
                    
                    <div className="pt-4 border-t border-[#E2E1D9]/60">
                      <span className="text-xs text-[#0C2318]"><strong>Coaching:</strong> {dest.coachingLevel}</span>
                      <span className="text-xs text-[#0C2318] block mt-1"><strong>Accommodation:</strong> {dest.accommodation}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-6 flex justify-between items-center border-t border-[#E2E1D9]/60">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Priced from</span>
                    <span className="text-[#0C2318] font-bold">€{dest.priceFrom}</span>
                  </div>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="bg-[#0C2318] text-white hover:bg-[#D4AF37] hover:text-[#0C2318] px-4 py-2 text-xs uppercase tracking-wider font-semibold transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
