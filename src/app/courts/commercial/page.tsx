"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";
import { courtServicesData } from "@/data/mockData";

export default function CommercialCourtsPage() {
  const service = courtServicesData.find((s) => s.type === "commercial")!;

  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Court Builds", url: "/courts" },
    { name: "For Clubs & Investors", url: "/courts/commercial" }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <SchemaMarkup type="Service" data={service} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/courts" className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
            &larr; Back to Court Builds
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6 mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block">Commercial B2B Portfolio</span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318] leading-tight">
                {service.title}
              </h1>
              <p className="text-gray-500 text-sm italic">{service.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Padel and pickleball courts offer the highest revenue yield per square meter of any modern recreational asset. We partner with resort groups, luxury hotels, golf clubs, and real estate developers to install commercial-grade tournament structures with integrated online booking configurations.
              </p>
              
              <div className="pt-4 flex gap-4">
                <Link
                  href="/quote"
                  className="bg-[#0C2318] text-[#D4AF37] border border-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0C2318] transition duration-300"
                >
                  Request Commercial Yield Analysis
                </Link>
                <button
                  onClick={() => alert("Downloading Commercial B2B Investor Feasibility Handbook...")}
                  className="bg-transparent text-[#0C2318] border border-[#0C2318] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition"
                >
                  Download Info PDF
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-video lg:aspect-square bg-gray-200 border border-[#E2E1D9]">
              <img
                src={service.heroImage}
                alt="Commercial sports resort court layout construction"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* B2B Benefits Grid */}
          <div className="bg-white border border-[#E2E1D9] p-8 lg:p-16 mb-20">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0C2318] mb-10 text-center">
              Commercial Advantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="text-[#D4AF37] text-2xl font-bold font-serif leading-none">✓</span>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0C2318] mb-1">Key Yield Factor {idx+1}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Turnkey process */}
          <div className="bg-[#0C2318] text-white p-8 lg:p-16 border-b border-[#D4AF37]/30">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#D4AF37] mb-8 text-center">
              Engineering Specs &amp; Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {Object.entries(service.courtSpecs).map(([key, value]) => (
                <div key={key} className="border-b border-white/10 pb-4">
                  <span className="text-[10px] text-[#D4AF37] uppercase font-bold tracking-widest block mb-1">
                    {key}
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">{value}</p>
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
