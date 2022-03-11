import React from "react";
import {
  CartPage,
  HomePage,
  LoginPage,
  ProductPage,
  SignupPage,
  WishlistPage,
} from "./pages/index";
import { Navbar } from "./components/index";
import { useTheme } from "./context/themeContext";
import { useRouter } from "./context/routerContext";

function App() {
  const { theme, setTheme } = useTheme();
  const { page } = useRouter();
  return (
    <div class={theme ? "page-container " : "page-container dark-theme"}>
      <Navbar />
      {page === "product" ? (
        <ProductPage />
      ) : page === "wishlist" ? (
        <WishlistPage />
      ) : page === "cart" ? (
        <CartPage />
      ) : page === "login" ? (
        <LoginPage />
      ) : page === "signup" ? (
        <SignupPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
