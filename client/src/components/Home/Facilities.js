import React from 'react';
import { Link } from 'react-router-dom';
import './Facilities.css';

// Icons for the facilities
const busIcon = 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png'; // School bus icon
const playgroundIcon = 'https://cdn-icons-png.flaticon.com/512/2583/2583344.png'; // Playground icon
const labIcon = 'https://cdn-icons-png.flaticon.com/512/1995/1995486.png'; // Science lab icon
const learningIcon = 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png'; // Learning/education icon

const Facilities = () => {
    const facilities = [
        {
            id: 1,
            title: 'School Bus',
            description: 'School buses are the most preferred and frequently used transportation system of commute for the students.',
            icon: busIcon,
            link: '/facilities/transportation',
            color: '#FF6B6B' // Red
        },
        {
            id: 2,
            title: 'Playground',
            description: 'A playground, playpark, or play area is a place designed to provide an environment for children that facilitates play, typically outdoors.',
            icon: playgroundIcon,
            link: '/facilities/playground',
            color: '#4ECDC4' // Teal
        },
        {
            id: 3,
            title: 'Laboratories',
            description: 'Students use laboratories as well to design, build, and test technological devices.',
            icon: labIcon,
            link: '/facilities/laboratories',
            color: '#45B7D1' // Blue
        },
        {
            id: 4,
            title: 'Positive Learning',
            description: 'A smart classroom is an EdTech-upgraded classroom that enhances the teaching and learning process for both the teachers and the students.',
            icon: learningIcon,
            link: '/facilities/smart-classrooms',
            color: '#96CEB4' // Green
        }
    ];

    // Get ellipse style for each facility
    const getEllipseStyle = (color) => ({
        background: `radial-gradient(ellipse at center, ${color} 0%, ${color} 20%, transparent 70%)`,
        width: '300px',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        opacity: 0.8,
        zIndex: 1
    });

    return (
        <section className="facilities">
            <div className="container">
                <div className="facilities-header">
                    <h2>Our Facilities</h2>
                    <p>Providing world-class infrastructure to support academic excellence and holistic development</p>
                </div>

                <div className="facilities-container">
                    {facilities.map((facility, index) => (
                        <div key={facility.id} className="facility-item">
                            <div className="facility-ellipse" style={{ backgroundColor: `${facility.color}20` }}>
                                <div className="ellipse-shape" style={getEllipseStyle(facility.color)}></div>
                            </div>
                            <div className="facility-content">
                                <div className="facility-icon" style={{ backgroundColor: facility.color }}>
                                    <img 
                                        src={facility.icon} 
                                        alt={facility.title}
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                </div>
                                <h3>{facility.title}</h3>
                                <p className="facility-description">{facility.description}</p>
                                <Link to={facility.link} className="facility-link">
                                    Read More
                                    <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
