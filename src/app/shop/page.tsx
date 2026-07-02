"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import ProductCard from "@/components/ui/ProductCard";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";
import { productsData } from "@/data/mockData";

export default function ShopIndexPage() {
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Filtering
  const filteredProducts = productsData.filter((product) => {
    const matchesSport = selectedSport === "All" || product.sport === selectedSport || product.sport === "Both";
    const matchesLevel = selectedLevel === "All" || product.level === selectedLevel;
    return matchesSport && matchesLevel;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.isSale && a.salePrice ? a.salePrice : a.price;
    const priceB = b.isSale && b.salePrice ? b.salePrice : b.price;

    if (sortBy === "price-asc") return priceA - priceB;
    if (sortBy === "price-desc") return priceB - priceA;
    return 0; // Default sorting
  });

  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" }
  ];

  const categoriesList = [
    { name: "Padel Rackets", slug: "padel-rackets" },
    { name: "Pickleball Paddles", slug: "pickleball-paddles" },
    { name: "Apparel", slug: "apparel" },
    { name: "Balls", slug: "balls" },
    { name: "Bags", slug: "bags" }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">The Pro Shop</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0C2318] tracking-tight">Elite Racket Collections</h1>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Explore professional raw carbon paddles, carbon padel rackets, designer clubroom duffles, and tournament apparel. Priced in Euros.
            </p>
          </div>

          {/* Quick Categories Bar */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 border-b border-[#E2E1D9] pb-8">
            {categoriesList.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className="bg-white border border-[#E2E1D9] hover:border-[#D4AF37] text-[#0C2318] px-5 py-2 text-xs uppercase tracking-wider font-semibold transition"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Filters */}
            <div className="lg:col-span-3 bg-white border border-[#E2E1D9] p-6 space-y-6">
              <h3 className="font-serif text-lg font-bold text-[#0C2318] border-b border-[#E2E1D9] pb-3">Filters</h3>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Sport Focus</label>
                <div className="space-y-2">
                  {["All", "Padel", "Pickleball"].map((sport) => (
                    <button
                      key={sport}
                      onClick={() => setSelectedSport(sport)}
                      className={`block text-xs font-medium w-full text-left py-1 ${
                        selectedSport === sport ? "text-[#D4AF37] font-bold" : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {sport === "All" ? "All Sports" : sport}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Skill Rating</label>
                <div className="space-y-2">
                  {["All", "Beginner", "Intermediate", "Advanced", "Professional"].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`block text-xs font-medium w-full text-left py-1 ${
                        selectedLevel === lvl ? "text-[#D4AF37] font-bold" : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {lvl === "All" ? "All Skill Levels" : lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className="lg:col-span-9 space-y-6">
              <div className="flex justify-between items-center bg-[#F0EFEA] border border-[#E2E1D9] px-4 py-3">
                <span className="text-xs text-gray-600 font-medium">
                  Showing {sortedProducts.length} premium gear pieces
                </span>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-[#E2E1D9] p-2 text-xs font-semibold focus:outline-none"
                >
                  <option value="default">Sort: Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              {sortedProducts.length === 0 ? (
                <div className="text-center py-20 bg-white border border-[#E2E1D9]">
                  <p className="text-gray-500 text-sm">No items found matching the selected filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
