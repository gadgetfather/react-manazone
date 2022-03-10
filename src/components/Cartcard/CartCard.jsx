import React from "react";
import "./CartCard.css";
export function CartCard() {
  return (
    <div class="cart-item card-container card-shadow">
      <div class="img-box">
        <img src="https://picsum.photos/480/720" alt="" />
      </div>
      <div class="card-detail">
        <h1 class="card-title">Call of Duty Black Ops</h1>
        <p class="card-description">
          Call of Duty: Black Ops is a 2010 first-person shooter game developed
          by Treyarch and published by Activision.{" "}
        </p>
        <h2 class="card-subtitle">₹1499</h2>
        <span>
          <label for="qty">Qty:</label>
          <select name="qty" id="qty">
            <option value="volvo">1</option>
            <option value="saab">2</option>
            <option value="opel">3</option>
            <option value="audi">4</option>
          </select>
        </span>

        <div class="card-action-button">
          <button class="btn btn-text-secondary">
            <i class="fas fa-trash"></i>
            Remove
          </button>
          <button class="btn btn-text-secondary">
            <i class="fas fa-heart"></i>
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
