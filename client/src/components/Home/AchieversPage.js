import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './AchieversPage.css';

// Sample data - replace with your actual data
const generateMockAchievers = (classNumber, count) => {
  const positions = ['1st', '2nd', '3rd', '4th', '5th'];
  return Array.from({ length: count }, (_, i) => ({
    id: `${classNumber}-${i + 1}`,
    name: `Student ${i + 1}`,
    class: classNumber,
    position: positions[i] || `${i + 1}th`,
    percentage: (95 - i * 2).toFixed(2) + '%',
    image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 10}.jpg`
  }));
};

const classData = {
  '12th': generateMockAchievers('12th', 10),
  '11th': generateMockAchievers('11th', 10),
  '10th': generateMockAchievers('10th', 10),
  '9th': generateMockAchievers('9th', 10),
  '8th': generateMockAchievers('8th', 10),
  '7th': generateMockAchievers('7th', 10),
  '6th': generateMockAchievers('6th', 10)
};

const AchieversPage = () => {
  const [activeClass, setActiveClass] = useState('12th');
  const [currentPage, setCurrentPage] = useState(0);
  const achieversPerPage = 5;

  const currentAchievers = classData[activeClass] || [];
  const totalPages = Math.ceil(currentAchievers.length / achieversPerPage);
  const paginatedAchievers = currentAchievers.slice(
    currentPage * achieversPerPage,
    (currentPage + 1) * achieversPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="achievers-page">
      <div className="achievers-header">
        <h1>Our Achievers</h1>
        <p>Celebrating academic excellence across all classes</p>
      </div>

      <div className="class-selector">
        {Object.keys(classData).map((classNum) => (
          <button
            key={classNum}
            className={`class-tab ${activeClass === classNum ? 'active' : ''}`}
            onClick={() => {
              setActiveClass(classNum);
              setCurrentPage(0);
            }}
          >
            Class {classNum}
          </button>
        ))}
      </div>

      <div className="achievers-container">
        <div className="achievers-list">
          {paginatedAchievers.map((achiever, index) => (
            <div key={achiever.id} className="achiever-card">
              <div className="achiever-position">
                <FaTrophy className={`trophy-icon ${achiever.position.toLowerCase().includes('1') ? 'gold' :
                  achiever.position.toLowerCase().includes('2') ? 'silver' : 'bronze'}`} />
                <span className="position-badge">{achiever.position}</span>
              </div>
              <div className="achiever-image">
                <img src={achiever.image} alt={achiever.name} />
              </div>
              <div className="achiever-details">
                <h3>{achiever.name}</h3>
                <p className="achiever-class">Class {achiever.class}</p>
                <p className="achiever-percentage">{achiever.percentage}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="pagination-arrow"
          >
            <FaChevronLeft />
          </button>

          <div className="page-indicator">
            Page {currentPage + 1} of {totalPages}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1}
            className="pagination-arrow"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchieversPage;
