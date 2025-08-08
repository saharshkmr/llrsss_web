import React from 'react';
import { Link } from 'react-router-dom';
import './AdditionalFacilities.css';

// Using placeholder images - replace with actual images when available
const classImg = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
const artImg = 'https://images.unsplash.com/photo-1541961017774-22349e4a5042?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
const colorImg = 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
const playImg = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';

const AdditionalFacilities = () => {
    const facilities = [
        {
            id: 1,
            title: 'Art & Drawing',
            description: 'Art is an umbrella or gamut of any creative activity using one\'s imagination. For e.g Canvas painting is an art form, Sculpting is an art form. Drawing is a type of Art form where an artist sketches his picture on paper as per his imagination.',
            image: artImg,
            link: '/programs/art-drawing'
        },
        {
            id: 2,
            title: 'Color Management',
            description: 'Art is an umbrella or gamut of any creative activity using one\'s imagination. For e.g Canvas painting is an art form, Sculpting is an art form. Drawing is a type of Art form where an artist sketches his picture on paper as per his imagination.',
            image: colorImg,
            link: '/programs/color-management'
        },
        {
            id: 3,
            title: 'Fun & Play',
            description: 'Physical fun such as free play during recess helps develop children\'s motor skills, prevent childhood obesity and build emotional intelligence.',
            image: playImg,
            link: '/programs/fun-play'
        }
    ];

    return (
        <section className="additional-facilities">
            <div className="container">
                <div className="section-header">
                    <h2>School Classes</h2>
                    <p>A type of learning situation: a method by which schools function as organization by grouping their pupils according to various pedagogic principles.</p>
                </div>

                <div className="facilities-grid">
                    {facilities.map((facility) => (
                        <div key={facility.id} className="facility-card">
                            <div className="card-icon">
                                <div className="icon-circle">
                                    <img
                                        src={facility.image}
                                        alt={facility.title}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>{facility.title}</h3>
                                <p className="description">{facility.description}</p>
                                <Link to={facility.link} className="learn-more">
                                    <span>Read More</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdditionalFacilities;
