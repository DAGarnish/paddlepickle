import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import Link from "next/link";
import { blogPostsData } from "@/data/mockData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Padel Pickle HQ Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Club Journal", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={{ links: breadcrumbLinks }} />
      {/* Blog Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.image,
            "datePublished": "2026-06-12",
            "description": post.excerpt,
            "author": {
              "@type": "Organization",
              "name": "Padel Pickle HQ"
            }
          })
        }}
      />

      <Header />
      <CartDrawer />

      <main className="flex-grow bg-[#F9F9F5] py-16 font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/blog" className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
            &larr; Back to Journal
          </Link>

          <article className="mt-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs text-gray-500 uppercase">{post.date} • {post.readTime}</span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0C2318] leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-gray-600 italic border-l-2 border-[#D4AF37] pl-4">
                {post.excerpt}
              </p>
            </div>

            <div className="aspect-video relative overflow-hidden bg-gray-100 border border-[#E2E1D9]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none text-[#1A1D1A] text-sm leading-relaxed space-y-6">
              <p>{post.content}</p>
              <p>
                Our active racket travel team structures complete tournament training packages, matching premium accommodation spaces with FIP-certified local coaches. Whether you choose our Marbella breaks or Quinta do Lago clinics, you will receive specialized support designed to elevate your court positioning.
              </p>
              <p>
                For further specifications, feel free to review our holiday portfolios or request a custom proposal directly through our site.
              </p>
            </div>
          </article>

          {/* Quick CTA panel */}
          <div className="mt-16 bg-[#0C2318] text-white p-8 border border-[#D4AF37] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-serif text-[#D4AF37] text-xl font-bold">Ready to Elevate Your Racket Skills?</h3>
              <p className="text-xs text-gray-400 mt-1">Book a custom coaching package in Spain or Portugal today.</p>
            </div>
            <Link
              href="/quote"
              className="bg-[#D4AF37] text-[#0C2318] border border-[#D4AF37] px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white hover:border-white transition"
            >
              Get Custom Quote
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
