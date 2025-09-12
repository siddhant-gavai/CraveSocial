import React from "react";
import "../styles/form.css";

const FoodPartnerRegister = () => {
  return (
    <div className="form-container">
      <h2>Food Partner Register</h2>
      <form>
        <input type="text" placeholder="Restaurant Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FoodPartnerRegister;
