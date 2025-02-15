import React,{useState} from "react";
import { Link } from "react-router-dom";
import avatar from "../Assests/CH MOHAN.jpg"
import { useNavigate } from "react-router-dom";
export default function Appbar({handleTheme,theme}) {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    
    // List of pages to search
    const navLinks = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contactme" },
      { name: "Resume", path: "/resume" }
    ];
  
    // Handle search submission
    const handleSearch = (e) => {
      e.preventDefault();
      const found = navLinks.find((link) =>
        link.name.toLowerCase().includes(search.toLowerCase())
      );
      if (found) {
        navigate(found.path);
      } else {
        alert("Check your spelling and try again!");
      }
      setSearch(""); // Clear search input
    };
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top ">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    {/* Brand */}

    <div className="avatar-container">
            <img 
              src={avatar} 
              alt="User Avatar" 
              className="rounded-circle"
            />
          </div>
    <a className="navbar-brand text-white" href="#">CH MOHAN</a>

    {/* Toggler for small screens */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar links */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto"> {/* Centering the nav items */}
        <li className="nav-item">
          <Link className="nav-link text-white active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white active" to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white active" to="/services">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white active" to="/contactme">Contact Me</Link>
        </li>
        
      <Link to="/darkmode" className="toggle-btn" onClick={handleTheme}> {theme === "dark" ? "🌙 Dark Mode":"☀️ Light Mode" }
      </Link>
      </ul>
    </div>

    {/* Search Form */}
    <form className="d-flex" onClick={handleSearch}>
      <input className="form-control me-2" type="search"  value={search} onChange={(e)=>setSearch(e.target.value)}placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light" type="submit" >Search</button>
    </form>
  </div>
</nav>

    </>
  );
}
