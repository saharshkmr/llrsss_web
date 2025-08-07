import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import logo from '../../assests/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    // Close dropdown when route changes
    useEffect(() => {
        setActiveDropdown(null);
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const navItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Academics',
            path: '#',
            dropdown: [
                { title: 'Academic Curriculum', path: '/academics/curriculum' },
                { title: 'School Timings', path: '/academics/timings' },
                { title: 'Academic Calendar', path: '/academics/calendar' },
                { title: 'Subject Departments', path: '/academics/departments' },
                { title: 'Examination System', path: '/academics/examinations' },
                { title: 'Results & Analysis', path: '/academics/results' },
                { title: 'Scholarships', path: '/academics/scholarships' },
                { title: 'Academic Resources', path: '/academics/resources' }
            ]
        },
        {
            title: 'Admission',
            path: '#',
            dropdown: [
                { title: 'Why Choose LLRSSS?', path: '/admissions/why-us' },
                { title: 'Admission Procedure', path: '/admissions/procedure' },
                { title: 'Fee Structure', path: '/admissions/fees' },
                { title: 'Eligibility Criteria', path: '/admissions/eligibility' },
                { title: 'Important Dates', path: '/admissions/dates' },
                { title: 'Online Application', path: '/admissions/apply' },
                { title: 'Virtual Tour', path: '/admissions/tour' },
                { title: 'FAQs', path: '/admissions/faqs' }
            ]
        },
        {
            title: 'Student Life',
            path: '#',
            dropdown: [
                { title: 'School Events', path: '/student-life/events' },
                { title: 'Clubs & Societies', path: '/student-life/clubs' },
                { title: 'Sports & Games', path: '/student-life/sports' },
                { title: 'Cultural Activities', path: '/student-life/cultural' },
                { title: 'Houses & Competitions', path: '/student-life/houses' },
                { title: 'School Magazine', path: '/student-life/magazine' },
                { title: 'Alumni Network', path: '/alumni' }
            ]
        },
        {
            title: 'Facilities', path: '/facilities',
            dropdown: [
                { title: 'Library', path: '/facilities/library' },
                { title: 'Playground', path: '/facilities/playground' },
                { title: 'Computer Lab', path: '/facilities/computer-lab' },
                { title: 'Science Lab', path: '/facilities/science-lab' },
                { title: 'Art Room', path: '/facilities/art-room' },
                { title: 'Music Room', path: '/facilities/music-room' },
                { title: 'Smart Class', path: '/facilities/smart-class' }
            ]
        },
        {
            title: 'Faculty',
            path: '/faculty',
            dropdown: [
                { title: 'Teaching Staff', path: '/faculty/teaching-staff' },
                { title: 'Non-Teaching Staff', path: '/faculty/non-teaching-staff' },
                { title: 'Class Teachers', path: '/faculty/class-teachers' },
                { title: 'Office Staff', path: '/faculty/office-staff' }
            ]
        },
        { title: 'Gallery', path: '/gallery' },
        { title: 'Contact Us', path: '/contact' },
        {
            title: 'About Us',
            path: '#',
            dropdown: [
                { title: 'About School', path: '/about/llrsss' },
                { title: 'Principal\'s Desk', path: '/about/principal' },
                { title: 'Vice Principal', path: '/about/vice-principal' },
                { title: 'Our Mission & Vision', path: '/about/mission-vision' },
                { title: 'School Infrastructure', path: '/about/infrastructure' },
                { title: 'School Committees', path: '/about/committees' },
                { title: 'Awards & Achievements', path: '/about/awards' },
                { title: 'School Uniform', path: '/about/uniform' },
                { title: 'School Managing Committee', path: '/about/committee' },
                { title: 'PHB Executive Committee', path: '/about/phb' },
            ]
        }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo">
                    <img src={logo} alt="LLRBMSSS Logo" className="logo-image" />
                    <div className="logo-text">
                        <span className="school-name">Lala Lajpat Rai Bal Mandir</span>
                        <span className="school-name">Senior Secondary School</span>
                        <span className="school-tagline">Excellence in Education</span>
                    </div>
                </NavLink>

                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className={`nav-item ${activeDropdown === index ? 'active' : ''}`}
                        >
                            <div
                                className={`nav-links ${item.dropdown ? 'has-dropdown' : ''} ${activeDropdown === index ? 'active' : ''}`}
                                onClick={() => {
                                    if (!item.dropdown) {
                                        setIsMenuOpen(false);
                                    } else {
                                        toggleDropdown(index);
                                    }
                                }}
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    end={!item.dropdown}
                                >
                                    <span className="nav-link-content">
                                        {item.title}
                                    </span>
                                </NavLink>
                                {item.dropdown && (
                                    <span className="dropdown-arrow">
                                        {activeDropdown === index ? (
                                            <FaChevronUp className="dropdown-arrow-icon" />
                                        ) : (
                                            <FaChevronDown className="dropdown-arrow-icon" />
                                        )}
                                    </span>
                                )}
                            </div>

                            {item.dropdown && (
                                <ul
                                    className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}
                                    data-dropdown={item.title.toLowerCase().replace(' ', '-')}
                                >
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <li key={subIndex} className="dropdown-item">
                                            <NavLink
                                                to={subItem.path}
                                                className={({ isActive }) =>
                                                    `dropdown-link ${isActive ? 'active' : ''}`
                                                }
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {subItem.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
