"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";
import { courtServicesData } from "@/data/mockData";

export default function CourtsHubPage() {
  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Court Builds", url: "/courts" }
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
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">Turnkey Construction</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0C2318] tracking-tight">Court Engineering &amp; Surfaces</h1>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              We design, excavate, and install premium FIP and USAPA standard courts. Our structures feature anti-corrosion galvanized steel frames optimized for marine environments.
            </p>
          </div>

          {/* Service options grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {courtServicesData.map((service) => (
              <div key={service.slug} className="bg-white border border-[#E2E1D9] flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="relative aspect-video overflow-hidden bg-gray-200 border-b border-[#E2E1D9]">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                      {service.type === "villas" ? "Private Residential" : "Commercial B2B"}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0C2318]">{service.title}</h3>
                    <p className="text-gray-500 text-xs italic">{service.subtitle}</p>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                      High-end steel profiles, 12mm thick structural glass, and FIP approved textured synthetic turf solutions.
                    </p>
                    
                    <ul className="space-y-2 pt-4">
                      {service.benefits.slice(0, 3).map((b, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-[#D4AF37] font-bold">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 pt-0 mt-6 flex gap-4">
                  <Link
                    href={`/courts/${service.type}`}
                    className="flex-1 bg-[#0C2318] text-white hover:bg-black text-center py-3 text-xs font-bold uppercase tracking-wider transition"
                  >
                    View Specifications
                  </Link>
                  <Link
                    href="/quote"
                    className="flex-1 border border-[#0C2318] text-[#0C2318] hover:bg-[#0C2318]/5 text-center py-3 text-xs font-bold uppercase tracking-wider transition"
                  >
                    Get Proposal
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Download brochure panel */}
          <div className="bg-[#0C2318] text-white p-12 border border-[#D4AF37] text-center max-w-3xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#D4AF37]">Download Court Design Guides</h3>
            <p className="text-gray-300 text-xs max-w-xl mx-auto leading-relaxed">
              Read comprehensive details regarding concrete base foundations, wind-load ratings up to 130 km/h, and smart gate access configurations.
            </p>
            <div>
              <button
                onClick={() => alert("Downloading PDF Court Catalogue and Feasibility Handbook...")}
                className="bg-[#D4AF37] text-[#0C2318] border border-[#D4AF37] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:border-white transition duration-300"
              >
                Download Feasibility Guide (PDF)
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
