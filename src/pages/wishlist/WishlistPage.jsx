import React from "react";
import ProductCard from "../../components/ProductCard";
import ProductGrid from "../../components/ProductGrid";
import "./wishlistPage.css";
export default function WishlistPage() {
  return (
    <main class="main-content">
      <h1 class="page-title">My Wishlist</h1>

      <div class="wishlist-section">
        <ProductGrid />
      </div>
    </main>
  );
}
