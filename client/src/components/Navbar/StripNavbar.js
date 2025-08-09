import React from 'react';
import './StripNavbar.css';

const StripNavbar = () => {
    return (
        <div className="top-contact-strip">
            <div className="contact-info">
                <span className="contact-item">
                    {/* <FaSchool className="contact-icon" /> */}
                    <span>Affiliation No.: 2130456</span>
                </span>
                <span className="contact-divider">|</span>
                <span className="contact-item">
                    {/* <FaSchool className="contact-icon" /> */}
                    <span>UDISE No.: 20020201701</span>
                </span>
                <span className="contact-divider">|</span>
                <span className="contact-item">
                    {/* <FaSchool className="contact-icon" /> */}
                    <span>School Code: 50011</span>
                </span>
                <span className="contact-divider">|</span>
                <span className="contact-item">
                    {/* <FaPhone className="contact-icon" /> */}
                    <span>+91 11 2323 2323</span>
                </span>
                <span className="contact-divider">|</span>
                <span className="contact-item">
                    {/* <FaEnvelope className="contact-icon" /> */}
                    <span>info@llrsss.edu.in</span>
                </span>
                <span className="contact-divider">|</span>
                <span className="contact-item">
                    {/* <FaMapMarkerAlt className="contact-icon" /> */}
                    <span>New Delhi, India</span>
                </span>
            </div>
        </div>
    );
};

export default StripNavbar;