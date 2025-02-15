import React from "react";
import { motion } from "framer-motion";
import  imageMohan from "../Assests/CH MOHAN.jpg";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
export default function Homepage() {
  const text = "Hi, I'm CHITUKULA MOHAN";

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side (Text) */}
        <div className="col-md-6">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 3 }}
            style={{ display: "inline-block",fontSize:"2rem",fontWeight:"bold" }}
          >
            {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
          </motion.span>
        ))}
         

          <motion.h4
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-secondary"
          >
            I'm a Full-Stack Developer with a passion for building scalable
            and efficient web applications. Since 2019, I’ve been crafting
            dynamic and user-centric solutions that drive business success.
          </motion.h4>
        </div>

        {/* Right Side (Image) */}
        <div className="col-md-6 text-center">
          <motion.img
            src={imageMohan}
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 3 }}
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        </div>
      </div>
     
      <Services/>

      <About/>
      <Contact/>
    </div>
  );
}
