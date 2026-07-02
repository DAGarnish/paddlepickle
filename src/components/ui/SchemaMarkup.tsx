import React from "react";

interface SchemaMarkupProps {
  type: "Organization" | "Product" | "Service" | "FAQ" | "Breadcrumb";
  data: Record<string, any>;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  let schemaData: Record<string, any> = {};

  if (type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Padel Pickle HQ",
      "url": "https://padelpicklehq.com",
      "logo": "https://padelpicklehq.com/logo-og.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-7700-900077",
        "contactType": "customer service",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://instagram.com/padelpicklehq",
        "https://twitter.com/padelpicklehq"
      ]
    };
  } else if (type === "Product") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data.name,
      "image": data.image,
      "description": data.description,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": data.price,
        "availability": data.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "url": `https://padelpicklehq.com/shop/product/${data.id}`
      }
    };
  } else if (type === "Service") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": data.title,
      "provider": {
        "@type": "Organization",
        "name": "Padel Pickle HQ"
      },
      "description": data.subtitle || data.description,
      "areaServed": ["ES", "PT", "GB"]
    };
  } else if (type === "FAQ") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": (data.faqs || []).map((item: { q: string; a: string }) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };
  } else if (type === "Breadcrumb") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": (data.links || []).map((item: { name: string; url: string }, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://padelpicklehq.com${item.url}`
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;
