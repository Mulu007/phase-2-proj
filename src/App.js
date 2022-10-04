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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
