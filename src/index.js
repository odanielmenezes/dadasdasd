import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/views/main/main";
import { Marte } from "./components/views/marte/marte";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/marte" element={<Marte />} />
    </Routes>
  </BrowserRouter>
);
