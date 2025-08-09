import React, { useState } from 'react';
import './AcademicCalendar.css';

const AcademicCalendar = () => {
  // Academic year 2025-2026 data
  const academicYear = '2025-2026';

  // State for active filters
  const [activeFilters, setActiveFilters] = useState({
    academic: true,
    holiday: true,
    exam: true,
    event: true
  });

  // Toggle filter
  const toggleFilter = (filterType) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  // Events data
  const events = [
    // April 2025
    {
      id: 1,
      title: 'First Day of School',
      date: 'April 1, 2025',
      description: 'Welcome back students! First day of the academic year 2025-2026.',
      type: 'academic',
    },
    {
      id: 2,
      title: 'Ram Navami',
      date: 'April 6, 2025',
      description: 'School closed for Ram Navami.',
      type: 'holiday',
    },
    {
      id: 3,
      title: 'Mahavir Jayanti',
      date: 'April 12, 2025',
      description: 'School closed for Mahavir Jayanti.',
      type: 'holiday',
    },
    
    // May 2025
    {
      id: 4,
      title: 'May Day',
      date: 'May 1, 2025',
      description: 'School closed for International Workers\' Day.',
      type: 'holiday',
    },
    {
      id: 5,
      title: 'Summer Vacation Begins',
      date: 'May 15, 2025',
      description: 'Summer vacation starts for all students.',
      type: 'holiday',
    },
    
    // June 2025
    {
      id: 6,
      title: 'School Reopens',
      date: 'June 16, 2025',
      description: 'School reopens after summer vacation.',
      type: 'academic',
    },
    
    // July 2025
    {
      id: 7,
      title: 'Rath Yatra',
      date: 'July 7, 2025',
      description: 'School closed for Rath Yatra.',
      type: 'holiday',
    },
    {
      id: 8,
      title: 'Mid-Term Examinations',
      date: 'July 15-30, 2025',
      description: 'Mid-term examinations for all classes.',
      type: 'exam',
    },
    
    // August 2025
    {
      id: 9,
      title: 'Independence Day',
      date: 'August 15, 2025',
      description: 'School closed for Independence Day.',
      type: 'holiday',
    },
    {
      id: 10,
      title: 'Raksha Bandhan',
      date: 'August 18, 2025',
      description: 'School closed for Raksha Bandhan.',
      type: 'holiday',
    },
    {
      id: 11,
      title: 'Janmashtami',
      date: 'August 25, 2025',
      description: 'School closed for Janmashtami.',
      type: 'holiday',
    },
    
    // September 2025
    {
      id: 12,
      title: 'Ganesh Chaturthi',
      date: 'September 1, 2025',
      description: 'School closed for Ganesh Chaturthi.',
      type: 'holiday',
    },
    {
      id: 13,
      title: 'Teachers\' Day',
      date: 'September 5, 2025',
      description: 'Teachers\' Day celebrations.',
      type: 'event',
    },
    {
      id: 14,
      title: 'Annual Sports Day',
      date: 'September 20, 2025',
      description: 'Annual sports competition for all students.',
      type: 'event',
    },
    
    // October 2025
    {
      id: 15,
      title: 'Gandhi Jayanti',
      date: 'October 2, 2025',
      description: 'School closed for Gandhi Jayanti.',
      type: 'holiday',
    },
    {
      id: 16,
      title: 'Dussehra Break',
      date: 'October 10-15, 2025',
      description: 'School closed for Dussehra vacation.',
      type: 'holiday',
    },
    
    // November 2025
    {
      id: 17,
      title: 'Diwali Break',
      date: 'November 1-10, 2025',
      description: 'School closed for Diwali vacation.',
      type: 'holiday',
    },
    {
      id: 18,
      title: 'Children\'s Day',
      date: 'November 14, 2025',
      description: 'Children\'s Day celebrations.',
      type: 'event',
    },
    {
      id: 19,
      title: 'Guru Nanak Jayanti',
      date: 'November 23, 2025',
      description: 'School closed for Guru Nanak Jayanti.',
      type: 'holiday',
    },
    
    // December 2025
    {
      id: 20,
      title: 'Final Examinations',
      date: 'December 1-15, 2025',
      description: 'Final examinations for all classes.',
      type: 'exam',
    },
    {
      id: 21,
      title: 'Christmas Break',
      date: 'December 20, 2025 - January 5, 2026',
      description: 'Winter vacation for all students and staff.',
      type: 'holiday',
    },
    
    // January 2026
    {
      id: 22,
      title: 'New Year\'s Day',
      date: 'January 1, 2026',
      description: 'School closed for New Year\'s Day.',
      type: 'holiday',
    },
    {
      id: 23,
      title: 'Makar Sankranti',
      date: 'January 14, 2026',
      description: 'School closed for Makar Sankranti.',
      type: 'holiday',
    },
    {
      id: 24,
      title: 'Republic Day',
      date: 'January 26, 2026',
      description: 'Republic Day celebrations and holiday.',
      type: 'holiday',
    },
    
    // February 2026
    {
      id: 25,
      title: 'Vasant Panchami',
      date: 'February 2, 2026',
      description: 'School closed for Vasant Panchami.',
      type: 'holiday',
    },
    {
      id: 26,
      title: 'Annual Day',
      date: 'February 15, 2026',
      description: 'Annual day celebrations and prize distribution.',
      type: 'event',
    },
    
    // March 2026
    {
      id: 27,
      title: 'Maha Shivratri',
      date: 'March 2, 2026',
      description: 'School closed for Maha Shivratri.',
      type: 'holiday',
    },
    {
      id: 28,
      title: 'Holi',
      date: 'March 21, 2026',
      description: 'School closed for Holi.',
      type: 'holiday',
    },
    {
      id: 29,
      title: 'Good Friday',
      date: 'March 27, 2026',
      description: 'School closed for Good Friday.',
      type: 'holiday',
    },
  ];

  // Group events by month
  const groupEventsByMonth = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Filter events based on active filters
    const filteredEvents = events.filter(event => activeFilters[event.type]);
    
    const result = [];
    
    months.forEach((month, index) => {
      const monthEvents = filteredEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() === index && 
               (eventDate.getFullYear() === 2025 || eventDate.getFullYear() === 2026);
      });

      if (monthEvents.length > 0) {
        result.push({
          month,
          year: monthEvents[0].date.split(', ')[1],
          events: monthEvents
        });
      }
    });
    
    return result;
  };

  const monthsWithEvents = groupEventsByMonth();

  return (
    <div className="academic-calendar">
      <div className="calendar-header">
        <h1>Academic Calendar {academicYear}</h1>
        <p>Click on the event types below to filter the calendar</p>
      </div>
      
      <div className="legend">
        <div 
          className={`legend-item ${activeFilters.academic ? 'active' : 'inactive'}`}
          onClick={() => toggleFilter('academic')}
        >
          <span className="legend-color academic"></span>
          <span>Academic</span>
        </div>
        <div 
          className={`legend-item ${activeFilters.holiday ? 'active' : 'inactive'}`}
          onClick={() => toggleFilter('holiday')}
        >
          <span className="legend-color holiday"></span>
          <span>Holiday</span>
        </div>
        <div 
          className={`legend-item ${activeFilters.exam ? 'active' : 'inactive'}`}
          onClick={() => toggleFilter('exam')}
        >
          <span className="legend-color exam"></span>
          <span>Examination</span>
        </div>
        <div 
          className={`legend-item ${activeFilters.event ? 'active' : 'inactive'}`}
          onClick={() => toggleFilter('event')}
        >
          <span className="legend-color event"></span>
          <span>Event</span>
        </div>
      </div>
      
      <div className="calendar-content">
        {monthsWithEvents.length > 0 ? (
          monthsWithEvents.map((monthData, index) => {
            if (!monthData) return null;
            return (
              <div key={`${monthData.month}-${monthData.year}`} className="calendar-month">
                <h2 className="month-title">{monthData.month} {monthData.year}</h2>
                <div className="events-grid">
                  {monthData.events && monthData.events.map(event => (
                    <div key={event.id} className={`event-card ${event.type}`}>
                      <div className="event-date">{event.date}</div>
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      <span className="event-type">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-events">
            <p>No events match the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicCalendar;
