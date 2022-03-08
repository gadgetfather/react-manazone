import React from "react";
import "./signupPage.css";

export default function SignupPage() {
  return (
    <main class="main-content_signup">
      <div class="form-container">
        <h1>Signup</h1>
        <label for="username">Email address:</label>
        <input class="block-inputs" placeholder="jack@gmail.com" type="text" />
        <label for="password">password:</label>
        <input class="block-inputs" placeholder="*****" type="text" />
        <p>
          <input type="checkbox" /> I accept all Terms & Conditions
        </p>
        <a class="btn-submit btn btn-primary" href="#">
          Create New Account
        </a>
        <a
          class="btn-submit-secondary"
          href="/Login-page/login-page/login.html"
        >
          Already have an account <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </main>
  );
}
