import React from "react";
import { ProductGrid } from "../../components/index";
import "./WishlistPage.css";
export function WishlistPage() {
  return (
    <main class="main-content">
      <h1 class="page-title">My Wishlist</h1>

      <div class="wishlist-section">
        <ProductGrid />
      </div>
    </main>
  );
}
