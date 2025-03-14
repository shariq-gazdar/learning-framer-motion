import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CostumeCursor from "./components/CostumeCursor";

function App() {
  const [count, setCount] = useState(0);

  return <CostumeCursor />;
}

export default App;
