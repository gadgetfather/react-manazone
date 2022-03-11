import React from "react";
import heroImg from "../../assets/images/hero-banner.jfif";
import { useRouter } from "../../context/routerContext";
import "./HeroSection.css";
export function HeroSection() {
  const { setPage } = useRouter();
  return (
    <div class="hero-img">
      <img src={heroImg} alt="hero-banner" />
      <div class="card-container card-vertical card-shadow">
        <h1 class="card-title">Welcome to Manazone</h1>
        <p>Explore the gaming world</p>
        <a
          class="btn btn-primary"
          onClick={() => setPage("product")}
          // href="/product-page/product.html"
        >
          Shop now <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}
