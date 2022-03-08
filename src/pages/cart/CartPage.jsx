import React from "react";
import CartCard from "../../components/CartCard";
import "./cartPage.css";
export default function CartPage() {
  return (
    <main className="main-content_cart">
      <div class="cart-total card-container card-shadow">
        <h1 class="">Price-details</h1>
        <span class="pricing-details">
          <spanc class="product-names">
            <p>Price</p>
            <p>Discount</p>
            <p>Delivery Charges</p>
            <h3 class="breakr-top">Total Amount</h3>
          </spanc>
          <span class="product-prices">
            <p>₹6000</p>
            <p>₹1000</p>
            <p>₹200</p>
            <p class="breakr-top">₹5200</p>
          </span>
        </span>
        <button class="btn btn-primary">Proceed to buy</button>
      </div>
      {[1, 2, 3, 4].map((item) => (
        <CartCard />
      ))}
    </main>
  );
}
