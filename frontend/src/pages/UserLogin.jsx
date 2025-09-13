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
        <h5 style={{ marginTop: "1rem", width: "100%", textAlign: "center" }}>
          Don't have an account? <a href="/user/register">Sign up</a>
        </h5>
      </form>
    </div>
  );
};

export default UserLogin;
