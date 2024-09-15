import { useState } from "react";
import { Routes,Route } from "react-router-dom";
// css style start
import "./assets/Style/web.assets_web.min.css";
import ActionPages from "./pages/ActionPages";
import Context from "./context/Context";

function App() {
  return (
    <>
      <Context>
        <Routes>
          <Route path="/" element={<ActionPages />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;
