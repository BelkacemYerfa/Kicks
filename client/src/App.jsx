import React, { Suspense, lazy, useState } from "react";
import { Footer } from "./Components/shared/Footer";
import { Navigationbar } from "./Components/shared/Navigationbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
const AuthPage = lazy(() => import("./Pages/AuthPage"));
import "./App.css";
import { FramerTest } from "./Pages/FramerTest";
import { useSelector } from "react-redux";
import { PrivateRoutes } from "./private/PrivateRoutes";
const Product = lazy(() => import("./Pages/Product"));

export default function App() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="min-h-screen w-full bg-BgWebsite font-Rubik ">
      <div className=" flex flex-col items-center justify-center py-[1rem] md:py-[2rem]">
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Navigationbar />
            <br />
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/framer" element={<FramerTest />} />
                <Route path="/product/:id" element={<Product />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
            <section className="w-[95%] 2xl:w-[85vw]">
              <br />
              <br />
              <br />
              <Footer />
              <center>
                Made By : <span> </span>
                <Link to="https://github.com/BelkacemYerfa">
                  <u>Belkacem Yerfa</u>
                </Link>
              </center>
            </section>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}
