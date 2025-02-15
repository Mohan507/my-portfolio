import React, { useState } from "react";
import "./App.css";
import Appbar from "./Components/Appbar";
import Homepage from "./Components/Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Darkmode from "./Components/Darkmode";
import Footer from "./Components/Footer";

function App() {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
    document.body.classList.toggle("dark-mode", theme);
  };

  return (
    <div className={`App ${theme ? "dark-mode" : ""}`}>
      <Appbar handleTheme={handleTheme} />
      <main>
        <Routes>
          <Route path="/navbar" element={<Appbar />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactme" element={<Contact />} />
          <Route path="/resume" element={<Appbar />} />
          <Route path="/darkmode" element={<Darkmode />} />
        </Routes>
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
