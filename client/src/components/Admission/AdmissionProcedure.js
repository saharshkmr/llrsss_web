import React from 'react';
import {
    FaCheckCircle,
    FaCalendarAlt,
    FaFileAlt,
    FaClipboardCheck,
    FaUserGraduate,
    FaRupeeSign
} from 'react-icons/fa';
import { MdOutlineContactPhone } from 'react-icons/md';
import { IoMdSchool } from 'react-icons/io';
import './AdmissionProcedure.css';

const AdmissionProcedure = () => {
    const procedureSteps = [
        {
            id: 1,
            title: 'Inquiry & Registration',
            description: 'Visit our school or website to inquire about admission and complete the registration form. Our admission counselors are available to guide you through the process.',
            icon: <MdOutlineContactPhone className="document-icon" />
        },
        {
            id: 2,
            title: 'School Tour',
            description: 'Schedule a campus tour to explore our facilities, meet our faculty, and understand our educational approach.',
            icon: <IoMdSchool className="document-icon" />
        },
        {
            id: 3,
            title: 'Submission of Documents',
            description: 'Submit the required documents along with the completed application form. Please refer to the document checklist below.',
            icon: <FaFileAlt className="document-icon" />
        },
        {
            id: 4,
            title: 'Entrance Assessment',
            description: 'Students may be required to take an entrance test to assess their current academic level and determine appropriate grade placement.',
            icon: <FaClipboardCheck className="document-icon" />
        },
        {
            id: 5,
            title: 'Parent Interview',
            description: 'A meeting with the principal or admission committee to discuss the student\'s needs and the school\'s expectations.',
            icon: <FaUserGraduate className="document-icon" />
        },
        {
            id: 6,
            title: 'Fee Payment & Confirmation',
            description: 'Upon acceptance, complete the admission by paying the required fees within the stipulated time to secure the seat.',
            icon: <FaRupeeSign className="document-icon" />
        }
    ];

    const requiredDocuments = [
        'Birth Certificate (Original + 2 copies)',
        'Aadhar Card (Student & Parents)',
        'Transfer Certificate (Original)',
        'Previous Year\'s Report Card',
        'Address Proof',
        'Passport Size Photographs (4 Nos.)',
        'Caste Certificate (if applicable)',
        'Medical Certificate'
    ];

    return (
        <div className="admission-procedure">
            {/* Hero Section */}
            <section className="admission-procedure-hero">
                <div className="container">
                    <h1>Admission Procedure</h1>
                    <p>Begin your child's journey towards academic excellence with our streamlined admission process</p>
                </div>
            </section>

            <div className="container">
                {/* Procedure Steps */}
                <section>
                    <div className="section-header">
                        <h2>Admission Process</h2>
                        <p>Follow these simple steps to secure admission for your ward at Lala Lajpat Rai Bal Mandir</p>
                    </div>

                    <div className="procedure-steps">
                        {procedureSteps.map((step) => (
                            <div key={step.id} className="step-card">
                                <div className="step-number">{step.id}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Documents Required */}
                <section className="documents-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Required Documents</h2>
                            <p>Please ensure you have the following documents ready for the admission process</p>
                        </div>

                        <div className="documents-grid">
                            {requiredDocuments.map((doc, index) => (
                                <div key={index} className="document-item">
                                    <FaCheckCircle className="document-icon" />
                                    <span>{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Important Dates */}
                <section>
                    <div className="section-header">
                        <h2>Important Dates</h2>
                        <p>Keep track of important admission-related dates and deadlines</p>
                    </div>

                    <div className="procedure-steps">
                        <div className="step-card">
                            <FaCalendarAlt className="document-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                            <h3>Admission Open</h3>
                            <p>1st December 2024</p>
                        </div>
                        <div className="step-card">
                            <FaCalendarAlt className="document-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                            <h3>Last Date for Submission</h3>
                            <p>31st March 2025</p>
                        </div>
                        <div className="step-card">
                            <FaCalendarAlt className="document-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                            <h3>Academic Session Begins</h3>
                            <p>1st April 2025</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <h2>Ready to Begin Your Journey With Us?</h2>
                    <p>Join our community of learners and give your child the gift of quality education</p>
                    <a href="/contact" className="cta-button">Contact Admission Office</a>
                </section>
            </div>
        </div>
    );
};

export default AdmissionProcedure;
