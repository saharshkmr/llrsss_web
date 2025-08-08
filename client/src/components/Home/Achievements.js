import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Achievements.css';

const Achievements = () => {
  const toppers = [
    {
      id: 1,
      name: 'John Smith',
      position: '1st Position',
      score: '98.2%',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: '2nd Position',
      score: '97.8%',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: '3rd Position',
      score: '97.5%',
      image: 'https://randomuser.me/api/portraits/men/29.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section className="achievements">
      <div className="container">
        <div className="section-header">
          <h2>Our Top Achievers</h2>
          <p>Celebrating excellence in academic performance</p>
        </div>
        
        <div className="achievements-grid">
          {toppers.map((topper) => (
            <div key={topper.id} className="achievement-card">
              <div className="achievement-medal">
                <FaTrophy className="medal-icon" />
                <span className="medal-text">{topper.position}</span>
              </div>
              <div className="achievement-image">
                <img src={topper.image} alt={topper.name} />
              </div>
              <div className="achievement-content">
                <h3>{topper.name}</h3>
                <div className="achievement-score">
                  <span>Score:</span>
                  <span className="score-value">{topper.score}</span>
                </div>
                <div className="achievement-social">
                  <a href={topper.social.facebook} className="social-icon">
                    <FaFacebookF />
                  </a>
                  <a href={topper.social.twitter} className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href={topper.social.instagram} className="social-icon">
                    <FaInstagram />
                  </a>
                  <a href={topper.social.linkedin} className="social-icon">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <Link to="/achievers" className="view-all-btn">
            View All Achievers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
