import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Apply from './Pages/Apply';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Admin from './Pages/Admin';
import AdminLogin from './Pages/AdminLogin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h3 className="footer-heading">IT Club AIU</h3>
                <p className="footer-text">
                  Empowering students with technology skills and fostering innovation.
                </p>
              </div>
              
              <div>
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/apply">Apply</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="footer-heading">Contact</h4>
                <ul className="footer-links">
                  <li>Email: contact@itclub.edu</li>
                  <li>Phone: +996 XXX XXX XXX</li>
                  <li>Address: Ala-Too University</li>
                </ul>
              </div>
              
              <div>
                <h4 className="footer-heading">Follow Us</h4>
                <div className="footer-social">
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
            
            <div className="footer-bottom">
              © {new Date().getFullYear()} IT Club at Ala-Too International University. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;