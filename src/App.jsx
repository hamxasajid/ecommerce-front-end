import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./assets/Component/Nav";
import Home from "./assets/Component/Home";
import Allproducts from "./assets/Allproducts/Allproducts";
import Footer from "./assets/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
