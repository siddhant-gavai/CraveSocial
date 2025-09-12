import React from "react";
import "../styles/form.css";

const UserRegister = () => {
  return (
    <div className="form-container">
      <h2>User Register</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
