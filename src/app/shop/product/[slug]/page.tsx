import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { productsData } from "@/data/mockData";
import { notFound } from "next/navigation";

// Client component wrappers for interactive add to cart actions
import AddToCartButton from "./AddToCartButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.id === slug);
  if (!product) return {};

  return {
    title: `${product.name} | Padel Pickle HQ Shop`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const priceToDisplay = product.isSale && product.salePrice ? product.salePrice : product.price;

  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: product.name, url: `/shop/product/${product.id}` }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <SchemaMarkup type="Product" data={product} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/shop" className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
            &larr; Back to Shop
          </Link>

          {/* Product details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 mb-20 items-start">
            
            {/* Image Column */}
            <div className="lg:col-span-6 bg-white border border-[#E2E1D9] aspect-square overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isSale && (
                <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#0C2318] text-xs font-bold uppercase tracking-wider px-3 py-1">
                  Sale
                </span>
              )}
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
                  {product.sport} • {product.level} Level
                </span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318] leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3">
                {product.isSale && product.salePrice ? (
                  <>
                    <span className="text-3xl font-bold text-[#0C2318]">€{product.salePrice.toFixed(2)}</span>
                    <span className="text-lg text-gray-400 line-through">€{product.price.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-[#0C2318]">€{product.price.toFixed(2)}</span>
                )}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

              {/* Add to Cart Actions (client interaction) */}
              <AddToCartButton product={{
                id: product.id,
                name: product.name,
                price: priceToDisplay,
                image: product.image,
                category: product.category,
                inStock: product.inStock
              }} />

              {/* Technical Specifications */}
              <div className="pt-6 border-t border-[#E2E1D9] space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#0C2318]">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="border-b border-[#E2E1D9]/60 pb-2">
                      <span className="text-[10px] text-gray-400 uppercase font-medium block">{key}</span>
                      <span className="text-xs text-[#0C2318] font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery and returns trust tags */}
              <div className="bg-[#F0EFEA] border border-[#E2E1D9] p-4 text-xs space-y-2 text-gray-600">
                <p><strong>Shipping:</strong> Safe premium customs-clearance delivery to the UK &amp; European destinations. Dispatched in 48 hours.</p>
                <p><strong>Returns:</strong> 30-day hassle-free returns on all unused racket equipment.</p>
              </div>

            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-[#E2E1D9] pt-16">
              <h2 className="font-serif text-2xl font-bold text-[#0C2318] mb-8">Related Equipment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
