import React, { useState, useEffect } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const reasons = [
    {
      icon: '🏫',
      title: 'Experienced Faculty',
      description: 'Our team of highly qualified and experienced educators is dedicated to nurturing young minds and fostering a love for learning.'
    },
    {
      icon: '📚',
      title: 'Comprehensive Curriculum',
      description: 'We follow a well-structured curriculum that combines academic excellence with co-curricular activities for holistic development.'
    },
    {
      icon: '🔬',
      title: 'Modern Facilities',
      description: 'State-of-the-art laboratories, well-stocked library, and smart classrooms provide an ideal learning environment.'
    },
    {
      icon: '🎯',
      title: 'Individual Attention',
      description: 'With a low student-teacher ratio, we ensure personalized attention to each student\'s academic needs.'
    },
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Consistent outstanding academic results and achievements in various competitive examinations.'
    },
    {
      icon: '🌐',
      title: 'Global Perspective',
      description: 'Our curriculum includes global perspectives to prepare students for international opportunities.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Choosing Lala Lajpat Rai Bal Mandir for our child was the best decision we made. The teachers are dedicated, and the school provides excellent academic and co-curricular opportunities.",
      author: "Mrs. Sharma",
      role: "Parent of Class 5 student"
    },
    {
      id: 2,
      quote: "The school's focus on overall development is impressive. My child has grown not just academically but also in confidence and personality.",
      author: "Mr. Patel",
      role: "Parent of Class 8 student"
    },
    {
      id: 3,
      quote: "The teachers go above and beyond to ensure every child understands the concepts. The regular parent-teacher meetings keep us well-informed about our child's progress.",
      author: "Mrs. Gupta",
      role: "Parent of Class 3 student"
    },
    {
      id: 4,
      quote: "The infrastructure and facilities are top-notch. The school provides a safe and nurturing environment that encourages children to explore their potential.",
      author: "Mr. Singh",
      role: "Parent of Class 10 student"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  // Pause auto-slide on hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="why-choose-us">
      <section className="curriculum-hero">
        <div className="container">
          <h1>Why Choose Lala Lajpat Rai Bal Mandir?</h1>
          <p>Discover what makes our school the perfect choice for your child's education and overall development.</p>
        </div>
      </section>

      <section className="reasons-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Key Differentiators</h2>
            <p>Here are some compelling reasons why parents trust us with their children's education</p>
          </div>
          
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="section-header">
            <h2>What Parents Say</h2>
            <p>Hear from our parent community about their experience</p>
          </div>
          
          <div 
            className="testimonials-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button 
              className={`testimonial-nav prev ${isHovered ? 'visible' : ''}`} 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            
            <div className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                >
                  <div className="testimonial">
                    <blockquote>"{testimonial.quote}"</blockquote>
                    <div className="testimonial-author">- {testimonial.author}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className={`testimonial-nav next ${isHovered ? 'visible' : ''}`} 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Join Our School Community?</h2>
            <p>Discover more about our admission process and secure your child's future today.</p>
          </div>
          <div className="cta-buttons">
            <a href="/admissions/procedure" className="btn btn-primary">Admission Procedure</a>
            <a href="/contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
