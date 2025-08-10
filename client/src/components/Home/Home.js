import React from 'react';
import HeroSlider from './HeroSlider';
import Marquee from './Marquee';
import Facilities from './Facilities';
import AdditionalFacilities from './AdditionalFacilities';
import Achievements from './Achievements';
import YouTubeVideos from './YouTubeVideos';
import './Home.css';
import './Notice.css';
import './Facilities.css';
import './YouTubeVideos.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider-container">
          <HeroSlider />
        </div>
        <div className="hero-content">
          <p className="hero-subtitle">Welcome to</p>
          <p className="hero-title">Lala Lajpat Rai Bal Mandir Senior Secondary School</p>
          <p className="hero-description">
            Excellence in Education, Nurturing Future Leaders
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Learn More</button>
            <button className="btn btn-outline">Contact Us</button>
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

      {/* YouTube Videos Section */}
      <YouTubeVideos />

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
    </div>
  );
};

export default Home;
