import React from "react";
import "../styles/form.css";

const FoodPartnerLogin = () => {
  return (
    <div className="form-container">
      <h2>Food Partner Login</h2>
      <form>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <h5 style={{ marginTop: "1rem", width: "100%", textAlign: "center" }}>
          Don't have an account? <a href="/food-partner/register">Sign up</a>
        </h5>
      </form>
    </div>
  );
};

export default FoodPartnerLogin;
