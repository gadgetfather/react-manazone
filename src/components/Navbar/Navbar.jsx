import React from "react";
import "./Navbar.css";
import { useTheme } from "../../context/themeContext";
import { useRouter } from "../../context/routerContext";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { page, setPage } = useRouter();
  const handleDarkMode = () => {
    if (theme) {
      setTheme(false);
      document.body.style.backgroundColor = "rgb(28, 27, 27)";
      document.body.style.transition = "0.1s ease-in-out";
    } else {
      setTheme(true);
      document.body.style.backgroundColor = "#fff";
    }
  };
  return (
    <nav>
      <div
        className={
          theme ? "navbar light-theme__navbar" : "navbar dark-theme__navbar"
        }
      >
        <a
          class="brand-name"
          onClick={() => setPage("")}
          // href="/index.html"
        >
          <h1>Manazone</h1>
        </a>
        <div class="search-bar-desktop">
          <i class="fas fa-search"></i>
          <input type="search" />
        </div>
        <div class="action-icons">
          <a
            // href="/Login-page/login-page/login.html"
            onClick={() => setPage("login")}
            class="icon-container"
          >
            <i class="fas fa-user"></i>
            <span class="icon-badge">0</span>
          </a>
          <a
            // href="/cart-page/cart.html"
            onClick={() => setPage("cart")}
            class="icon-container"
          >
            <i class="fas fa-shopping-cart"></i>
            <span class="icon-badge">0</span>
          </a>
          <a
            // href="/wishlist/wishlist.html"
            onClick={() => setPage("wishlist")}
            class="icon-container"
          >
            <i class="fas fa-heart"></i>
            <span class="icon-badge">0</span>
          </a>
          <button onClick={handleDarkMode} class="icon-container">
            <i class={theme ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>
      </div>
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="search" />
      </div>
    </nav>
  );
}
