import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Apply from './Pages/Apply';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Admin from './Pages/Admin';
import Register from './Pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;