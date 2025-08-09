import React, { useState } from 'react';
import './Scholarships.css';

const Scholarships = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedScholarship, setExpandedScholarship] = useState(null);

  const toggleScholarship = (id) => {
    setExpandedScholarship(expandedScholarship === id ? null : id);
  };

  const scholarships = [
    {
      id: 1,
      title: 'Merit Scholarship',
      type: 'merit',
      amount: 'Up to 100% Tuition Fee',
      deadline: '15th June 2025',
      eligibility: 'Students securing 95% or above in previous final examination',
      description: 'This prestigious scholarship is awarded to meritorious students who have demonstrated exceptional academic performance in their previous academic year. The scholarship covers up to 100% of the tuition fees for the upcoming academic year.',
      benefits: [
        'Full or partial tuition fee waiver',
        'Certificate of Excellence',
        'Mentorship program with faculty',
        'Priority access to school resources'
      ],
      requirements: [
        'Minimum 95% in previous final examination',
        'Good conduct certificate',
        'No disciplinary actions in previous year',
        'Participation in at least two co-curricular activities'
      ]
    },
    {
      id: 2,
      title: 'Sports Scholarship',
      type: 'sports',
      amount: 'Up to 75% Tuition Fee',
      deadline: '30th June 2025',
      eligibility: 'State/National level sports achievers',
      description: 'Aimed at nurturing sporting talent, this scholarship supports students who have represented the school at state or national level competitions. The scholarship helps ease the financial burden on talented athletes.',
      benefits: [
        'Up to 75% tuition fee waiver',
        'Special sports training',
        'Sports kit and equipment support',
        'Participation in inter-school competitions'
      ],
      requirements: [
        'Participation in state/national level competitions',
        'Recommendation from sports coach',
        'Maintain minimum 75% attendance',
        'Represent school in minimum two competitions annually'
      ]
    },
    {
      id: 3,
      title: 'Art & Culture Scholarship',
      type: 'arts',
      amount: 'Up to 50% Tuition Fee',
      deadline: '25th June 2025',
      eligibility: 'Demonstrated excellence in arts and cultural activities',
      description: 'This scholarship recognizes and supports students with exceptional talent in various art forms including music, dance, drama, and visual arts. It aims to provide a platform for artistic expression while maintaining academic standards.',
      benefits: [
        'Up to 50% tuition fee waiver',
        'Access to art supplies and resources',
        'Exhibition opportunities',
        'Masterclasses with renowned artists'
      ],
      requirements: [
        'Portfolio of work',
        'Minimum 80% attendance',
        'Participation in school cultural events',
        'Maintain minimum 65% in academics'
      ]
    },
    {
      id: 4,
      title: 'Economically Weaker Section (EWS) Scholarship',
      type: 'need',
      amount: 'Up to 100% Tuition Fee + Additional Benefits',
      deadline: '10th July 2025',
      eligibility: 'Family income below ₹5,00,000 per annum',
      description: 'This scholarship is designed to support students from economically disadvantaged backgrounds, ensuring that financial constraints do not hinder access to quality education.',
      benefits: [
        'Full tuition fee waiver',
        'Free textbooks and uniforms',
        'Transportation allowance',
        'After-school academic support'
      ],
      requirements: [
        'Income certificate',
        'Residence proof',
        'Previous year mark sheet',
        'Aadhaar card copy'
      ]
    },
    {
      id: 5,
      title: 'Science & Innovation Scholarship',
      type: 'stem',
      amount: 'Up to 75% Tuition Fee',
      deadline: '5th August 2025',
      eligibility: 'Excellence in Science, Technology, Engineering, and Mathematics',
      description: 'For budding scientists and innovators, this scholarship supports students who have demonstrated exceptional ability and interest in STEM fields through projects, competitions, or academic excellence.',
      benefits: [
        'Up to 75% tuition fee waiver',
        'Access to advanced lab facilities',
        'Mentorship from industry experts',
        'Participation in national/international competitions'
      ],
      requirements: [
        'Project submission or competition participation proof',
        'Minimum 90% in Science and Mathematics',
        'Recommendation from Science/Math teacher',
        'Willingness to participate in school science fairs'
      ]
    }
  ];

  const filteredScholarships = activeTab === 'all' 
    ? scholarships 
    : scholarships.filter(scholarship => scholarship.type === activeTab);

  const scholarshipTypes = [
    { id: 'all', label: 'All Scholarships' },
    { id: 'merit', label: 'Merit-based' },
    { id: 'sports', label: 'Sports' },
    { id: 'arts', label: 'Arts & Culture' },
    { id: 'stem', label: 'STEM' },
    { id: 'need', label: 'Need-based' }
  ];

  return (
    <div className="scholarships-page">
      <div className="scholarships-header">
        <h1>Scholarships & Financial Aid</h1>
        <p>Discover opportunities to support your academic journey</p>
      </div>

      <div className="scholarships-intro">
        <p>
          At Lala Lajpat Rai Bal Mandir, we believe in recognizing and nurturing talent across various domains. 
          Our scholarship programs are designed to support meritorious and deserving students in their pursuit 
          of academic excellence and personal growth.
        </p>
      </div>

      <div className="scholarship-filters">
        {scholarshipTypes.map(type => (
          <button
            key={type.id}
            className={`filter-btn ${activeTab === type.id ? 'active' : ''}`}
            onClick={() => setActiveTab(type.id)}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="scholarships-grid">
        {filteredScholarships.length > 0 ? (
          filteredScholarships.map(scholarship => (
            <div 
              key={scholarship.id} 
              className={`scholarship-card ${scholarship.type} ${expandedScholarship === scholarship.id ? 'expanded' : ''}`}
            >
              <div 
                className="scholarship-summary"
                onClick={() => toggleScholarship(scholarship.id)}
              >
                <div className="scholarship-basic">
                  <h3>{scholarship.title}</h3>
                  <span className="scholarship-amount">{scholarship.amount}</span>
                </div>
                <div className="scholarship-meta">
                  <span className="deadline">
                    <i className="icon">⏰</i> Apply by: {scholarship.deadline}
                  </span>
                  <span className="eligibility">
                    <i className="icon">🎯</i> {scholarship.eligibility}
                  </span>
                </div>
                <button className="toggle-btn">
                  {expandedScholarship === scholarship.id ? '▲' : '▼'}
                </button>
              </div>

              {expandedScholarship === scholarship.id && (
                <div className="scholarship-details">
                  <div className="description">
                    <h4>Description</h4>
                    <p>{scholarship.description}</p>
                  </div>
                  
                  <div className="details-grid">
                    <div className="benefits">
                      <h4>Benefits</h4>
                      <ul>
                        {scholarship.benefits.map((benefit, index) => (
                          <li key={index}>
                            <span className="tick">✓</span> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="requirements">
                      <h4>Requirements</h4>
                      <ul>
                        {scholarship.requirements.map((requirement, index) => (
                          <li key={index}>
                            <span className="bullet">•</span> {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="action-buttons">
                    <button className="btn apply-btn">Apply Now</button>
                    <button className="btn secondary-btn">Download Brochure</button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No scholarships found matching the selected criteria.</p>
          </div>
        )}
      </div>

      <div className="additional-info">
        <div className="info-card">
          <h3>Need Help?</h3>
          <p>Our scholarship committee is here to assist you with any questions regarding the application process or eligibility criteria.</p>
          <button className="btn outline-btn">Contact Scholarship Office</button>
        </div>
        
        <div className="info-card">
          <h3>External Scholarships</h3>
          <p>We also encourage students to explore various government and private scholarship opportunities.</p>
          <button className="btn outline-btn">View External Opportunities</button>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
