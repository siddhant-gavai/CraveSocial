import { useState } from "react";
import "./App.css";
import "./styles/variables.css"; // 🔥 ye line zaroori hai
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
