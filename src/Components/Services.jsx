import React from "react";
import webdevelopment from "../Assests/WebDevelopment.png";
import uiux from "../Assests/ui.png";
import appdevelopment from "../Assests/developer.png";
import responsive from "../Assests/cross-platform.png";

export default function Services() {
  // Array of services to simplify rendering
  const services = [
    { img: webdevelopment, title: "Web Development",description:"Crafting responsive and dynamic websites for a seamless user experience" },
    { img: uiux, title: "UI/UX Design",description: "Designing user-friendly interfaces that enhance user engagement and satisfaction."  },
    { img: appdevelopment, title: "App Development" , description: "Building high-performance applications tailored to your business needs." },
    { img: responsive, title: "Responsive Design", description: "Ensuring your website looks great and functions well on all devices." }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center  textprimary mb-4"> Services</h2>
      <div className="row justify-content-center">
        {services.map((service, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div
              className="card text-center p-3 shadow-lg"
              style={{
                width: "100%",
                height: "280px",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)", 
                transition: "transform 0.3s ease-in-out"
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="img-fluid mx-auto d-block"
                style={{ width: "80px", height: "80px", marginBottom: "15px" }}
              />
              <p className="card-text fw-bold">{service.title}</p>
              <p >{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
