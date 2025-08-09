import React, { useState } from 'react';
import './ResultsAnalysis.css';

const ResultsAnalysis = () => {
  const [selectedYear, setSelectedYear] = useState('2024-25');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedExam, setSelectedExam] = useState('Annual Examination');

  const years = ['2024-25', '2023-24', '2022-23'];
  const classes = ['All Classes', 'Nursery to UKG', 'I to V', 'VI to VIII', 'IX to X', 'XI to XII'];
  const exams = ['Annual Examination', 'Half Yearly', 'Unit Test 1', 'Unit Test 2', 'Pre-Board'];

  // Mock data for results
  const resultsData = {
    '2024-25': {
      'All Classes': {
        'Annual Examination': {
          totalStudents: 1250,
          passed: 1190,
          distinction: 480,
          firstDivision: 520,
          secondDivision: 190,
          passPercentage: 95.2,
          topper: 'Aarav Sharma (XII-A) - 98.4%',
          subjectWise: [
            { subject: 'Mathematics', passPercentage: 96.5, highest: 100 },
            { subject: 'Science', passPercentage: 97.2, highest: 99 },
            { subject: 'English', passPercentage: 98.1, highest: 99 },
            { subject: 'Hindi', passPercentage: 97.8, highest: 98 },
            { subject: 'Social Studies', passPercentage: 96.9, highest: 99 },
          ]
        },
        'Half Yearly': {
          totalStudents: 1250,
          passed: 1205,
          distinction: 450,
          firstDivision: 530,
          secondDivision: 225,
          passPercentage: 96.4,
          topper: 'Ananya Patel (XI-B) - 99.2%',
          subjectWise: [
            { subject: 'Mathematics', passPercentage: 96.8, highest: 100 },
            { subject: 'Science', passPercentage: 97.5, highest: 100 },
            { subject: 'English', passPercentage: 98.3, highest: 99 },
            { subject: 'Hindi', passPercentage: 97.9, highest: 99 },
            { subject: 'Social Studies', passPercentage: 97.2, highest: 99 },
          ]
        }
      }
    }
  };

  const currentResults = resultsData[selectedYear]?.[selectedClass]?.[selectedExam] || resultsData[selectedYear]?.['All Classes']?.[selectedExam];

  const renderSubjectWiseResults = () => {
    if (!currentResults?.subjectWise) return null;
    
    return (
      <div className="subject-results">
        <h3>Subject-wise Performance</h3>
        <div className="subject-grid">
          {currentResults.subjectWise.map((subject, index) => (
            <div key={index} className="subject-card">
              <h4>{subject.subject}</h4>
              <div className="subject-stats">
                <div className="stat">
                  <span className="stat-label">Pass %</span>
                  <span className="stat-value">{subject.passPercentage}%</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Highest</span>
                  <span className="stat-value">{subject.highest}%</span>
                </div>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${subject.passPercentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="results-analysis">
      <div className="results-header">
        <h1>Results & Analysis</h1>
        <p>Comprehensive analysis of academic performance and achievements</p>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="year">Academic Year</label>
          <select 
            id="year" 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="class">Class</label>
          <select 
            id="class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {classes.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="exam">Examination</label>
          <select 
            id="exam"
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
          >
            {exams.map(exam => (
              <option key={exam} value={exam}>{exam}</option>
            ))}
          </select>
        </div>
      </div>

      {currentResults ? (
        <>
          <div className="overall-results">
            <div className="result-card highlight">
              <h3>Overall Performance</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-value">{currentResults.passPercentage}%</span>
                  <span className="stat-label">Pass Percentage</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{currentResults.totalStudents}</span>
                  <span className="stat-label">Total Students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{currentResults.passed}</span>
                  <span className="stat-label">Students Passed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{currentResults.distinction}</span>
                  <span className="stat-label">Distinction (75% & above)</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{currentResults.firstDivision}</span>
                  <span className="stat-label">First Division (60-74.9%)</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{currentResults.secondDivision}</span>
                  <span className="stat-label">Second Division (33-59.9%)</span>
                </div>
              </div>
            </div>

            <div className="result-card">
              <h3>Top Performer</h3>
              <div className="topper-info">
                <span className="trophy">🏆</span>
                <p>{currentResults.topper}</p>
              </div>
            </div>
          </div>

          {renderSubjectWiseResults()}

          <div className="analysis-section">
            <h3>Performance Analysis</h3>
            <div className="analysis-grid">
              <div className="analysis-card">
                <h4>Trend Analysis</h4>
                <p>Performance has improved by 2.3% compared to the previous year's {selectedExam}.</p>
                <div className="trend up">
                  <span>↑ 2.3%</span> from last year
                </div>
              </div>
              <div className="analysis-card">
                <h4>Subject-wise Performance</h4>
                <p>Mathematics shows the highest improvement with a 3.1% increase in pass percentage.</p>
                <ul>
                  <li>Mathematics: +3.1%</li>
                  <li>Science: +2.5%</li>
                  <li>English: +1.8%</li>
                </ul>
              </div>
              <div className="analysis-card">
                <h4>Class-wise Performance</h4>
                <p>Class X shows the best performance with a 98.2% pass rate.</p>
                <div className="class-performance">
                  <div className="class-bar" style={{ '--width': '98.2%' }}>
                    <span>Class X: 98.2%</span>
                  </div>
                  <div className="class-bar" style={{ '--width': '96.5%' }}>
                    <span>Class XII: 96.5%</span>
                  </div>
                  <div className="class-bar" style={{ '--width': '95.8%' }}>
                    <span>Class IX: 95.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="no-results">
          <p>No results available for the selected criteria.</p>
        </div>
      )}

      <div className="disclaimer">
        <p><strong>Note:</strong> Results are based on internal assessments and may be subject to change. For official results, please refer to the school administration.</p>
      </div>
    </div>
  );
};

export default ResultsAnalysis;
