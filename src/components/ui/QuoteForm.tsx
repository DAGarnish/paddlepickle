"use client";

import React, { useState } from "react";

export const QuoteForm: React.FC<{ defaultType?: "holiday" | "court" }> = ({ defaultType = "holiday" }) => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<"holiday" | "court">(defaultType);
  const [submitted, setSubmitted] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sport: "Padel",
    location: "Spain (Marbella / Costa del Sol)",
    guests: "2 Players",
    courtType: "Residential Villa Court",
    timeline: "Within 3 Months",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#0C2318] text-white border border-[#D4AF37] p-8 text-center max-w-xl mx-auto shadow-xl">
        <h3 className="font-serif text-3xl font-bold text-[#D4AF37] mb-4">Enquiry Received</h3>
        <p className="text-gray-300 mb-6">
          Thank you for contacting Padel Pickle HQ. A dedicated portfolio consultant will review your specifications and contact you in British English within 24 hours.
        </p>
        <button
          onClick={() => { setStep(1); setSubmitted(false); }}
          className="bg-[#D4AF37] text-[#0C2318] px-6 py-3 font-semibold hover:bg-white transition duration-300"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E2E1D9] p-8 max-w-2xl mx-auto shadow-lg font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl font-bold text-[#0C2318]">Request Premium Quote</h2>
        <span className="text-sm font-semibold bg-[#F0EFEA] text-[#0C2318] px-3 py-1 border border-[#D4AF37]">
          Step {step} of 3
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#0C2318] mb-2">Service Portfolio</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setType("holiday")}
                  className={`py-4 border text-center transition ${
                    type === "holiday"
                      ? "border-[#0C2318] bg-[#0C2318]/5 font-bold"
                      : "border-[#E2E1D9] hover:bg-gray-50"
                  }`}
                >
                  <span className="block text-lg font-serif text-[#0C2318]">Active Holidays</span>
                  <span className="text-xs text-gray-500">Spain & Portugal Escapes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setType("court")}
                  className={`py-4 border text-center transition ${
                    type === "court"
                      ? "border-[#0C2318] bg-[#0C2318]/5 font-bold"
                      : "border-[#E2E1D9] hover:bg-gray-50"
                  }`}
                >
                  <span className="block text-lg font-serif text-[#0C2318]">Court Installation</span>
                  <span className="text-xs text-gray-500">Villas, Hotels & Clubs</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#0C2318] mb-2">Primary Racket Sport Focus</label>
              <select
                name="sport"
                value={formData.sport}
                onChange={handleInputChange}
                className="w-full border border-[#E2E1D9] p-3 rounded-none focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                <option value="Padel">Padel Tennis</option>
                <option value="Pickleball">Pickleball</option>
                <option value="Both">Both Racket Sports</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-[#0C2318] text-white py-3 hover:bg-black font-semibold transition"
            >
              Continue to Specifications
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            {type === "holiday" ? (
              <>
                <div>
                  <label className="block text-sm font-bold text-[#0C2318] mb-2">Preferred Destination</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full border border-[#E2E1D9] p-3 rounded-none"
                  >
                    <option value="Spain (Marbella / Costa del Sol)">Spain (Marbella / Costa del Sol)</option>
                    <option value="Spain (Barcelona / Costa Maresme)">Spain (Barcelona / Costa Maresme)</option>
                    <option value="Portugal (Quinta do Lago / Algarve)">Portugal (Quinta do Lago / Algarve)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0C2318] mb-2">Group Composition</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full border border-[#E2E1D9] p-3 rounded-none"
                  >
                    <option value="Solo Traveller">Solo Traveller</option>
                    <option value="2 Players">2 Players (Doubles pair)</option>
                    <option value="4 Players">4 Players (Full Court group)</option>
                    <option value="Large Club Group (8+)">Large Club Group (8+ players)</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-bold text-[#0C2318] mb-2">Project Classification</label>
                  <select
                    name="courtType"
                    value={formData.courtType}
                    onChange={handleInputChange}
                    className="w-full border border-[#E2E1D9] p-3 rounded-none"
                  >
                    <option value="Residential Villa Court">Private Villa / Home Court</option>
                    <option value="Commercial Club Cluster">Commercial Racket Club Cluster</option>
                    <option value="Hotel & Resort Amenity">Hotel or Luxury Resort Amenity</option>
                    <option value="Urban Court Installation">Business / Corporate Space</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0C2318] mb-2">Proposed Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full border border-[#E2E1D9] p-3 rounded-none"
                  >
                    <option value="Immediate">Immediate Planning</option>
                    <option value="Within 3 Months">Within 3 Months</option>
                    <option value="3 to 6 Months">3 to 6 Months</option>
                    <option value="Next Year">Next Year / Feasibility Study</option>
                  </select>
                </div>
              </>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="w-1/3 border border-[#E2E1D9] text-[#0C2318] py-3 hover:bg-gray-50 transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-2/3 bg-[#0C2318] text-white py-3 hover:bg-black font-semibold transition"
              >
                Continue to Contact Details
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#0C2318] mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Harrington Smythe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-[#E2E1D9] p-3 rounded-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0C2318] mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. contact@domain.co.uk"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-[#E2E1D9] p-3 rounded-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#0C2318] mb-1">Contact Phone Number (UK / international)</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. +44 7700 900077"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-[#E2E1D9] p-3 rounded-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#0C2318] mb-1">Project & Holiday Specifications</label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Mention coaching requirements, custom sizes, accommodation preferences, dietary, or specific villa layouts..."
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full border border-[#E2E1D9] p-3 rounded-none"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="w-1/3 border border-[#E2E1D9] text-[#0C2318] py-3 hover:bg-gray-50 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 bg-[#0C2318] text-[#D4AF37] border border-[#D4AF37] py-3 hover:bg-[#D4AF37] hover:text-[#0C2318] font-bold uppercase tracking-wider transition duration-300"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
export default QuoteForm;
