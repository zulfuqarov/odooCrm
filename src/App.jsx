import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// css style start
import "./assets/Style/web.assets_web.min.css";
import ActionPages from "./pages/ActionPages";
import Context from "./context/Context";
import Navbar from "./components/Navbar";
import NavbarBottom from "./components/NavbarBottom";
import CardDetails from "./pages/CardDetails";

function App() {
  return (
    <>
      <Context>
        <Navbar />
        <NavbarBottom />
        <Routes>
          <Route path="/" element={<ActionPages />} />
          <Route path="/:id" element={<CardDetails />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;
