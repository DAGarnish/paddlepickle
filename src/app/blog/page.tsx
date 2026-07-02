import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";
import { blogPostsData } from "@/data/mockData";

export const metadata = {
  title: "The Court Journal | Padel & Pickleball Guides",
  description: "Read expert guides, equipment reviews, court installation tips, and travel strategies for Spanish and Portuguese racket sport destinations.",
};

export default function BlogIndexPage() {
  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Club Journal", url: "/blog" }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">Club Journal</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318]">Court Insights &amp; Travel Guides</h1>
            <p className="text-gray-500 text-sm mt-3">
              Elite guidance on racket select, playing strategy, destination reviews, and B2B court yields.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <div key={post.slug} className="bg-white border border-[#E2E1D9] group flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="relative aspect-video overflow-hidden bg-gray-200 border-b border-[#E2E1D9]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-102"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">
                      {post.date} • {post.readTime}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="hover:underline block">
                      <h3 className="font-serif text-xl font-bold text-[#0C2318] line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-[#E2E1D9]/60 mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0C2318] hover:text-[#D4AF37] transition mt-4"
                  >
                    Read Journal Entry &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
