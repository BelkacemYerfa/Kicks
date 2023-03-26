import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Footer } from "./Components/shared/Footer";
import { Navigationbar } from "./Components/shared/Navigationbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
const AuthPage = lazy(() => import("./Pages/AuthPage"));
import "./App.css";
import { FramerTest } from "./Pages/FramerTest";

export default function App() {
  const user = true;
  return (
    <div className="font-Rubik bg-BgWebsite min-h-screen w-full ">
      <div className=" flex flex-col items-center justify-center py-[1rem] md:py-[2rem]">
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Navigationbar />
            <br />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route
                path="/Test"
                element={user ? <Navigate to="/" /> : <FramerTest />}
              />
            </Routes>
            <section className="w-[95%] 2xl:w-[85vw]">
              <br />
              <br />
              <br />
              <Footer />
              <center>Maded By Me</center>
            </section>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
