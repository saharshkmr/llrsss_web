import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeachingStaff.css';

const TeachingStaff = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const itemsPerPage = 9;

    // Sample data for teaching staff
    const allStaff = Array.from({ length: 150 }, (_, i) => ({
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

    // Filter and search functionality
    const filteredStaff = allStaff.filter(staff => {
        const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.subject.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'All' || staff.position === activeFilter;
        return matchesSearch && matchesFilter;
    });

    // Pagination
    const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStaff = filteredStaff.slice(indexOfFirstItem, indexOfLastItem);

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, activeFilter]);

    const handleCardClick = (staff) => {
        navigate(`/faculty/teaching-staff/${staff.id}`);
    };

    const closePopup = () => {
        setShowPopup(false);
        document.body.style.overflow = 'unset'; // Re-enable scrolling
    };

    const handleViewProfile = (staffId) => {
        navigate(`/faculty/teaching-staff/${staffId}`);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilter = (filter) => {
        setActiveFilter(filter);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="teaching-staff py-5">
            <div className="container">
                <h2 className="section-title">Our Esteemed Teaching Staff</h2>

                {/* Search and Filter Controls */}
                <div className="filters-container">
                    <div className="search-box">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search by name or subject..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="filter-buttons">
                        {['All', 'Principal', 'Vice Principal', 'Senior Teacher', 'Teacher'].map((filter) => (
                            <button
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => handleFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {currentStaff.length > 0 ? (
                    <>
                        <div className="staff-grid">
                            {currentStaff.map((staff) => (
                                <div
                                    key={staff.id}
                                    className="staff-card"
                                    onClick={() => handleCardClick(staff)}
                                >
                                    <div className="card-front">
                                        <div className="staff-image-container">
                                            <img src={staff.image} alt={staff.name} className="staff-image" />
                                        </div>
                                        <div className="staff-basic-info">
                                            <h3 className="staff-name">{staff.name}</h3>
                                            <p className="staff-position">{staff.position}</p>
                                            <p className="staff-subject">{staff.subject}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Popup */}
                        {showPopup && selectedStaff && (
                            <div className="popup-overlay active" onClick={closePopup}>
                                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                                    <button className="close-btn" onClick={closePopup}>&times;</button>
                                    <div className="staff-details-popup">
                                        <div className="staff-image-container">
                                            <img src={selectedStaff.image} alt={selectedStaff.name} />
                                        </div>
                                        <h2>{selectedStaff.name}</h2>
                                        <p className="position">{selectedStaff.position}</p>
                                        <p className="subject">{selectedStaff.subject} Teacher</p>
                                        
                                        <div className="details-grid">
                                            <div className="detail-item">
                                                <i className="fas fa-graduation-cap"></i>
                                                <div>
                                                    <span className="label">Qualification</span>
                                                    <span className="value">{selectedStaff.qualification}</span>
                                                </div>
                                            </div>
                                            <div className="detail-item">
                                                <i className="fas fa-briefcase"></i>
                                                <div>
                                                    <span className="label">Experience</span>
                                                    <span className="value">{selectedStaff.experience}</span>
                                                </div>
                                            </div>
                                            <div className="detail-item">
                                                <i className="fas fa-envelope"></i>
                                                <div>
                                                    <span className="label">Email</span>
                                                    <span className="value">{selectedStaff.email}</span>
                                                </div>
                                            </div>
                                            <div className="detail-item">
                                                <i className="fas fa-phone"></i>
                                                <div>
                                                    <span className="label">Phone</span>
                                                    <span className="value">{selectedStaff.phone}</span>
                                                </div>
                                            </div>
                                            <div className="detail-item">
                                                <i className="fas fa-calendar-alt"></i>
                                                <div>
                                                    <span className="label">Joined</span>
                                                    <span className="value">{selectedStaff.joiningDate}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <button 
                                            className="view-profile-btn"
                                            onClick={() => handleViewProfile(selectedStaff.id)}
                                        >
                                            View Full Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="pagination">
                                <button
                                    onClick={() => handlePageChange(1)}
                                    disabled={currentPage === 1}
                                >
                                    &laquo;
                                </button>
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    &lsaquo;
                                </button>

                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    let pageNum;
                                    if (totalPages <= 5) {
                                        pageNum = i + 1;
                                    } else if (currentPage <= 3) {
                                        pageNum = i + 1;
                                    } else if (currentPage >= totalPages - 2) {
                                        pageNum = totalPages - 4 + i;
                                    } else {
                                        pageNum = currentPage - 2 + i;
                                    }

                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => handlePageChange(pageNum)}
                                            className={currentPage === pageNum ? 'active' : ''}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    &rsaquo;
                                </button>
                                <button
                                    onClick={() => handlePageChange(totalPages)}
                                    disabled={currentPage === totalPages}
                                >
                                    &raquo;
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="no-results">
                        <p>No staff members found matching your search criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeachingStaff;
