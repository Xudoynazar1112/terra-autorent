import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainWrapper = (routes) => {
  return (
    <div className="flex flex-col w-full">
      <ScrollRestoration />
      <Navbar />
      <main className="flex flex-col items-center">
        <Outlet /> {/* Render child routes here */}
      </main>
      <Footer />
    </div>
  );
};

export default MainWrapper;
