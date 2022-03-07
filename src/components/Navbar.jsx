import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div class="navbar">
        <a class="brand-name" href="/index.html">
          <h1>Manazone</h1>
        </a>
        <div class="search-bar-desktop">
          <i class="fas fa-search"></i>
          <input type="search" />
        </div>
        <div class="action-icons">
          <a href="/Login-page/login-page/login.html" class="icon-container">
            <i class="fas fa-user"></i>
            <span class="icon-badge">0</span>
          </a>
          <a href="/cart-page/cart.html" class="icon-container">
            <i class="fas fa-shopping-cart"></i>
            <span class="icon-badge">0</span>
          </a>
          <a href="/wishlist/wishlist.html" class="icon-container">
            <i class="fas fa-heart"></i>
            <span class="icon-badge">0</span>
          </a>
        </div>
      </div>
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="search" />
      </div>
    </nav>
  );
}
