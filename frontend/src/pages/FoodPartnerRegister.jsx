import React from "react";
import "../styles/form.css";

const FoodPartnerRegister = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Food Partner Sign Up</h2>

      <p className="form-switch">
        Switch as a <a href="/user/register">User</a>
      </p>

      <form className="form">
        <label>Business Name</label>
        <input type="text" placeholder="Chaha House" />

        <div className="form-row">
          <div className="form-group">
            <label>Contact Name</label>
            <input type="text" placeholder="Onkar Shinde" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="number" placeholder="+91 1212..." />
          </div>
        </div>

        <label>Email</label>
        <input type="email" placeholder="onkar@gmail.com" />

        <label>Password</label>
        <input type="password" placeholder="Create Password" />

        <label>Address</label>
        <input type="text" placeholder="123 Mahatma Nagar" />

        <button type="submit" className="btn">
          Create Partner Account
        </button>

        <p className="form-footer">
          Already have an account? <a href="/food-partner/login">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default FoodPartnerRegister;
