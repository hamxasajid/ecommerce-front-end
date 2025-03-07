import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./assets/Component/Nav";
import Home from "./assets/Component/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
