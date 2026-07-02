"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">Get in Touch</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318]">Contact The Headquarters</h1>
            <p className="text-gray-500 text-sm mt-3">
              We welcome enquiries from individual players, clubs, and property investors looking for elite racket sports partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact details */}
            <div className="lg:col-span-5 bg-white border border-[#E2E1D9] p-8 space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0C2318] mb-2">British Office</h3>
                <p className="text-sm text-gray-600">
                  Padel Pickle HQ Ltd<br />
                  12 Pall Mall, St. James&apos;s<br />
                  London, SW1Y 5LU<br />
                  United Kingdom
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#0C2318] mb-2">Iberian Operations</h3>
                <p className="text-sm text-gray-600">
                  Calle de Serrano, 45<br />
                  28001 Madrid, Spain<br />
                  &amp;<br />
                  Avenida dos Descobrimentos<br />
                  8200-260 Albufeira, Portugal
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E1D9] space-y-2 text-sm">
                <p className="text-[#0C2318]"><strong>Direct Hotline:</strong> +44 20 7946 0912</p>
                <p className="text-[#0C2318]"><strong>WhatsApp concierge:</strong> +44 7700 900077</p>
                <p className="text-[#0C2318]"><strong>General Enquiries:</strong> club@padelpicklehq.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white border border-[#E2E1D9] p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#0C2318]">Message Dispatched</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you. We have received your query. A sports coordinator will contact you directly within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#0C2318] text-[#D4AF37] px-6 py-2 text-xs font-bold uppercase tracking-wider border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0C2318] transition"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0C2318] tracking-wider mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Richard Harrington"
                        className="w-full border border-[#E2E1D9] p-3 rounded-none focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0C2318] tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. richard@domain.co.uk"
                        className="w-full border border-[#E2E1D9] p-3 rounded-none focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#0C2318] tracking-wider mb-2">How can we assist you?</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline details regarding travel, products, custom sizing, or partnership specs..."
                      className="w-full border border-[#E2E1D9] p-3 rounded-none focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0C2318] text-[#D4AF37] border border-[#D4AF37] py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0C2318] transition duration-300"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
