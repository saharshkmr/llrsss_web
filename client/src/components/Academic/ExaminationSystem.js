import React from 'react';
import './ExaminationSystem.css';

const ExaminationSystem = () => {
  const examPatterns = [
    {
      class: 'Nursery to UKG',
      type: 'Continuous Assessment',
      description: 'Child-friendly assessment through observation, oral tests, and simple worksheets.',
      components: [
        'Oral and practical assessments',
        'Worksheet-based evaluations',
        'Activity-based learning checks',
        'No formal written exams'
      ]
    },
    {
      class: 'Classes I to V',
      type: 'Formative & Summative',
      description: 'Balanced assessment through periodic tests and activities.',
      components: [
        'Two Formative Assessments (FA1 & FA2)',
        'One Summative Assessment (SA1)',
        'Project work and class participation',
        'Grading system: A1 to E'
      ]
    },
    {
      class: 'Classes VI to VIII',
      type: 'Comprehensive Evaluation',
      description: 'Structured assessment with periodic tests and comprehensive exams.',
      components: [
        'Two Periodic Tests (PT1 & PT2)',
        'Half Yearly Examination',
        'Annual Examination',
        'Internal Assessment (Notebook, Subject Enrichment)'
      ]
    },
    {
      class: 'Classes IX to X',
      type: 'Board Pattern',
      description: 'Preparation for board examinations with rigorous assessment.',
      components: [
        'Periodic Tests (3 per subject)',
        'Half Yearly Examination',
        'Pre-Board Examination',
        'Board Practical & Theory Exams'
      ]
    },
    {
      class: 'Classes XI to XII',
      type: 'Senior Secondary',
      description: 'Focused preparation for board and competitive examinations.',
      components: [
        'Unit Tests (Monthly)',
        'Half Yearly Examination',
        'Pre-Board Examination (3-4 cycles)',
        'Board Practical & Theory Exams'
      ]
    }
  ];

  const examGuidelines = [
    'Students must carry their school ID card for all examinations.',
    'Use of any electronic devices is strictly prohibited in the examination hall.',
    'Students must reach the examination hall 10 minutes before the scheduled time.',
    'Any form of unfair means will lead to strict disciplinary action.',
    'Answer scripts must be written neatly with proper margins on both sides.',
    'Students must follow the dress code during examinations.'
  ];

  const evaluationCriteria = [
    {
      aspect: 'Scholastic',
      weightage: '80%',
      components: [
        'Written Tests (40%)',
        'Unit Tests (20%)',
        'Practical/Project Work (15%)',
        'Class Performance (5%)'
      ]
    },
    {
      aspect: 'Co-Scholastic',
      weightage: '20%',
      components: [
        'Work Education',
        'Art Education',
        'Health & Physical Education',
        'Discipline (Attendance, Sincerity, Behavior)'
      ]
    }
  ];

  return (
    <div className="examination-system">
      <div className="exam-header">
        <h1>Examination System</h1>
        <p>Transparent and comprehensive evaluation process for academic excellence</p>
      </div>

      <section className="exam-intro">
        <h2>Our Examination Philosophy</h2>
        <p>
          At Lala Lajpat Rai Bal Mandir, we believe in a holistic evaluation system that assesses not just 
          rote learning but also the application of knowledge, critical thinking, and problem-solving skills. 
          Our examination system is designed to be fair, transparent, and comprehensive.
        </p>
      </section>

      <section className="exam-patterns">
        <h2>Examination Patterns</h2>
        <div className="patterns-grid">
          {examPatterns.map((pattern, index) => (
            <div key={index} className="pattern-card">
              <div className="pattern-header">
                <h3>{pattern.class}</h3>
                <span className="pattern-type">{pattern.type}</span>
              </div>
              <p className="pattern-desc">{pattern.description}</p>
              <ul className="pattern-components">
                {pattern.components.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="evaluation-criteria">
        <h2>Evaluation Criteria</h2>
        <div className="criteria-container">
          {evaluationCriteria.map((criteria, index) => (
            <div key={index} className="criteria-card">
              <h3>{criteria.aspect} <span className="weightage">{criteria.weightage}</span></h3>
              <ul>
                {criteria.components.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="exam-guidelines">
        <h2>Examination Guidelines</h2>
        <div className="guidelines-container">
          <ul className="guidelines-list">
            {examGuidelines.map((guideline, index) => (
              <li key={index} className="guideline-item">
                <span className="guideline-icon">✓</span>
                {guideline}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="result-declaration">
        <h2>Result Declaration</h2>
        <div className="result-info">
          <div className="result-card">
            <h3>Term 1 Results</h3>
            <p>Declared in September</p>
            <span className="result-detail">Based on FA1, FA2 & SA1</span>
          </div>
          <div className="result-card">
            <h3>Term 2 Results</h3>
            <p>Declared in March</p>
            <span className="result-detail">Based on FA3, FA4 & SA2</span>
          </div>
          <div className="result-card">
            <h3>Final Result</h3>
            <p>Declared in April</p>
            <span className="result-detail">Combined performance of both terms</span>
          </div>
        </div>
      </section>

      <section className="exam-support">
        <h2>Examination Support</h2>
        <div className="support-options">
          <div className="support-card">
            <h3>Remedial Classes</h3>
            <p>Extra help for students who need additional support in specific subjects</p>
          </div>
          <div className="support-card">
            <h3>Counseling</h3>
            <p>Guidance and support for managing exam stress and anxiety</p>
          </div>
          <div className="support-card">
            <h3>Parent-Teacher Meetings</h3>
            <p>Regular updates on student's performance and progress</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExaminationSystem;
