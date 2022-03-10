import React from "react";
import {
  CartPage,
  HomePage,
  LoginPage,
  ProductPage,
  SignupPage,
  WishlistPage,
} from "./pages/index";
import { useTheme } from "./context/themeContext";
function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div class={theme ? "page-container " : "page-container dark-theme"}>
      {/* <ProductPage /> */}
      {/* <WishlistPage /> */}
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
      {/* <CartPage /> */}
    </div>
  );
}

export default App;
