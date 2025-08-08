import React from 'react';
import './Marquee.css';

const Marquee = () => {
  // Split the message into parts to highlight different sections
  const messageParts = [
    { text: "ADMISSION OPEN FOR STD XI SCIENCE & COMMERCE 2025-26", isHighlighted: true },
    { text: " • " },
    { text: "Admission Open for the Session 2025-26 STD Pre-Nursery to Std IX", isHighlighted: false },
    { text: " • " },
    { text: "For more Enquire Contact School office (9006915886) between 08:15 AM TO 12:00 PM", isHighlighted: true },
    { text: " • " },
    { text: "Monday Test - ON EVERY MONDAY-STUDENTS HAVE TO ATTEND THE EXAM", isHighlighted: true },
  ];

  // Create multiple instances of the message for a continuous scroll effect
  const marqueeContent = Array(5).fill().map((_, index) => (
    <div key={index} className="marquee-content">
      {messageParts.map((part, i) => (
        <span 
          key={i} 
          className={part.isHighlighted ? 'highlight' : ''}
        >
          {part.text}
        </span>
      ))}
    </div>
  ));

  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {marqueeContent}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
