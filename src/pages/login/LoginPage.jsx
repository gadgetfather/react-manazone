import React from "react";
import "./loginPage.css";
export default function LoginPage() {
  return (
    <main class="main-content_login">
      <div class="login-container">
        <h1>Login</h1>
        <label for="username">Email address:</label>
        <input class="block-inputs" placeholder="jack@gmail.com" type="text" />
        <label for="password">password:</label>
        <input class="block-inputs" placeholder="*****" type="password" />
        <p>
          <input type="checkbox" /> Remember me
        </p>
        <a class="btn-forgot" href="#">
          Forgot your password?
        </a>
        <a class="btn-login btn btn-primary" href="#">
          Login
        </a>
        <a class="btn-sign-up" href="/signup-page/signup.html">
          Create New Account <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </main>
  );
}
