import React from 'react';
import { Link } from 'react-router-dom';
import './AcademicCurriculum.css';

const AcademicCurriculum = () => {
  const curriculum = [
    {
      level: 'Pre-Primary (Nursery to UKG)',
      description: 'A play-based learning approach focusing on developing cognitive, language, physical, and social-emotional skills.',
      subjects: [
        'Language Development (English & Hindi)',
        'Numeracy Skills',
        'Environmental Studies',
        'Art & Craft',
        'Music & Movement',
        'Storytelling & Rhymes'
      ]
    },
    {
      level: 'Primary (Classes I to V)',
      description: 'Focus on building strong foundational skills in core subjects while encouraging curiosity and creativity.',
      subjects: [
        'English',
        'Hindi',
        'Mathematics',
        'Environmental Studies (EVS)',
        'Computer Science',
        'General Knowledge',
        'Art & Craft',
        'Music',
        'Physical Education'
      ]
    },
    {
      level: 'Middle School (Classes VI to VIII)',
      description: 'A balanced curriculum that builds on foundational knowledge while introducing more specialized subjects.',
      subjects: [
        'English',
        'Hindi',
        'Mathematics',
        'Science (Physics, Chemistry, Biology)',
        'Social Studies (History, Geography, Civics)',
        'Computer Science',
        'Sanskrit/Regional Language',
        'Art Education',
        'Physical & Health Education'
      ]
    },
    {
      level: 'Secondary (Classes IX & X)',
      description: 'Focused on preparing students for board examinations while developing critical thinking and problem-solving skills.',
      subjects: [
        'English (Communicative)',
        'Hindi Course A/B',
        'Mathematics (Standard/Basic)',
        'Science (Physics, Chemistry, Biology)',
        'Social Science (History, Geography, Political Science, Economics)',
        'Computer Applications/IT',
        'Physical and Health Education',
        'Work Education',
        'Art Education'
      ]
    },
    {
      level: 'Senior Secondary (Classes XI & XII)',
      description: 'Specialized streams to prepare students for higher education and career paths.',
      streams: [
        {
          name: 'Science (PCM/PCB)',
          subjects: ['Physics', 'Chemistry', 'Mathematics/Biology', 'English Core', 'Computer Science/Physical Education']
        },
        {
          name: 'Commerce',
          subjects: ['Accountancy', 'Business Studies', 'Economics', 'English Core', 'Mathematics/Informatics Practices']
        },
        {
          name: 'Humanities',
          subjects: ['History', 'Political Science', 'Economics', 'English Core', 'Psychology/Geography']
        }
      ]
    }
  ];

  return (
    <div className="academic-curriculum">
      <section className="curriculum-hero">
        <div className="container">
          <h1>Academic Curriculum</h1>
          <p>Comprehensive and well-structured curriculum designed to nurture young minds</p>
        </div>
      </section>

      <section className="curriculum-content">
        <div className="container">
          <div className="curriculum-intro">
            <h2>Our Academic Framework</h2>
            <p>At LLRBMSSS, we follow a carefully designed curriculum that balances academic rigor with holistic development. Our curriculum is regularly updated to incorporate the latest educational practices and global standards.</p>
          </div>

          <div className="curriculum-levels">
            {curriculum.map((level, index) => (
              <div key={index} className="level-card">
                <h3>{level.level}</h3>
                <p className="level-description">{level.description}</p>

                {level.subjects ? (
                  <div className="subjects-list">
                    <h4>Subjects:</h4>
                    <ul>
                      {level.subjects.map((subject, i) => (
                        <li key={i}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="streams-container">
                    {level.streams.map((stream, i) => (
                      <div key={i} className="stream">
                        <h4>{stream.name}:</h4>
                        <ul>
                          {stream.subjects.map((subject, j) => (
                            <li key={j}>{subject}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="curriculum-features">
            <h3>Key Features of Our Curriculum</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Holistic Development</h4>
                <p>Balanced focus on academics, sports, arts, and life skills</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h4>Global Perspective</h4>
                <p>Curriculum that prepares students for global citizenship</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h4>Innovative Learning</h4>
                <p>Integration of technology and modern teaching methodologies</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h4>Comprehensive Assessment</h4>
                <p>Continuous and comprehensive evaluation system</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicCurriculum;
