import React from "react";
import "../styles/form.css";

const UserRegister = () => {
  return (
    <div className="form-container">
      <h2 style={{ fontSize: "2rem" }}>User sign up </h2>
      <p
        style={{
          marginBottom: "1rem",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#555",
        }}
      >
        {" "}
        Switch as a Food Partner <a href="/food-partner/register">here</a>
      </p>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
        <h5 style={{ marginTop: "1rem", width: "100%", textAlign: "center" }}>
          Already have an account? <a href="/user/login">Sign in</a>
        </h5>
      </form>
    </div>
  );
};

export default UserRegister;
