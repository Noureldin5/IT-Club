import React, { useState } from "react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Placeholder for images - in a real app, you would fetch these from an API
  const galleryItems = [
    { id: 1, title: "Hackathon 2023", category: "Events" },
    { id: 2, title: "Workshop on AI", category: "Workshops" },
    { id: 3, title: "Team Building", category: "Events" },
    { id: 4, title: "Coding Competition", category: "Competitions" },
    { id: 5, title: "Guest Speaker", category: "Workshops" },
    { id: 6, title: "Project Showcase", category: "Projects" },
    { id: 7, title: "Tech Talk", category: "Workshops" },
    { id: 8, title: "Networking Event", category: "Events" },
    { id: 9, title: "Web Development Workshop", category: "Workshops" },
  ];
  
  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Our Gallery</h1>
          <p className="hero-subtitle">
            Explore moments and memories from our events and activities
          </p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="section">
        <div className="container">
          <div className="gallery-filter">
            <button 
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === "Events" ? "active" : ""}`}
              onClick={() => setActiveFilter("Events")}
            >
              Events
            </button>
            <button 
              className={`filter-btn ${activeFilter === "Workshops" ? "active" : ""}`}
              onClick={() => setActiveFilter("Workshops")}
            >
              Workshops
            </button>
            <button 
              className={`filter-btn ${activeFilter === "Projects" ? "active" : ""}`}
              onClick={() => setActiveFilter("Projects")}
            >
              Projects
            </button>
            <button 
              className={`filter-btn ${activeFilter === "Competitions" ? "active" : ""}`}
              onClick={() => setActiveFilter("Competitions")}
            >
              Competitions
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-img"></div>
                <div className="gallery-info">
                  <span className="gallery-category">
                    {item.category}
                  </span>
                  <h3 className="gallery-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}