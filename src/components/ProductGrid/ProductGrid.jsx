import React from "react";
import { ProductCard } from "../index";
import "./ProductGrid.css";

export default function ProductGrid() {
  return (
    <div class="product-section">
      {[1, 2, 3, 4, 5].map((item) => (
        <ProductCard />
      ))}
    </div>
  );
}
