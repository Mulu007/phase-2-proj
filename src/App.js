import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import {Routes, Route} from "react-router-dom"
import About from "./components/About"


function App() {
  return (
    <div className="">
      <Navbar />
      <Section />
    </div>
  );
}

export default App;
