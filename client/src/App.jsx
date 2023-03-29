import React, { Suspense, lazy, useState } from "react";
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

export default function App() {
  const [Auth, setAuth] = useState(false);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen w-full bg-BgWebsite font-Rubik ">
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
                  element={Auth ? <Navigate to="/" /> : <FramerTest />}
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
    </QueryClientProvider>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
