import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/MainPages/Main";
// import About from "./components/MainPages/About";
import Contact from "./components/MainPages/Contact";
import Calculator from "./components/Pages/Calculator";
import Metrics from "./components/Pages/Metrics";
import CurrencyConverter from "./components/Pages/Currency/Converter/CurrencyConverter";
import Bmi from "./components/Pages/Bmi/Bmi";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-navbar">
          <Routes>
            {/* NAV BAR LINKS */}
            <Route path="/" element={<Main />} />
            <Route path="/Home" element={<Main />} />
            {/* <Route path="/About" element={<About />} /> */}
            <Route path="/Contact" element={<Contact />} />

            {/* APP LINKS */}
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Metrics" element={<Metrics />} />
            <Route path="/Currency" element={<CurrencyConverter />}></Route>
            <Route path="/Bmi" element={<Bmi />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
