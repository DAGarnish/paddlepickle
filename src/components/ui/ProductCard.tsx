"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/data/mockData";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const priceToDisplay = product.isSale && product.salePrice ? product.salePrice : product.price;

  return (
    <div className="bg-white border border-[#E2E1D9] group flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition duration-300 font-sans">
      {/* Product Image Area */}
      <div className="relative overflow-hidden aspect-square bg-[#F0EFEA] border-b border-[#E2E1D9]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Sale / Stock Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.isSale && (
            <span className="bg-[#D4AF37] text-[#0C2318] text-[10px] font-bold uppercase tracking-wider px-2 py-1">
              Sale
            </span>
          )}
          {!product.inStock && (
            <span className="bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
              Out of stock
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-[#0C2318] p-2 rounded-full shadow-sm hover:shadow transition duration-200 z-10"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isWishlisted ? "#D4AF37" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isWishlisted ? "#D4AF37" : "currentColor"}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>

        {/* Quick Add Overlay on Desktop */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent flex justify-center">
          <button
            onClick={() => product.inStock && addToCart({
              id: product.id,
              name: product.name,
              price: priceToDisplay,
              image: product.image,
              category: product.category
            })}
            disabled={!product.inStock}
            className={`w-full bg-[#D4AF37] text-[#0C2318] py-2.5 text-xs font-bold uppercase tracking-wider transition ${
              product.inStock
                ? "hover:bg-white hover:text-black cursor-pointer"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            {product.inStock ? "Add to Basket" : "Out of Stock"}
          </button>
        </div>
      </div>

      {/* Description / Pricing */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            {product.sport} • {product.level}
          </span>
          <Link href={`/shop/product/${product.id}`} className="hover:underline">
            <h3 className="font-serif font-bold text-lg text-[#0C2318] line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-500 text-xs mt-1 line-clamp-2">{product.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.isSale && product.salePrice ? (
              <>
                <span className="text-base font-bold text-[#0C2318]">€{product.salePrice.toFixed(2)}</span>
                <span className="text-xs text-gray-400 line-through">€{product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-base font-bold text-[#0C2318]">€{product.price.toFixed(2)}</span>
            )}
          </div>
          
          {/* Mobile Direct Add Trigger */}
          <button
            onClick={() => product.inStock && addToCart({
              id: product.id,
              name: product.name,
              price: priceToDisplay,
              image: product.image,
              category: product.category
            })}
            disabled={!product.inStock}
            className="md:hidden bg-[#0C2318] text-[#D4AF37] border border-[#D4AF37] p-2 hover:bg-[#D4AF37] hover:text-[#0C2318]"
            aria-label="Add item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
