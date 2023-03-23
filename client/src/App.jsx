import React from "react";
import { createRoot } from "react-dom/client";
import { Footer } from "./Components/shared/Footer";
import { Navigationbar } from "./Components/shared/Navigationbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import "./App.css";
import { Auth } from "./Components/auth/Auth";

export default function App() {
  return (
    <div className="font-Rubik bg-BgWebsite min-h-screen w-full ">
      <div className=" flex flex-col items-center justify-center py-[1rem] md:py-[2rem]">
        <Router>
          <Navigationbar />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <section className="w-[95%]">
            <br />
            <br />
            <br />
            <Footer />
            <center>Maded By Me</center>
          </section>
        </Router>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
