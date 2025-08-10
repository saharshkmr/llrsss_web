import React from 'react';
import './SchoolTimings.css';

const SchoolTimings = () => {
  const timings = [
    {
      section: 'Pre-Primary (Nursery to UKG)',
      timing: '8:30 AM to 12:30 PM',
      description: 'Morning session with play-based learning activities and rest periods.'
    },
    {
      section: 'Primary (Classes I to V)',
      timing: '8:00 AM to 2:00 PM',
      description: 'Regular school hours with a balanced mix of academics and co-curricular activities.'
    },
    {
      section: 'Middle School (Classes VI to VIII)',
      timing: '8:00 AM to 2:30 PM',
      description: 'Extended hours to accommodate additional subjects and activities.'
    },
    {
      section: 'Secondary (Classes IX & X)',
      timing: '8:00 AM to 2:45 PM',
      description: 'Focused academic schedule with additional support classes as needed.'
    },
    {
      section: 'Senior Secondary (Classes XI & XII)',
      timing: '8:00 AM to 3:00 PM',
      description: 'Extended hours for practicals, projects, and specialized streams.'
    }
  ];

  const dailySchedule = [
    { time: '8:00 AM - 8:30 AM', activity: 'Morning Assembly' },
    { time: '8:30 AM - 9:15 AM', activity: '1st Period' },
    { time: '9:15 AM - 10:00 AM', activity: '2nd Period' },
    { time: '10:00 AM - 10:15 AM', activity: 'Short Break' },
    { time: '10:15 AM - 11:00 AM', activity: '3rd Period' },
    { time: '11:00 AM - 11:45 AM', activity: '4th Period' },
    { time: '11:45 AM - 12:30 PM', activity: 'Lunch Break' },
    { time: '12:30 PM - 1:15 PM', activity: '5th Period' },
    { time: '1:15 PM - 2:00 PM', activity: '6th Period' },
    { time: '2:00 PM - 2:45 PM', activity: '7th Period (for higher classes)' },
    { time: '2:45 PM - 3:00 PM', activity: 'Dispersal' }
  ];

  return (
    <div className="school-timings">
      <section className="timings-hero">
        <div className="container">
          <h1>School Timings</h1>
          <p>Structured schedule for optimal learning and development</p>
        </div>
      </section>

      <section className="timings-content">
        <div className="container">
          <div className="timings-intro">
            <h2>Our Daily Schedule</h2>
            <p>At LLRBMSSS, we maintain a well-balanced schedule that ensures students have the right mix of academic learning, co-curricular activities, and rest periods. Our timings are designed to maximize learning while maintaining student well-being.</p>
          </div>

          <div className="timing-cards">
            {timings.map((item, index) => (
              <div key={index} className="timing-card">
                <h3>{item.section}</h3>
                <div className="timing-details">
                  <span className="time">{item.timing}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="daily-schedule">
            <h2>Typical Daily Schedule</h2>
            <div className="schedule-table">
              <div className="schedule-header">
                <div className="time-col">Time</div>
                <div className="activity-col">Activity</div>
              </div>
              {dailySchedule.map((item, index) => (
                <div key={index} className="schedule-row">
                  <div className="time-col">{item.time}</div>
                  <div className="activity-col">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="important-notes">
            <h3>Important Notes:</h3>
            <ul>
              <li>Students should arrive 10-15 minutes before the scheduled time</li>
              <li>Regular attendance is mandatory for all students</li>
              <li>Special schedules may be followed during examinations and events</li>
              <li>Parents are requested to pick up their wards on time</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolTimings;
