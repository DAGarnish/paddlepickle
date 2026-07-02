"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import ProductCard from "@/components/ui/ProductCard";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { destinationsData, productsData, testimonialsData } from "@/data/mockData";

export default function Home() {
  const [searchSport, setSearchSport] = useState("All");
  const [searchLocation, setSearchLocation] = useState("All");

  const filteredDestinations = destinationsData.filter((dest) => {
    const matchesSport = searchSport === "All" || dest.sport === searchSport || dest.sport === "Both";
    const matchesLocation = searchLocation === "All" || dest.country === searchLocation;
    return matchesSport && matchesLocation;
  });

  return (
    <>
      {/* Schema Markup for Organization and FAQs */}
      <SchemaMarkup type="Organization" data={{}} />
      <SchemaMarkup
        type="FAQ"
        data={{
          faqs: [
            { q: "What is included in a Padel Pickle HQ holiday package?", a: "Each package includes luxury accommodation, intensive court coaching, matchplay matches, wellness/spa access, and private airport transfers." },
            { q: "Do you install courts for private residential villas?", a: "Yes, we construct custom residential courts for villas and estates across Spain and Portugal with anti-corrosion marine-rated frames." }
          ]
        }}
      />

      <Header />
      <CartDrawer />

      <main className="flex-grow font-sans bg-[#F9F9F5]">
        {/* HERO SECTION */}
        <section className="relative bg-[#0C2318] text-white overflow-hidden py-24 lg:py-32 border-b border-[#D4AF37]/30">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1545224933-73c33a153245?q=80&w=1600')] bg-cover bg-center mix-blend-overlay" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              The Ultimate Iberian Racket Sport Escape
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none max-w-5xl mx-auto">
              Padel & Pickleball Holidays, Equipment & Court Solutions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed">
              Designed specifically for British players seeking premium sports travel, elite tournament gear, and bespoke court installations in sunny Spain and Portugal.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/holidays"
                className="bg-[#D4AF37] text-[#0C2318] border border-[#D4AF37] px-8 py-3.5 text-sm uppercase tracking-wider font-bold hover:bg-white hover:border-white transition duration-300"
              >
                Discover Holidays
              </Link>
              <Link
                href="/quote"
                className="bg-transparent text-white border border-white/60 px-8 py-3.5 text-sm uppercase tracking-wider font-bold hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0C2318] transition duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* THREE-PATH NAVIGATION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Path 1: Holiday bookings */}
            <div className="bg-white border border-[#E2E1D9] p-8 space-y-4 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">01 / Experience</span>
                <h3 className="font-serif text-2xl font-bold text-[#0C2318] mt-2">Book a Premium Holiday</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Tailored active escapes in Marbella, Barcelona, and the Algarve. Elite coaching with private transfers.
                </p>
              </div>
              <Link
                href="/holidays"
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[#0C2318] hover:text-[#D4AF37] transition mt-6"
              >
                Find Destinations &rarr;
              </Link>
            </div>

            {/* Path 2: Shop Equipment */}
            <div className="bg-white border border-[#E2E1D9] p-8 space-y-4 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">02 / Gear</span>
                <h3 className="font-serif text-2xl font-bold text-[#0C2318] mt-2">Shop Elite Tournament Equipment</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Discover professional carbon rackets, paddles, designer bags, and apparel. Priced in Euros.
                </p>
              </div>
              <Link
                href="/shop"
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[#0C2318] hover:text-[#D4AF37] transition mt-6"
              >
                Shop the Collection &rarr;
              </Link>
            </div>

            {/* Path 3: Build a Court */}
            <div className="bg-white border border-[#E2E1D9] p-8 space-y-4 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">03 / Construction</span>
                <h3 className="font-serif text-2xl font-bold text-[#0C2318] mt-2">Build a Bespoke Court</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Turnkey architectural design and installation for luxury residential villas or commercial clubs.
                </p>
              </div>
              <Link
                href="/courts"
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[#0C2318] hover:text-[#D4AF37] transition mt-6"
              >
                View Installations &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* HOLIDAY FINDER MODULAR SELECTOR */}
        <section className="bg-[#F0EFEA] border-y border-[#E2E1D9] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0C2318] text-center mb-8">
              Find Your Premium Iberian Sport Escape
            </h2>
            <div className="bg-white border border-[#E2E1D9] p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div>
                <label className="block text-xs font-bold uppercase text-[#0C2318] tracking-wider mb-2">Sport</label>
                <select
                  value={searchSport}
                  onChange={(e) => setSearchSport(e.target.value)}
                  className="w-full border border-[#E2E1D9] p-3 rounded-none focus:outline-none"
                >
                  <option value="All">All Sports (Padel & Pickleball)</option>
                  <option value="Padel">Padel</option>
                  <option value="Pickleball">Pickleball</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-[#0C2318] tracking-wider mb-2">Destination Country</label>
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full border border-[#E2E1D9] p-3 rounded-none focus:outline-none"
                >
                  <option value="All">All Countries</option>
                  <option value="Spain">Spain</option>
                  <option value="Portugal">Portugal</option>
                </select>
              </div>
              <div>
                <Link
                  href="/holidays"
                  className="block w-full bg-[#0C2318] text-[#D4AF37] text-center py-3.5 text-sm uppercase tracking-wider font-bold hover:bg-[#D4AF37] hover:text-[#0C2318] transition"
                >
                  Search Packages ({filteredDestinations.length})
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED DESTINATIONS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Featured Escapes</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318] mt-2">Iberian Destinations</h2>
            </div>
            <Link
              href="/destinations"
              className="text-[#0C2318] font-bold text-sm uppercase tracking-wider hover:text-[#D4AF37] transition mt-4 md:mt-0"
            >
              View All Destinations &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div key={dest.slug} className="bg-white border border-[#E2E1D9] group flex flex-col hover:shadow-md transition">
                <div className="relative overflow-hidden aspect-video bg-gray-200">
                  <img
                    src={dest.heroImage}
                    alt={dest.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 bg-[#0C2318] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                    {dest.sport}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0C2318]">{dest.title}</h3>
                    <p className="text-gray-500 text-xs mt-1">{dest.location} • {dest.duration}</p>
                    <p className="text-gray-600 text-sm mt-3 line-clamp-2">{dest.overview}</p>
                  </div>
                  <div className="pt-6 border-t border-[#E2E1D9] mt-6 flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 text-[10px] uppercase block">Priced from</span>
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
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PRODUCT CATEGORIES */}
        <section className="bg-white border-y border-[#E2E1D9] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Premium Equipment</span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318] mt-2">The Pro Shop</h2>
              </div>
              <Link
                href="/shop"
                className="text-[#0C2318] font-bold text-sm uppercase tracking-wider hover:text-[#D4AF37] transition"
              >
                View Shop &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {productsData.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* COURT INSTALLATION SPOTLIGHT */}
        <section className="bg-[#0C2318] text-white py-20 border-b border-[#D4AF37]/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600')] bg-cover bg-center mix-blend-overlay" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] block">Turnkey Installations</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
                Bespoke Padel & Pickleball Court Construction
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                We design and build premium-grade court facilities. From private homeowners wishing to add values to their Spanish and Portuguese estates, to golf clubs, hotels, and business investors looking for high-yield sport amenities.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-serif text-[#D4AF37] text-xl font-bold">For Villas & Homes</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Anti-corrosive marine structures, wind-rated glass panels, and customized acoustics.
                  </p>
                  <Link href="/courts/villas" className="text-white text-xs font-bold uppercase tracking-wider hover:underline block mt-3">
                    Learn More &rarr;
                  </Link>
                </div>
                <div>
                  <h4 className="font-serif text-[#D4AF37] text-xl font-bold">For Clubs & Resorts</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Feasibility analysis, high-yield sport configurations, and smart access integrations.
                  </p>
                  <Link href="/courts/commercial" className="text-white text-xs font-bold uppercase tracking-wider hover:underline block mt-3">
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-white text-[#0C2318] p-8 border border-[#D4AF37] shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-4">Request Consultation</h3>
              <p className="text-xs text-gray-500 mb-6">
                Receive our latest feasibility reports and details regarding court base structural dimensions.
              </p>
              <Link
                href="/quote"
                className="block w-full bg-[#0C2318] text-[#D4AF37] text-center py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0C2318] transition duration-300"
              >
                Schedule Project Review
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST / TESTIMONIALS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318] mt-2">Endorsed by Members</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((t, idx) => (
              <div key={idx} className="bg-white border border-[#E2E1D9] p-8 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 text-[#D4AF37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="pt-6 border-t border-[#E2E1D9] mt-6">
                  <h4 className="font-serif text-base font-bold text-[#0C2318]">{t.author}</h4>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STICKY MOBILE CTA */}
        <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-[#0C2318] border-t border-[#D4AF37] p-3 flex gap-3 shadow-lg">
          <a
            href="https://wa.me/447700900077"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-700 text-white text-center py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            WhatsApp Info
          </a>
          <Link
            href="/quote"
            className="flex-1 bg-[#D4AF37] text-[#0C2318] text-center py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center"
          >
            Get Custom Quote
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
