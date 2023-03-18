import React from "react";
import { createRoot } from "react-dom";

export default function App() {
  return <div>App</div>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
