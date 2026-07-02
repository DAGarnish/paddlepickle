import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import ProductCard from "@/components/ui/ProductCard";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";
import { productsData } from "@/data/mockData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = ["padel-rackets", "pickleball-paddles", "apparel", "balls", "bags", "accessories", "shoes", "nets", "training-equipment", "court-accessories", "maintenance-items"];
  return categories.map((cat) => ({
    category: cat,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const capitalized = category.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    title: `Buy ${capitalized} Online | Padel Pickle HQ`,
    description: `Shop premium quality ${capitalized} in Euro pricing. Fast shipping and custom clearance to the UK included.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  
  // Filter products by specific category
  const filtered = productsData.filter((p) => p.category === category);

  const capitalizedTitle = category.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: capitalizedTitle, url: `/shop/${category}` }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/shop" className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
            &larr; Back to Shop Overview
          </Link>

          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mt-6 mb-16">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">Category Selection</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318]">{capitalizedTitle}</h1>
            <p className="text-gray-500 text-sm mt-3">
              Premium quality tournament gear priced in Euros. Fast shipping options across the UK and Iberian destinations.
            </p>
          </div>

          {/* Products grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white border border-[#E2E1D9]">
              <p className="text-gray-500 text-sm mb-4">No products found in this category currently.</p>
              <Link
                href="/shop"
                className="bg-[#0C2318] text-[#D4AF37] border border-[#D4AF37] px-6 py-2.5 text-xs font-bold uppercase tracking-widest"
              >
                Browse All Shop
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
