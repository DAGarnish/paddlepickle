# Padel Pickle HQ Web Platform

A premium, SEO-first ecommerce and lead-generation website built for **Padel Pickle HQ** (`padelpicklehq.com`). It serves British players seeking luxury active holidays, high-end equipment, and court design/installation solutions in Spain and Portugal.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 & Vanilla CSS variables
- **State Management:** React Context (Cart, Wishlist)
- **Deployment:** Vercel Ready

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
```

---

## Key Features

1. **Editorial Design:** Premium color palette inspired by Wimbledon (Forest Green, Soft Cream, Gold) and elegant typography (Playfair Display & Outfit).
2. **SEO-First:** Embedded title, description, and canonical mappings for high-value keywords. Injected JSON-LD schemas for `Organization`, `Product`, `Service`, `FAQPage`, and `BreadcrumbList`.
3. **Wishlist & Cart Drawers:** Fluid client-side state hooks using React Context.
4. **Three-Path Conversion Funnels:** Directly routes users to Booking, Purchasing, or Requesting Court Consultations.

---

## Phase 2 Integration Suggestions
- **E-Commerce Backend:** Connect `CartContext` to headless Shopify (Storefront API) or WooCommerce REST API.
- **CRM Integration:** Send quote requests and contact form details directly to HubSpot, Salesforce, or Mailchimp using Next.js Server Actions.
- **AI-Assisted Search:** Implement Vercel AI Gateway with `google/gemini-3.5-flash` to offer a luxury travel concierge chatbot assisting British players in selecting their holiday destinations.
