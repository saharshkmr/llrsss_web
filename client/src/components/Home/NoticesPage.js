import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Notice.css';
import './NoticesPage.css';

const NoticesPage = () => {
  const navigate = useNavigate();

  // Sample notices data
  const notices = [
    {
      id: 1,
      title: 'School Reopening Notice',
      date: '2025-08-15',
      category: 'Academics',
      content: 'All students are informed that the school will reopen on 1st September 2025.',
      important: true
    },
    {
      id: 2,
      title: 'Annual Sports Day',
      date: '2025-08-20',
      category: 'Events',
      content: 'Annual Sports Day will be held on 20th August 2025. All students must participate.'
    },
    {
      id: 3,
      title: 'Mid-Term Examination',
      date: '2025-08-25',
      category: 'Exams',
      content: 'Mid-term examinations will commence from 25th August 2025.'
    },
    {
      id: 4,
      title: 'Teacher\'s Day Celebration',
      date: '2025-09-05',
      category: 'Events',
      content: 'Celebrating Teacher\'s Day on 5th September 2025.'
    }
  ];

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="notices-page">
      <div className="container">
        <div className="page-header">
          <h1>Notice Board</h1>
          <p>Stay updated with the latest announcements and notices.</p>
        </div>

        <div className="notices-container">
          {notices.map((notice) => (
            <div key={notice.id} className={`notice-card ${notice.important ? 'important' : ''}`}>
              {notice.important && <div className="important-badge">Important</div>}
              <div className="notice-date">
                <span className="date-day">{new Date(notice.date).getDate()}</span>
                <span className="date-month">
                  {new Date(notice.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                </span>
              </div>
              <div className="notice-content">
                <div className="notice-header">
                  <h3>{notice.title}</h3>
                  <span className={`notice-category ${notice.category.toLowerCase()}`}>
                    {notice.category}
                  </span>
                </div>
                <p className="notice-excerpt">{notice.content}</p>
                <div className="notice-footer">
                  <span className="notice-date-full">{formatDate(notice.date)}</span>
                  <button 
                    className="read-more-btn"
                    onClick={() => navigate(`/notices/${notice.id}`)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticesPage;
