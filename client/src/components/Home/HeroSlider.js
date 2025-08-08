import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HeroSlider.css';

// Importing all images from the assets folder
import h1 from '../../assests/HomeHero/h1.jpg';
import h2 from '../../assests/HomeHero/h2.jpg';
import h3 from '../../assests/HomeHero/h3.jpg';
import h4 from '../../assests/HomeHero/h4.jpg';
import h5 from '../../assests/HomeHero/h5.jpg';
import h6 from '../../assests/HomeHero/h6.jpg';
import h7 from '../../assests/HomeHero/h7.jpg';
import h8 from '../../assests/HomeHero/h8.jpg';
import h9 from '../../assests/HomeHero/h9.jpg';
import h10 from '../../assests/HomeHero/h10.jpg';
import h11 from '../../assests/HomeHero/h11.jpg';
import h12 from '../../assests/HomeHero/h12.jpg';
import h13 from '../../assests/HomeHero/h13.jpg';
import h14 from '../../assests/HomeHero/h14.jpg';
import h15 from '../../assests/HomeHero/h15.jpg';
import h16 from '../../assests/HomeHero/h16.jpg';

// School hero images with all 16 slides
const slides = [
    {
        id: 1,
        image: h1,
        alt: 'School Building',
    },
    {
        id: 2,
        image: h2,
        alt: 'Students in Classroom',
    },
    {
        id: 3,
        image: h3,
        alt: 'School Event',
    },
    {
        id: 4,
        image: h4,
        alt: 'School Campus',
    },
    {
        id: 5,
        image: h5,
        alt: 'Academic Excellence',
    },
    {
        id: 6,
        image: h6,
        alt: 'Students Activities',
    },
    {
        id: 7,
        image: h7,
        alt: 'School Facilities',
    },
    {
        id: 8,
        image: h8,
        alt: 'Learning Environment',
    },
    {
        id: 9,
        image: h9,
        alt: 'Student Life',
    },
    {
        id: 10,
        image: h10,
        alt: 'School Grounds',
    },
    {
        id: 11,
        image: h11,
        alt: 'Classroom Activities',
    },
    {
        id: 12,
        image: h12,
        alt: 'Educational Programs',
    },
    {
        id: 13,
        image: h13,
        alt: 'Student Achievements',
    },
    {
        id: 14,
        image: h14,
        alt: 'School Community',
    },
    {
        id: 15,
        image: h15,
        alt: 'Learning Spaces',
    },
    {
        id: 16,
        image: h16,
        alt: 'School Environment',
    },
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto slide functionality
    useEffect(() => {
        let slideInterval;

        if (isAutoPlaying) {
            slideInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => clearInterval(slideInterval);
    }, [currentSlide, isAutoPlaying]);

    return (
        <div className="hero-slider">
            <div
                className="slider-container"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="slide">
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="slide-image"
                        />
                        <div className="slide-overlay"></div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                className="slider-nav prev"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <FaChevronLeft />
            </button>
            <button
                className="slider-nav next"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <FaChevronRight />
            </button>

            {/* Dots Navigation */}
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
