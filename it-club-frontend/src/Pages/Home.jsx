import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">IT Club AIU</h1>
          <p className="hero-subtitle">
            Empowering students with technology skills and innovation through community, projects, and events.
          </p>
          <div className="hero-buttons">
            <Link to="/apply" className="btn btn-primary btn-lg">
              Join Now
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            We aim to create a collaborative environment where technology enthusiasts can learn, 
            share knowledge, and develop practical skills for the ever-evolving tech industry.
          </p>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <div className="card-img" style={{height: "180px", background: "var(--primary-color)"}}></div>
              <div className="card-body">
                <h3>Workshops & Events</h3>
                <p>
                  Regular workshops, hackathons, and tech talks to enhance your skills and knowledge.
                </p>
                <Link to="/gallery" className="btn btn-outline mt-2">
                  Explore Events
                </Link>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img" style={{height: "180px", background: "var(--secondary-color)"}}></div>
              <div className="card-body">
                <h3>Projects</h3>
                <p>
                  Collaborate on real-world projects to build your portfolio and gain practical experience.
                </p>
                <Link to="/about" className="btn btn-outline mt-2">
                  View Projects
                </Link>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img" style={{height: "180px", background: "var(--accent-color)"}}></div>
              <div className="card-body">
                <h3>Community</h3>
                <p>
                  Join a community of like-minded individuals passionate about technology and innovation.
                </p>
                <Link to="/apply" className="btn btn-outline mt-2">
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title" style={{color: "white"}}>Our Impact</h2>
          <div className="grid grid-4 text-center">
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div>
              <div className="stat-number">20+</div>
              <div className="stat-label">Events Per Year</div>
            </div>
            <div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Ongoing Projects</div>
            </div>
            <div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Members Say</h2>
          <div className="grid grid-2">
            <div className="testimonial">
              <p className="testimonial-text">
                "Joining the IT Club was one of the best decisions I made in my university career. I've learned so much and made great connections!"
              </p>
              <div className="testimonial-author">Aisha K.</div>
              <div className="testimonial-position">Computer Science, 3rd year</div>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "The workshops and hackathons organized by the IT Club gave me practical experience that helped me land my first internship."
              </p>
              <div className="testimonial-author">Mark J.</div>
              <div className="testimonial-position">Software Engineering, 4th year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Ready to Join Our Community?</h2>
          <Link to="/apply" className="btn btn-primary btn-lg">
            Apply to the IT Club
          </Link>
        </div>
      </section>
    </div>
  );
}