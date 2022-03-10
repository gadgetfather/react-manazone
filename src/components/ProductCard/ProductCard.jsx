import React from "react";
import "./ProductCard";
export default function ProductCard() {
  return (
    <div class="card-container product-card">
      <div class="img-container">
        <img class="card-img" src="https://picsum.photos/200/200" alt="..." />
      </div>
      <span class="fav-icon">
        <i class="far fa-heart"></i>
      </span>
      <h1 class="card-title">Product title</h1>
      <h2 class="card-subtitle">price</h2>
      <a class="btn btn-primary" href="#">
        add to cart
      </a>
    </div>
  );
}
