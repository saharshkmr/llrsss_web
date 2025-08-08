import React from 'react';
import HeroSlider from './HeroSlider';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider-container">
          <HeroSlider />
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Lala Lajpat Rai Bal Mandir</h1>
            <p className="hero-subtitle">Senior Secondary School</p>
            <p className="hero-description">
              Excellence in Education, Nurturing Future Leaders
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Learn More</button>
              <button className="btn btn-outline">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏫</div>
            <h3>Experienced Faculty</h3>
            <p>Our dedicated teachers provide quality education and personal attention to each student.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Modern Curriculum</h3>
            <p>Comprehensive and updated curriculum designed for holistic development.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Academic Excellence</h3>
            <p>Consistently outstanding board results and academic achievements.</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <h2 className="section-title">Quick Links</h2>
        <div className="links-grid">
          <a href="/admissions" className="link-card">
            <h3>Admissions</h3>
            <p>Join our esteemed institution</p>
          </a>
          <a href="/academics" className="link-card">
            <h3>Academics</h3>
            <p>Explore our programs</p>
          </a>
          <a href="/facilities" className="link-card">
            <h3>Facilities</h3>
            <p>Our infrastructure</p>
          </a>
          <a href="/gallery" className="link-card">
            <h3>Gallery</h3>
            <p>Moments at LLRSSS</p>
          </a>
        </div>
      </section>

      {/* News & Events */}
      <section className="news-events">
        <h2 className="section-title">News & Events</h2>
        <div className="news-grid">
          <div className="news-card">
            <div className="news-date">15 Aug 2025</div>
            <h3>Independence Day Celebration</h3>
            <p>Join us for a grand celebration of India's 79th Independence Day.</p>
          </div>
          <div className="news-card">
            <div className="news-date">05 Sep 2025</div>
            <h3>Teacher's Day</h3>
            <p>Special assembly to honor our respected teachers.</p>
          </div>
          <div className="news-card">
            <div className="news-date">25 Sep 2025</div>
            <h3>Annual Sports Day</h3>
            <p>Witness the spirit of sportsmanship and competition.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
