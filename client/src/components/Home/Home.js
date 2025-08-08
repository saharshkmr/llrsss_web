import React from 'react';
import HeroSlider from './HeroSlider';
import Marquee from './Marquee';
import Facilities from './Facilities';
import AdditionalFacilities from './AdditionalFacilities';
import Achievements from './Achievements';
import './Home.css';
import './Notice.css';
import './Facilities.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider-container">
          <HeroSlider />
          <div className="hero-content">
            {/* <h1 className="hero-title">Welcome to</h1> */}
            <p className="hero-subtitle">Welcome to</p>
            <p className="hero-subtitle">Lala Lajpat Rai Bal Mandir Senior Secondary School</p>
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

      {/* Announcement Marquee */}
      <Marquee />

      {/* Facilities Section */}
      <Facilities />

      {/* Additional Facilities Section */}
      <AdditionalFacilities />

      {/* Achievements Section */}
      <Achievements />

      {/* Notice Board Section */}
      <section className="notice-board">
        <div className="notice-board-container">
          <div className="notice-board-header">
            <h2 className="section-title">Notice Board</h2>
            <div className="notice-board-tabs">
              <button className="tab-btn active">All</button>
              <button className="tab-btn">Academics</button>
              <button className="tab-btn">Events</button>
              <button className="tab-btn">Results</button>
            </div>
          </div>

          <div className="notice-board-content">
            <div className="notice-item">
              <div className="notice-date">
                <span className="date-day">15</span>
                <span className="date-month">AUG</span>
              </div>
              <div className="notice-details">
                <h3>School Reopening Notice</h3>
                <p>All students are informed that the school will reopen on 1st September 2025.</p>
                <span className="notice-tag">Academics</span>
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-date">
                <span className="date-day">20</span>
                <span className="date-month">AUG</span>
              </div>
              <div className="notice-details">
                <h3>Annual Sports Day</h3>
                <p>Annual Sports Day will be held on 20th August 2025. All students must participate.</p>
                <span className="notice-tag notice-tag-events">Events</span>
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-date">
                <span className="date-day">25</span>
                <span className="date-month">AUG</span>
              </div>
              <div className="notice-details">
                <h3>Mid-Term Examination</h3>
                <p>Mid-term examinations will commence from 25th August 2025. Date sheet will be shared soon.</p>
                <span className="notice-tag notice-tag-academics">Exams</span>
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-date">
                <span className="date-day">05</span>
                <span className="date-month">SEP</span>
              </div>
              <div className="notice-details">
                <h3>Teacher's Day Celebration</h3>
                <p>Celebrating Teacher's Day on 5th September 2025. Special assembly at 9:00 AM.</p>
                <span className="notice-tag notice-tag-events">Events</span>
              </div>
            </div>
          </div>

          <div className="notice-board-footer">
            <a href="/notices" className="view-all-btn" onClick={(e) => {
              e.preventDefault();
              window.location.href = '/notices';
            }}>View All Notices</a>
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
