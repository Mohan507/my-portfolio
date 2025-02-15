import React from "react";

export default function Footer({ theme }) {
  return (
    <footer
      className={`footer text-center py-3 mt-auto ${
        theme ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="container">
        <p className="mb-2">© {new Date().getFullYear()}  All Rights Reserved |Designed By Chitukula Mohan</p>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={theme ? "text-white fs-4" : "text-dark fs-4"}
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={theme ? "text-white fs-4" : "text-dark fs-4"}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={theme ? "text-white fs-4" : "text-dark fs-4"}
          >
            <i className="fab fa-twitter"></i>
            
          </a>
          <p className="small mb-0">
          Parsigutta, Secunderabad, Hyderabad,Telangana. 500062
        </p>
        </div>
      </div>
    </footer>
  );
}
