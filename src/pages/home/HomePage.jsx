import React from "react";
import "./homePage.css";
import HeroSection from "../../components/HeroSection";
import CategoriesCard from "../../components/CategoriesCard";
import PromotionalCard from "../../components/PromotionalCard";
export default function HomePage() {
  return (
    <main class="main-content__home">
      <HeroSection />
      <h1 class="section-title">Categories</h1>
      <div class="promotional-section categories">
        <CategoriesCard />
      </div>
      <h1 class="section-title">Popular Games</h1>
      <div class="promotional-section">
        <PromotionalCard />
      </div>
    </main>
  );
}
