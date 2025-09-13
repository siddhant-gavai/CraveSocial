import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        padding: "6px 12px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        background: "var(--btn-bg)",
        color: "var(--btn-text)",
      }}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
