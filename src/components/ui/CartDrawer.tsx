"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity } = useCart();

  if (!isCartOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={toggleCart}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F9F9F5] border-l border-[#E2E1D9] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#E2E1D9] flex items-center justify-between bg-[#0C2318] text-white">
            <h2 className="font-serif text-2xl font-bold text-[#D4AF37]">Your Selection</h2>
            <button
              onClick={toggleCart}
              className="text-white/80 hover:text-white text-2xl"
              aria-label="Close cart"
            >
              &times;
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 font-medium mb-4">Your basket is empty.</p>
                <button
                  onClick={toggleCart}
                  className="bg-[#0C2318] text-white px-6 py-2 rounded-none hover:bg-black transition"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-[#E2E1D9] pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover bg-white border border-[#E2E1D9]"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-base text-[#0C2318] line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 capitalize">{item.category.replace("-", " ")}</p>
                    <p className="text-[#D4AF37] font-semibold mt-1">€{item.price.toFixed(2)}</p>
                    
                    {/* Quantity Modifiers */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 border border-[#E2E1D9] flex items-center justify-center text-sm hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="text-sm px-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 border border-[#E2E1D9] flex items-center justify-center text-sm hover:bg-gray-100"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-700 underline ml-auto hover:text-red-900"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#E2E1D9] bg-[#F0EFEA] space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="font-serif text-[#0C2318]">Total:</span>
                <span className="text-[#0C2318]">€{total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500">
                Priced in Euros. Fast shipping and custom clearance to the UK included.
              </p>
              
              {/* Checkout CTA */}
              <button
                onClick={() => {
                  alert("Redirecting to premium secure payment gateway (Stripe/Shopify setup)...");
                }}
                className="w-full bg-[#0C2318] text-[#D4AF37] border border-[#D4AF37] py-3 text-center uppercase tracking-wider font-semibold hover:bg-[#D4AF37] hover:text-[#0C2318] transition duration-300"
              >
                Proceed to Secure Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CartDrawer;
