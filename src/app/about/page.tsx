import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";

export const metadata = {
  title: "Our Heritage & Philosophy | Padel Pickle HQ",
  description: "Learn about Padel Pickle HQ, bringing tournament-grade racket sport equipment, active Iberian holidays, and court installation to British players.",
};

export default function AboutPage() {
  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Our Heritage", url: "/about" }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Editorial Headline */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">Since 2022</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0C2318] tracking-tight">The Art of the Court</h1>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-xl mx-auto">
              Combining elite British sporting heritage with the sun-drenched coastal lifestyles of Spain and Portugal.
            </p>
          </div>

          {/* Core Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative aspect-video lg:aspect-square bg-gray-200 border border-[#E2E1D9]">
              <img
                src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop"
                alt="Championship Padel court in sunny Spain"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Our Vision</span>
              <h2 className="font-serif text-3xl font-bold text-[#0C2318]">Bridging Prestige and Performance</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Padel Pickle HQ was founded by a collective of former British racket sport professionals and luxury travel designers. We noticed a gap: while padel and pickleball were booming in the UK, players lacked access to high-end coaching escapes, elite tournament-grade equipment, and reliable domestic court builders.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                By base-building operations across Marbella, Barcelona, and the Algarve, we coordinate an integrated racket-sport lifestyle. Whether you are seeking a weekend doubles clinic, buying raw carbon paddles, or designing a garden court, our brand ensures tournament-grade precision.
              </p>
            </div>
          </div>

          {/* Editorial Pillars */}
          <div className="bg-[#0C2318] text-white p-12 lg:p-20 border-b border-[#D4AF37]/30 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-3">
                <span className="text-[#D4AF37] font-serif text-3xl font-bold">01 / Prestige</span>
                <h3 className="font-serif text-xl font-bold">Wimbledon Elegance</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  We adopt the editorial prestige of grass-court history, delivering an elevated, premium, and structured atmosphere to modern sports travel.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[#D4AF37] font-serif text-3xl font-bold">02 / Expertise</span>
                <h3 className="font-serif text-xl font-bold">Elite Instructors</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Every holiday coach is certified with professional rating badges and maintains a player ratio no larger than 4:1 per court.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[#D4AF37] font-serif text-3xl font-bold">03 / Turnkey</span>
                <h3 className="font-serif text-xl font-bold">Architectural Precision</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Our B2B installation team manages full planning permissions, concrete bases, wind-rated glass layouts, and turf laying.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-[#F0EFEA] border border-[#E2E1D9] p-8 max-w-xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-[#0C2318] mb-2">Want to Partner with Us?</h3>
            <p className="text-xs text-gray-500 mb-6">
              Connect with our brand directors regarding sponsorships, corporate escapes, or court development.
            </p>
            <Link
              href="/contact"
              className="bg-[#0C2318] text-[#D4AF37] border border-[#D4AF37] px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0C2318] transition"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
