import { useState } from "react";
import "./App.css";
import "./styles/variables.css";
import "./styles/form.css";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeToggle />
      <AppRoutes />
    </>
  );
}

export default App;
