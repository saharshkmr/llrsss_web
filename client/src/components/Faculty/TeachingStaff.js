import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeachingStaff.css';

const TeachingStaff = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Sample data for teaching staff (replace with your actual data)
  const teachingStaff = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    name: `Teacher ${i + 1}`,
    position: i % 5 === 0 ? 'Principal' : 
             i % 3 === 0 ? 'Vice Principal' : 
             i % 2 === 0 ? 'Senior Teacher' : 'Teacher',
    qualification: i % 4 === 0 ? 'Ph.D. in Education' : 
                  i % 3 === 0 ? 'M.Ed' : 
                  i % 2 === 0 ? 'B.Ed' : 'M.A., B.Ed',
    experience: `${5 + (i % 20)} years`,
    subject: ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Science',
             'Physics', 'Chemistry', 'Biology', 'History', 'Geography'][i % 10],
    image: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
    email: `teacher${i + 1}@school.edu`,
    phone: `+91 ${Math.floor(9000000000 + Math.random() * 1000000000)}`,
    joiningDate: `${2010 + (i % 15)}-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`
  }));

  const handleCardClick = (staffId) => {
    // Navigate to staff details page or show modal
    navigate(`/faculty/teaching-staff/${staffId}`);
  };

  return (
    <div className="teaching-staff py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Esteemed Teaching Staff</h2>
        
        {/* Search and Filter Controls */}
        <div className="mb-4">
          <input 
            type="text" 
            className="form-control mb-3" 
            placeholder="Search by name or subject..."
            // Add search functionality here
          />
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-sm btn-outline-primary">All</button>
            <button className="btn btn-sm btn-outline-secondary">Principal</button>
            <button className="btn btn-sm btn-outline-secondary">Vice Principal</button>
            <button className="btn btn-sm btn-outline-secondary">Senior Teachers</button>
            <button className="btn btn-sm btn-outline-secondary">Teachers</button>
          </div>
        </div>

        <div className="staff-grid">
          {teachingStaff.map((staff) => (
            <div 
              key={staff.id}
              className={`staff-card ${hoveredCard === staff.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(staff.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(staff.id)}
              role="button"
              tabIndex={0}
            >
              <div className="staff-image-container">
                <img 
                  src={staff.image} 
                  alt={staff.name}
                  className="staff-image"
                  loading="lazy"
                />
              </div>
              <div className="staff-info">
                <h3 className="staff-name">{staff.name}</h3>
                <p className="staff-position">{staff.position}</p>
                
                <div className="staff-details">
                  <p><strong>Subject:</strong> {staff.subject}</p>
                  <p><strong>Qualification:</strong> {staff.qualification}</p>
                  <p><strong>Experience:</strong> {staff.experience}</p>
                  <p><strong>Email:</strong> {staff.email}</p>
                  <p><strong>Phone:</strong> {staff.phone}</p>
                  <p><strong>Since:</strong> {staff.joiningDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination mt-4">
          <button className="btn btn-outline-primary">Previous</button>
          <div className="page-numbers">
            {[1, 2, 3, 4, 5].map(num => (
              <button key={num} className="btn btn-outline-secondary mx-1">
                {num}
              </button>
            ))}
            <span>...</span>
            <button className="btn btn-outline-secondary">15</button>
          </div>
          <button className="btn btn-outline-primary">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TeachingStaff;
