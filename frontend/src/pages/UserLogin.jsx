import React from "react";
import "../styles/form.css";

const UserLogin = () => {
  return (
    <div className="form-container">
      <h2>User Login</h2>
      <form>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
