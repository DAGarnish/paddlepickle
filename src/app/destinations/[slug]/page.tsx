import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import QuoteForm from "@/components/ui/QuoteForm";
import Link from "next/link";
import { destinationsData } from "@/data/mockData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const dest = destinationsData.find((d) => d.slug === slug);
  if (!dest) return {};

  return {
    title: `${dest.title} | Padel Pickle HQ`,
    description: dest.overview,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = destinationsData.find((d) => d.slug === slug);

  if (!dest) {
    notFound();
  }

  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: dest.title, url: `/destinations/${dest.slug}` }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <SchemaMarkup type="FAQ" data={{ faqs: dest.faqs }} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/destinations" className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
            &larr; Back to Destinations
          </Link>

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6 mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block">
                {dest.sport} • {dest.location}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318] leading-tight">
                {dest.title}
              </h1>
              <p className="text-gray-500 text-sm italic">Duration: {dest.duration} | Coaching: {dest.coachingLevel}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{dest.overview}</p>
              
              <div className="p-4 bg-[#F0EFEA] border-l-2 border-[#D4AF37] space-y-1">
                <span className="text-[10px] text-gray-500 uppercase font-bold block">Ideal Traveller Profile</span>
                <p className="text-xs text-gray-700">{dest.idealFor}</p>
              </div>

              <div className="pt-4 flex gap-4">
                <a
                  href="#quote-section"
                  className="bg-[#0C2318] text-[#D4AF37] border border-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0C2318] transition duration-300"
                >
                  Book Holiday Package
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-video lg:aspect-square bg-gray-200 border border-[#E2E1D9] overflow-hidden">
              <img
                src={dest.heroImage}
                alt={dest.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Highlights & Itinerary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5 bg-white border border-[#E2E1D9] p-8 space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0C2318] border-b border-[#E2E1D9] pb-4">
                Escape Highlights
              </h3>
              <ul className="space-y-4">
                {dest.highlights.map((h, idx) => (
                  <li key={idx} className="text-xs text-gray-600 flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 bg-white border border-[#E2E1D9] p-8 space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0C2318] border-b border-[#E2E1D9] pb-4">
                Sample Itinerary
              </h3>
              <div className="space-y-6">
                {dest.itinerary.map((day) => (
                  <div key={day.day} className="flex gap-4">
                    <span className="font-serif text-xs font-bold text-[#D4AF37] bg-[#0C2318] px-2.5 py-1 h-fit">
                      {day.day}
                    </span>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#0C2318]">{day.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs section */}
          <div className="max-w-4xl mx-auto mb-20 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#0C2318] text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dest.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#E2E1D9] p-6 space-y-2">
                  <h4 className="font-serif text-sm font-bold text-[#0C2318]">Q: {faq.q}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct booking form wrapper */}
          <div id="quote-section" className="border-t border-[#E2E1D9] pt-16">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0C2318]">Request Custom Proposal</h3>
              <p className="text-gray-500 text-xs mt-2">
                Configure your dates, coaching levels, and group sizing. Receive answers in British English.
              </p>
            </div>
            <QuoteForm defaultType="holiday" />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
