import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      details: '123 Education Street, Knowledge City, 123456',
      description: 'Visit us at our campus for any inquiries'
    },
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      details: '+91 98765 43210',
      description: 'Monday to Saturday, 8:00 AM to 3:00 PM'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      details: 'info@llrbmsss.edu.in',
      description: 'Send us your queries anytime'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: 'Monday - Friday',
      description: '8:00 AM - 3:00 PM'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaYoutube />, url: '#', label: 'YouTube' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="curriculum-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions or feedback? We'd love to hear from you. Our team is here to help.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-grid">
        <div className="container">
          <div className="grid-container">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="section-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your Message"
                    className="form-textarea"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="section-header">
                <h2>Contact Information</h2>
                <p>Reach out to us through any of these channels.</p>
              </div>
              
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-text">
                      <h3>{item.title}</h3>
                      <p className="detail">{item.details}</p>
                      <p className="description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      className="social-link"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0000000000005!2d77.00000000000001!3d28.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
