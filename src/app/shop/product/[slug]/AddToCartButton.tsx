"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    inStock: boolean;
  };
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => product.inStock && addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category
        })}
        disabled={!product.inStock}
        className={`flex-1 text-center py-4 text-xs font-bold uppercase tracking-wider transition ${
          product.inStock
            ? "bg-[#0C2318] text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0C2318] cursor-pointer"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        {product.inStock ? "Add to Basket" : "Out of Stock"}
      </button>

      <button
        onClick={() => alert("Added to your wishlist preferences!")}
        className="border border-[#E2E1D9] p-4 text-[#0C2318] hover:bg-gray-50 transition"
        aria-label="Wishlist"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddToCartButton;
