import React from "react";
import "./HomePage.css";
import {
  HeroSection,
  CategoriesCard,
  PromotionalCard,
} from "../../components/index";

export function HomePage() {
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
