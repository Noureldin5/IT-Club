import React from "react";

export default function About() {
  return (
    <div>
      {/* Header Banner - Simple, like Home page */}
      <section className="hero about-hero">
        <div className="container">
          <h1 className="hero-title">About IT Club</h1>
          <p className="hero-subtitle">
            A community of tech enthusiasts at Ala-Too International University
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About IT Club AIU</h2>
          <div className="section-content">
            <p>
              The IT Club at Ala-Too International University was founded in 2023 by a group of passionate students 
              who wanted to create a community dedicated to technological innovation and learning beyond the classroom.
            </p>
            <p>
              What started as informal meetups has grown into one of the most active student organizations at the university.
              We've built a community of tech enthusiasts who share knowledge, collaborate on projects, and push each other
              to explore new technologies and approaches.
            </p>
            <p>
              Today, we continue to foster a collaborative environment where students can explore new technologies, share knowledge, 
              and develop practical skills through hands-on experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h3>Our Mission</h3>
              <p>
                To create an inclusive community that empowers students to develop technical skills,
                foster innovation, and prepare for successful careers in the technology industry through
                hands-on learning experiences and collaborative projects.
              </p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>
                To be the premier student-led technology organization that bridges the gap between academic
                learning and industry requirements, empowering members to become leaders in the global
                technology landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
                  alt="Innovation"
                />
              </div>
              <div className="card-body">
                <h3>Innovation</h3>
                <p>
                  We encourage creative thinking and exploring cutting-edge technologies to solve real-world problems.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                  alt="Collaboration"
                />
              </div>
              <div className="card-body">
                <h3>Collaboration</h3>
                <p>
                  We believe in teamwork, knowledge sharing, and supporting each other's growth to achieve more together.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Continuous Learning"
                />
              </div>
              <div className="card-body">
                <h3>Continuous Learning</h3>
                <p>
                  We embrace lifelong learning and staying current with evolving technologies and industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="grid grid-4">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Workshops"
                />
              </div>
              <div className="card-body">
                <h3>Workshops & Training</h3>
                <p>
                  Regular technical workshops on programming languages, frameworks, and tools.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Hackathons"
                />
              </div>
              <div className="card-body">
                <h3>Hackathons</h3>
                <p>
                  Competitive coding events that challenge students to solve real-world problems.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Guest Speakers"
                />
              </div>
              <div className="card-body">
                <h3>Guest Speakers</h3>
                <p>
                  Industry professionals sharing insights and experiences with our members.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Projects"
                />
              </div>
              <div className="card-body">
                <h3>Project Collaboration</h3>
                <p>
                  Team-based projects that build portfolio-worthy experience.
                </p>
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
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Active</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}