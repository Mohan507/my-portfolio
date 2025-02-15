import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { ProgressBar } from "react-bootstrap"; // Install react-bootstrap for this
import image from "../Assests/CH MOHAN.jpg";
export default function About() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        {/* Left Side - Full Height Profile Image */}
        <div className="col-md-6 p-5 d-flex justify-content-center align-items-center">
          <motion.img
            src={image} // Replace with your actual image path
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              border: "5px solid white",
              background: "transparent",
            }}
          />
        </div>

        {/* Right Side - Skills Section */}
        <div className="col-md-6 p-5">
          <h2 className="mb-3 fw-bold textprimary">About Me</h2>
          <h3 className="mb-4 text-secondary">A Few Words About Me</h3>
          <p className="text-success">
            With 6 years of experience in ReactJS development, I specialize in transforming ideas into reality.
            Let’s bring your vision to life and give your business a fresh, creative start today.
          </p>

        

          {renderSkill("ReactJS", 5, <FaReact className="text-info me-2" size={24} />)}
          {renderSkill("JavaScript (ES6+)", 4.5, <FaJs className="text-warning me-2" size={24} />)}
          {renderSkill("Node.js", 4, <FaNodeJs className="text-success me-2" size={24} />)}
          {renderSkill("MySql", 4.0, <FaDatabase className="text-danger me-2" size={24} />)}
          {renderSkill("CSS", 4.5, <FaDatabase className="text-danger me-2" size={24} />)}
          {renderSkill("HTML%", 4.5, <FaDatabase className="text-danger me-2" size={24} />)}
        </div>
      </div>
    </div>
  );
}

// Function to render skills with icons and progress bars
function renderSkill(name, rating, icon) {
  const percentage = (rating / 5) * 100; // Convert rating to percentage
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h5 className="d-flex align-items-center">{icon} {name}</h5>
      <ProgressBar now={percentage} label={`${rating} / 5`} />
    </motion.div>
  );
}
