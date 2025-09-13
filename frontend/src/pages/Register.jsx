import React, { useState } from "react";
import "../styles/form.css";

const Register = () => {
  const [role, setRole] = useState("user"); // default user

  return (
    <div className="form-container">
      <h2>Create your account</h2>
      <p>Join to explore and enjoy delicious meals.</p>

      <div className="switch-role">
        <span>Switch: </span>
        <button
          className={role === "user" ? "active" : ""}
          onClick={() => setRole("user")}
        >
          User
        </button>
        <button
          className={role === "partner" ? "active" : ""}
          onClick={() => setRole("partner")}
        >
          Food Partner
        </button>
      </div>

      <form>
        <div className="form-group">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Sign Up</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Already have an account?{" "}
        <a href={role === "user" ? "/user/login" : "/food-partner/login"}>
          Sign in
        </a>
      </p>
    </div>
  );
};

export default Register;
