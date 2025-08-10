import React from 'react';
import { FaExclamationCircle, FaInfoCircle, FaRegCalendarAlt } from 'react-icons/fa';
import './ImportantDates.css';

const ImportantDates = () => {
  // Timeline data
  const timelineData = [
    {
      id: 1,
      date: 'January 15, 2025',
      title: 'Admission Process Begins',
      description: 'Online registration portal opens for new admissions. Parents can start filling out application forms.',
      icon: <FaRegCalendarAlt />
    },
    {
      id: 2,
      date: 'February 10, 2025',
      title: 'Last Date for Application Submission',
      description: 'All application forms must be submitted by this date. Late applications will not be considered.',
      icon: <FaExclamationCircle />
    },
    {
      id: 3,
      date: 'February 20, 2025',
      title: 'Entrance Test (For Class 1 & Above)',
      description: 'Written test for students seeking admission to Class 1 and above. Timing: 10:00 AM to 12:00 PM.',
      icon: <FaInfoCircle />
    },
    {
      id: 4,
      date: 'February 25, 2025',
      title: 'Interaction with Parents & Students',
      description: 'Shortlisted candidates and their parents will be invited for an interaction session with the admission committee.',
      icon: <FaRegCalendarAlt />
    },
    {
      id: 5,
      date: 'March 5, 2025',
      title: 'First Merit List Announcement',
      description: 'First list of selected candidates will be displayed on the school notice board and website.',
      icon: <FaExclamationCircle />
    },
    {
      id: 6,
      date: 'March 10-15, 2025',
      title: 'Document Verification & Fee Payment',
      description: 'Selected candidates must complete document verification and pay the admission fee within this period.',
      icon: <FaInfoCircle />
    }
  ];

  // Important notices
  const notices = [
    {
      id: 1,
      date: 'March 20, 2025',
      text: 'Second merit list (if seats remain vacant) will be announced.'
    },
    {
      id: 2,
      date: 'March 25, 2025',
      text: 'Last date for fee payment for candidates in the second list.'
    },
    {
      id: 3,
      date: 'April 5, 2025',
      text: 'Orientation program for new students and parents.'
    },
    {
      id: 4,
      date: 'April 10, 2025',
      text: 'Academic session begins for all classes.'
    }
  ];

  return (
    <div className="important-dates">
      {/* Hero Section */}
      <section className="important-dates-hero">
        <div className="container">
          <h1>Important Dates</h1>
          <p>Stay updated with all the important dates and deadlines for the admission process</p>
        </div>
      </section>

      <div className="container">
        {/* Timeline Section */}
        <section>
          <div className="section-header">
            <h2>Admission Timeline 2025-26</h2>
            <p>Mark your calendars with these important dates for the upcoming academic session</p>
          </div>
          
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div 
                key={item.id} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <div className="timeline-date">
                    {item.icon}
                    {item.date}
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notice Board */}
        <section>
          <div className="notice-board">
            <h3>
              <FaInfoCircle />
              Additional Information
            </h3>
            
            {notices.map(notice => (
              <div key={notice.id} className="notice-item">
                <div className="notice-date">
                  {notice.date}
                </div>
                <div className="notice-text">
                  {notice.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Have Questions About the Admission Process?</h2>
          <p>Our admission team is here to help you with any queries you might have.</p>
          <a href="/contact" className="cta-button">Contact Admission Office</a>
        </section>
      </div>
    </div>
  );
};

export default ImportantDates;
