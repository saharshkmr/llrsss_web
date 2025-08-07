import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    {
      title: 'About Us',
      links: [
        { title: 'About School', path: '/about/llrsss' },
        { title: "Principal's Desk", path: '/about/principal' },
        { title: 'Vice Principal', path: '/about/vice-principal' },
        { title: 'Our Mission & Vision', path: '/about/mission-vision' },
        { title: 'School Infrastructure', path: '/about/infrastructure' },
      ]
    },
    {
      title: 'Academics',
      links: [
        { title: 'Academic Curriculum', path: '/academics/curriculum' },
        { title: 'School Timings', path: '/academics/timings' },
        { title: 'Academic Calendar', path: '/academics/calendar' },
        { title: 'Subject Departments', path: '/academics/departments' },
        { title: 'Examination System', path: '/academics/examinations' },
      ]
    },
    {
      title: 'Admission',
      links: [
        { title: 'Why Choose LLRSSS?', path: '/admissions/why-us' },
        { title: 'Admission Procedure', path: '/admissions/procedure' },
        { title: 'Fee Structure', path: '/admissions/fees' },
        { title: 'Eligibility Criteria', path: '/admissions/eligibility' },
        { title: 'Online Application', path: '/admissions/apply' },
      ]
    },
    {
      title: 'More',
      links: [
        { title: 'Gallery', path: '/gallery' },
        { title: 'Faculty', path: '/faculty' },
        { title: 'Contact Us', path: '/contact' },
        { title: 'Sitemap', path: '/sitemap' },
        { title: 'Privacy Policy', path: '/privacy-policy' },
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Lala Lajpat Rai Bal Mandir <br /> Senior Secondary School</h3>
          <p className="footer-about">Empowering students with quality education and holistic development since 1990.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {navItems.map((section, index) => (
          <div key={index} className="footer-section">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>Cheema nagar, Pundag, Ranchi, Jharkhand 834004</li>
            <li>+91 65122 43026</li>
            <li>info@lalalajpatraischool.com</li>
            <li>Mon - Fri: 7:30 AM - 1:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} LLRBMSSS. All Rights Reserved.</p>
          <div className="footer-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/accessibility">Accessibility</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
