import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Navigationbar } from "./Components/Navigationbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";

export default function App() {
  return (
    <div className="font-Rubik bg-BgWebsite min-h-screen w-full ">
      <div className=" flex flex-col items-center justify-center py-[1rem] md:py-[2rem]">
        <Router>
          <Navigationbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
