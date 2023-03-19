import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Navigationbar } from "./Components/Navigationbar";

export default function App() {
  return (
    <div className="font-Rubik flex items-center justify-center bg-BgWebsite h-screen w-full ">
      <div className="h-[95%] w-[90%]">
        <Navigationbar />
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
