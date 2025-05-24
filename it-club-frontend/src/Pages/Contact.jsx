import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would add your API call to submit the form
      // For example:
      // await axios.post('/api/contact', formData);
      
      setMessage({ type: "success", text: "Your message has been sent! We'll get back to you soon." });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Have questions about the IT Club? We're here to help!
          </p>
        </div>

        <div className="grid grid-2">
          {/* Contact Information */}
          <div className="card" style={{background: "linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))", color: "white"}}>
            <div className="card-body">
              <h2 className="mb-4">Contact Information</h2>
              
              <div className="mb-4">
                <div className="flex mb-2">
                  <span style={{marginRight: "10px"}}>📍</span>
                  <div>
                    <h3 className="mb-1">Address</h3>
                    <p>University Campus, Building A, Room 123</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex mb-2">
                  <span style={{marginRight: "10px"}}>📧</span>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p>contact@itclub.edu</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex mb-2">
                  <span style={{marginRight: "10px"}}>📱</span>
                  <div>
                    <h3 className="mb-1">Phone</h3>
                    <p>+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-5">
                <h3 className="mb-2">Follow Us</h3>
                <div className="flex" style={{gap: "15px"}}>
                  <a href="#" className="social-link">
                    <span style={{fontSize: "1.5rem"}}>📘</span>
                  </a>
                  <a href="#" className="social-link">
                    <span style={{fontSize: "1.5rem"}}>📸</span>
                  </a>
                  <a href="#" className="social-link">
                    <span style={{fontSize: "1.5rem"}}>🐦</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <div className="card-body">
              {message && (
                <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"}`}>
                  {message.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control"
                  ></textarea>
                </div>
                
                <div style={{textAlign: "right"}}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}