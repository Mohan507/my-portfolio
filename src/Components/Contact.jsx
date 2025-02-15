import React,{useState} from "react";

export default function Contact() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[Message,setMessage]=useState("");

const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`${name},${email},${phone},${Message}`);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
}

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-6 bg-light p-5 rounded ">
        <h1 className="text-center mb-3 textprimary">Contact Us</h1>
        <h3 className="text-center mb-4 text-secondary">Want To Get In Touch?</h3>

        {/* Name Input */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <label htmlFor="floatingName">Name</label>
        </div>

        {/* Email Input */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label htmlFor="floatingEmail">Email Address</label>
        </div>

        {/* Phone Input */}
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingPhone"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <label htmlFor="floatingPhone">Phone Number</label>
        </div>

        {/* Message Box */}
        <div className="form-floating mb-4">
          <textarea
            className="form-control"
            id="floatingMessage"
            placeholder="Your Message"
            style={{ height: "150px" }}
            value={Message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <label htmlFor="floatingMessage">Message</label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="  btn btn-success btn-lg w-100" onClick={handleSubmit}>Send Message</button>
        </div>
      </div>
    </div>
  );
}
