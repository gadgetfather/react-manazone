import React from "react";

export function PromotionalCard() {
  return (
    <div class="card-container card-vertical card-shadow">
      <div class="product-img-box">
        <img
          class="card-img"
          src="https://picsum.photos/200"
          alt="promotional"
        />
      </div>
      <h1 class="card-title">Farcry6</h1>
      <p class="card-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, et,
        optio quaerat nam reprehenderit quisquam nihil
      </p>
      <a href="#">
        Know More <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}
