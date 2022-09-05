import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Animaux from "./Pages/Animaux";
import Paysage from "./Pages/Paysage";
import Portrait from "./Pages/Portrait";
import Naissance from "./Pages/Naissance";
import Bateme from "./Pages/Bateme";
import Mariage from "./Pages/Mariage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animaux" element={<Animaux />} />
        <Route path="/paysage" element={<Paysage />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/naissance" element={<Naissance />} />
        <Route path="/bateme" element={<Bateme />} />
        <Route path="/mariage" element={<Mariage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
