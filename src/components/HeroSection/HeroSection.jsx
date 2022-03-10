import React from "react";
import heroImg from "../../assets/images/hero-banner.jfif";
import "./HeroSection.css";
export default function HeroSection() {
  return (
    <div class="hero-img">
      <img src={heroImg} alt="hero-banner" />
      <div class="card-container card-vertical card-shadow">
        <h1 class="card-title">Welcome to Manazone</h1>
        <p>Explore the gaming world</p>
        <a class="btn btn-primary" href="/product-page/product.html">
          Shop now <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}
