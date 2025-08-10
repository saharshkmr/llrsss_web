import React from 'react';
import { FaChild, FaGraduationCap, FaFileAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import './EligibilityCriteria.css';

const EligibilityCriteria = () => {
  // Age criteria data
  const ageCriteria = [
    { class: 'Nursery', minAge: '2.5 years', maxAge: '3.5 years', asOn: 'March 31st' },
    { class: 'LKG', minAge: '3.5 years', maxAge: '4.5 years', asOn: 'March 31st' },
    { class: 'UKG', minAge: '4.5 years', maxAge: '5.5 years', asOn: 'March 31st' },
    { class: 'Grade 1', minAge: '5.5 years', maxAge: '7 years', asOn: 'March 31st' },
    { class: 'Grade 2 to 5', minAge: 'As per previous class', maxAge: 'N/A', asOn: 'March 31st' },
    { class: 'Grade 6 to 8', minAge: 'As per previous class', maxAge: 'N/A', asOn: 'March 31st' },
    { class: 'Grade 9 to 12', minAge: 'As per previous class', maxAge: 'N/A', asOn: 'March 31st' },
  ];

  // Required documents
  const documents = [
    { id: 1, text: 'Birth Certificate (Original + 2 copies)' },
    { id: 2, text: 'Aadhar Card (Student & Parents)' },
    { id: 3, text: 'Transfer Certificate (Original)' },
    { id: 4, text: 'Previous Year\'s Report Card' },
    { id: 5, text: 'Address Proof' },
    { id: 6, text: 'Passport Size Photographs (4 Nos.)' },
    { id: 7, text: 'Caste Certificate (if applicable)' },
    { id: 8, text: 'Medical Certificate' },
  ];

  return (
    <div className="eligibility-criteria">
      {/* Hero Section */}
      <section className="eligibility-criteria-hero">
        <div className="container">
          <h1>Eligibility Criteria</h1>
          <p>Understand the admission requirements and eligibility criteria for different grades</p>
        </div>
      </section>

      <div className="container">
        {/* General Eligibility */}
        <section>
          <div className="section-header">
            <h2>General Eligibility Requirements</h2>
            <p>Our admission criteria ensure a smooth transition for all students</p>
          </div>
          
          <div className="eligibility-grid">
            <div className="eligibility-card">
              <h3><FaChild /> Age Requirements</h3>
              <p>Students must meet the minimum and maximum age criteria for their respective classes as specified below.</p>
            </div>
            
            <div className="eligibility-card">
              <h3><FaGraduationCap /> Academic Records</h3>
              <p>For admission to classes 1 and above, students must provide the previous year's report card and transfer certificate.</p>
            </div>
            
            <div className="eligibility-card">
              <h3><FaFileAlt /> Documentation</h3>
              <p>All required documents must be submitted at the time of admission for verification.</p>
            </div>
          </div>
        </section>

        {/* Age Criteria Table */}
        <section>
          <div className="section-header">
            <h2>Age Criteria</h2>
            <p>Age requirements for different classes (as on March 31st of the admission year)</p>
          </div>
          
          <div className="table-responsive">
            <table className="age-criteria">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Minimum Age</th>
                  <th>Maximum Age</th>
                  <th>As On</th>
                </tr>
              </thead>
              <tbody>
                {ageCriteria.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.class}</strong></td>
                    <td>{item.minAge}</td>
                    <td>{item.maxAge}</td>
                    <td>{item.asOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Document Requirements */}
        <section>
          <div className="section-header">
            <h2>Required Documents</h2>
            <p>Please ensure you have all the necessary documents ready for the admission process</p>
          </div>
          
          <div className="document-requirements">
            <ul>
              {documents.map((doc) => (
                <li key={doc.id}>
                  <FaCheckCircle />
                  <span>{doc.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Additional Notes */}
        <section className="section-notes">
          <div className="eligibility-card">
            <h3><FaCalendarAlt /> Important Notes</h3>
            <ul>
              <li>Age relaxation of up to 30 days may be considered in exceptional cases.</li>
              <li>Students seeking admission to classes 6 and above may need to appear for an entrance test.</li>
              <li>Original documents will be verified and returned after making copies.</li>
              <li>Incomplete applications will not be processed.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
