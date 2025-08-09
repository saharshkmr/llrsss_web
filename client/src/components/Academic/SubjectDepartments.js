import React from 'react';
import './SubjectDepartments.css';

const SubjectDepartments = () => {
  const departments = [
    {
      name: 'Mathematics',
      description: 'Our Mathematics department focuses on developing strong analytical and problem-solving skills through a comprehensive curriculum that includes algebra, geometry, calculus, and statistics.',
      subjects: ['Algebra', 'Geometry', 'Calculus', 'Statistics', 'Trigonometry'],
      icon: '🧮'
    },
    {
      name: 'Science',
      description: 'The Science department offers hands-on learning experiences in Physics, Chemistry, and Biology, fostering scientific inquiry and critical thinking.',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
      icon: '🔬'
    },
    {
      name: 'Languages',
      description: 'Our Languages department promotes multilingualism and cultural understanding through comprehensive programs in English, Hindi, and other regional languages.',
      subjects: ['English', 'Hindi', 'Sanskrit', 'French'],
      icon: '📚'
    },
    {
      name: 'Social Studies',
      description: 'The Social Studies department helps students understand historical events, geographical concepts, and civic responsibilities in a global context.',
      subjects: ['History', 'Geography', 'Civics', 'Economics'],
      icon: '🌍'
    },
    {
      name: 'Computer Science',
      description: 'Our Computer Science department equips students with essential digital literacy and programming skills for the 21st century.',
      subjects: ['Computer Applications', 'Programming', 'Web Development', 'Database Management'],
      icon: '💻'
    },
    {
      name: 'Physical Education',
      description: 'The Physical Education department promotes physical fitness, teamwork, and sportsmanship through various sports and fitness activities.',
      subjects: ['Sports', 'Yoga', 'Health Education', 'Athletics'],
      icon: '⚽'
    }
  ];

  return (
    <div className="subject-departments">
      <div className="departments-header">
        <h1>Subject Departments</h1>
        <p>Explore our comprehensive academic departments and their offerings</p>
      </div>
      
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div key={index} className="department-card">
            <div className="department-icon">
              <span role="img" aria-label={dept.name}>{dept.icon}</span>
            </div>
            <h2>{dept.name}</h2>
            <p className="department-description">{dept.description}</p>
            <div className="subjects-list">
              <h4>Subjects Offered:</h4>
              <ul>
                {dept.subjects.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="additional-info">
        <h2>Our Approach to Learning</h2>
        <p>
          At Lala Lajpat Rai Bal Mandir, we believe in a holistic approach to education. 
          Our subject departments work collaboratively to provide an integrated learning 
          experience that prepares students for academic excellence and real-world challenges.
        </p>
        <div className="highlights">
          <div className="highlight">
            <span className="highlight-icon">🎯</span>
            <h4>Expert Faculty</h4>
            <p>Qualified and experienced educators dedicated to student success</p>
          </div>
          <div className="highlight">
            <span className="highlight-icon">🏛️</span>
            <h4>Modern Facilities</h4>
            <p>Well-equipped labs and learning spaces for practical experience</p>
          </div>
          <div className="highlight">
            <span className="highlight-icon">📊</span>
            <h4>Comprehensive Curriculum</h4>
            <p>Aligned with national education standards and global best practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDepartments;
