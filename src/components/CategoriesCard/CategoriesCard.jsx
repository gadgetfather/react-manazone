import React from "react";
import { useRouter } from "../../context/routerContext";

export function CategoriesCard() {
  const { setPage } = useRouter();
  return (
    <div class="card-container card-vertical card-shadow">
      <div class="product-img-box">
        <img
          class="card-img"
          src="https://picsum.photos/200"
          alt="categories"
        />
      </div>
      <h1 class="card-title">Action</h1>
      <a
        onClick={() => setPage("product")}
        class="btn btn-primary"
        // href="/product-page/"
      >
        Explore <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}
