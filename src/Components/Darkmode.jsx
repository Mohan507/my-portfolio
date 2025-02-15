import React, { useState, useEffect } from "react";
import Appbar from "./Appbar";

export default function Darkmode() {
  // Load theme from localStorage or default to light
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme on mount & whenever it changes
  useEffect(() => {
    document.body.className = theme; // Set class on body
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function
  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
  <Appbar handleTheme={handleTheme} theme={theme} />
  
  </>
)

}
