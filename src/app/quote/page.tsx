import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/ui/QuoteForm";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";

export const metadata = {
  title: "Request Custom Quote | Padel Pickle HQ",
  description: "Receive a bespoke proposal for custom sports holidays or court building consultations tailored in British English.",
};

export default function QuotePage() {
  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Get a Quote", url: "/quote" }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <Header />
      <CartDrawer />
      
      <main className="flex-grow bg-[#F9F9F5] py-16 px-4 font-sans">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">Bespoke Proposals</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318]">Tailored Plan Architect</h1>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Configure your dream racket getaway or residential court installation. Receive details including dimensions, options, and full pricing.
          </p>
        </div>

        <QuoteForm />
      </main>

      <Footer />
    </>
  );
}
