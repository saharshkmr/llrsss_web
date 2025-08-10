import React from 'react';
import './AcademicResources.css';

const AcademicResources = () => {
  const resources = {
    studyMaterials: [
      {
        id: 1,
        title: 'NCERT Textbooks',
        description: 'Digital versions of all NCERT textbooks from classes 1 to 12',
        icon: '📚',
        link: '#',
        category: 'textbooks'
      },
      {
        id: 2,
        title: 'Reference Books',
        description: 'Recommended reference books for all subjects and classes',
        icon: '📖',
        link: '#',
        category: 'books'
      },
      {
        id: 3,
        title: 'Sample Papers',
        description: 'Previous years\' question papers and sample papers',
        icon: '📝',
        link: '#',
        category: 'papers'
      },
      {
        id: 4,
        title: 'Worksheets',
        description: 'Subject-wise practice worksheets with solutions',
        icon: '📋',
        link: '#',
        category: 'worksheets'
      },
      {
        id: 5,
        title: 'Lab Manuals',
        description: 'Science and computer lab practical manuals',
        icon: '🔬',
        link: '#',
        category: 'labs'
      },
      {
        id: 6,
        title: 'E-Books',
        description: 'Digital library of educational e-books',
        icon: '📱',
        link: '#',
        category: 'digital'
      }
    ],
    onlinePlatforms: [
      {
        id: 1,
        name: 'e-Pathshala',
        description: 'NCERT e-books and educational resources',
        logo: '🌐',
        link: 'https://epathshala.nic.in/',
        category: 'government'
      },
      {
        id: 2,
        name: 'SWAYAM',
        description: 'Free online courses for school education',
        logo: '🎓',
        link: 'https://swayam.gov.in/',
        category: 'government'
      },
      {
        id: 3,
        name: 'Khan Academy',
        description: 'Free online courses and practice exercises',
        logo: '🧮',
        link: 'https://www.khanacademy.org/',
        category: 'learning'
      },
      {
        id: 4,
        name: 'BYJU\'S Learning',
        description: 'Interactive learning app for all classes',
        logo: '📱',
        link: 'https://byjus.com/',
        category: 'learning'
      }
    ],
    tools: [
      {
        id: 1,
        name: 'Geogebra',
        description: 'Interactive mathematics software',
        category: 'math',
        link: 'https://www.geogebra.org/'
      },
      {
        id: 2,
        name: 'PhET Simulations',
        description: 'Interactive science and math simulations',
        category: 'science',
        link: 'https://phet.colorado.edu/'
      },
      {
        id: 3,
        name: 'Google Earth',
        description: 'Explore geographical locations',
        category: 'geography',
        link: 'https://earth.google.com/web/'
      },
      {
        id: 4,
        name: 'Scratch',
        description: 'Learn programming through interactive stories',
        category: 'programming',
        link: 'https://scratch.mit.edu/'
      }
    ]
  };

  return (
    <div className="academic-resources">
      {/* Hero Section */}
      <section className="curriculum-hero">
        <div className="container">
          <h1>Academic Resources</h1>
          <p>Access a wide range of study materials, digital resources, and learning tools to support your academic journey</p>
        </div>
      </section>

      <section className="resources-section study-materials">
        <div className="container">
          <div className="section-header">
            <h2>📚 Study Materials</h2>
            <p>Download or access digital learning resources for all classes</p>
          </div>

          <div className="materials-grid">
            {resources.studyMaterials.map(item => (
              <a key={item.id} href={item.link} className="material-card">
                <div className="material-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="view-link">View resources →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section online-platforms">
        <div className="container">
          <div className="section-header">
            <h2>🌐 Recommended Online Platforms</h2>
            <p>Trusted digital learning platforms to enhance your studies</p>
          </div>

          <div className="platforms-grid">
            {resources.onlinePlatforms.map(platform => (
              <a
                key={platform.id}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card"
              >
                <div className="platform-logo">{platform.logo}</div>
                <div className="platform-info">
                  <h3>{platform.name}</h3>
                  <p>{platform.description}</p>
                  <span className="visit-link">Visit website ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section learning-tools">
        <div className="container">
          <div className="section-header">
            <h2>🛠️ Learning Tools & Software</h2>
            <p>Interactive tools to make learning engaging and effective</p>
          </div>

          <div className="tools-grid">
            {resources.tools.map(tool => (
              <a
                key={tool.id}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-card"
              >
                <div className="tool-icon">
                  {tool.category === 'math' && '🧮'}
                  {tool.category === 'science' && '🔬'}
                  {tool.category === 'geography' && '🌍'}
                  {tool.category === 'programming' && '💻'}
                </div>
                <div className="tool-info">
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section quick-links">
        <div className="container">
          <div className="section-header">
            <h2>🔗 Quick Links</h2>
            <p>Important educational resources and references</p>
          </div>

          <div className="links-grid">
            <button type="button" className="quick-link">
              <span className="link-icon">📅</span>
              <span className="link-text">Academic Calendar</span>
            </button>
            <button type="button" className="quick-link">
              <span className="link-icon">📋</span>
              <span className="link-text">Syllabus</span>
            </button>
            <button type="button" className="quick-link">
              <span className="link-icon">📊</span>
              <span className="link-text">Result Portal</span>
            </button>
            <button type="button" className="quick-link">
              <span className="link-icon">📚</span>
              <span className="link-text">Digital Library</span>
            </button>
            <button type="button" className="quick-link">
              <span className="link-icon">🎓</span>
              <span className="link-text">Scholarships</span>
            </button>
            <button type="button" className="quick-link">
              <span className="link-icon">📝</span>
              <span className="link-text">Exam Schedule</span>
            </button>
          </div>
        </div>
      </section>

      <section className="resources-section support">
        <div className="container">
          <div className="support-card">
            <div className="support-content">
              <h2>Need Help with Academic Resources?</h2>
              <p>Our academic support team is here to assist you with any questions about accessing or using these resources.</p>
              <div className="support-actions">
                <a href="/contact" className="btn primary">Contact Support</a>
                <a href="/faq" className="btn secondary">View FAQs</a>
              </div>
            </div>
            <div className="support-image">
              <span role="img" aria-label="Support">💡</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicResources;
