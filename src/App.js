import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import {Routes, Route} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home";
import Products from "./components/Products"
import Reviews from "./components/Reviews";


function App() {
  return (
    <div className="">
      <Navbar />
      <Section />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
