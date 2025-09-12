import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div style={{ textAlign: "right", padding: "0.5rem" }}>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          height: "2rem", // 🔹 smaller button
          width: "6rem", // 🔹 smaller button
          padding: "0.3rem 0.7rem", // 🔹 smaller button
          fontSize: "0.8rem", // 🔹 smaller text
          border: "none",
          borderRadius: "6px",
          backgroundColor: "var(--button-bg)",
          color: "var(--button-text)",
          cursor: "pointer",
        }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

export default ThemeToggle;
