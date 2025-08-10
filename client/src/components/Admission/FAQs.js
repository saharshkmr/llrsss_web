import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import './FAQs.css';

const FAQs = () => {
  // FAQ data
  const faqData = [
    {
      id: 1,
      category: 'Admission Process',
      questions: [
        {
          id: 1,
          question: 'What is the admission process?',
          answer: 'The admission process includes submitting an online application, appearing for an entrance test (if applicable), and attending a parent-teacher interaction session. Selected candidates will be notified via email and SMS.'
        },
        {
          id: 2,
          question: 'What documents are required for admission?',
          answer: 'You will need the birth certificate, Aadhar card, previous school reports (if applicable), transfer certificate, and passport-sized photographs of the student and parents.'
        },
        {
          id: 3,
          question: 'Is there an entrance exam for admission?',
          answer: 'Yes, students seeking admission to Class 1 and above need to appear for an entrance test. The test evaluates basic knowledge in English, Mathematics, and General Awareness.'
        }
      ]
    },
    {
      id: 2,
      category: 'Academics',
      questions: [
        {
          id: 4,
          question: 'What is the school timing?',
          answer: 'The school timings are from 8:00 AM to 2:00 PM from Monday to Friday. There are special timings for pre-primary classes which will be communicated at the time of admission.'
        },
        {
          id: 5,
          question: 'What is the student-teacher ratio?',
          answer: 'We maintain an optimal student-teacher ratio of 25:1 to ensure personalized attention and better learning outcomes for every student.'
        },
        {
          id: 6,
          question: 'What curriculum does the school follow?',
          answer: 'We follow the CBSE (Central Board of Secondary Education) curriculum, which is designed to provide a balanced education with equal emphasis on academics, sports, and co-curricular activities.'
        }
      ]
    },
    {
      id: 3,
      category: 'Facilities',
      questions: [
        {
          id: 7,
          question: 'What sports facilities are available?',
          answer: 'Our school boasts excellent sports facilities including a swimming pool, basketball court, football field, table tennis, badminton courts, and indoor sports facilities.'
        },
        {
          id: 8,
          question: 'Is transportation available?',
          answer: 'Yes, we provide safe and reliable transportation services across the city. The bus routes are designed to cover all major areas and ensure the safety of our students.'
        },
        {
          id: 9,
          question: 'What are the library facilities like?',
          answer: 'Our well-stocked library has a vast collection of books, periodicals, and digital resources. We regularly update our collection to support the curriculum and encourage reading habits.'
        }
      ]
    },
    {
      id: 4,
      category: 'Fees and Payments',
      questions: [
        {
          id: 10,
          question: 'What is the fee structure?',
          answer: 'The fee structure varies depending on the class. It includes tuition fee, development charges, and other applicable fees. For detailed information, please visit the Fee Structure page or contact the school office.'
        },
        {
          id: 11,
          question: 'Are there any scholarships available?',
          answer: 'Yes, we offer merit-based scholarships to deserving students. There are also fee concessions for siblings, children of defense personnel, and single parents.'
        },
        {
          id: 12,
          question: 'What is the payment mode for school fees?',
          answer: 'Fees can be paid through various modes: online payment, demand draft, or cash payment at the school fee counter during working hours.'
        }
      ]
    }
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    if (activeQuestion === questionId) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionId);
    }
  };

  return (
    <div className="faqs">
      {/* Hero Section */}
      <section className="faqs-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our school, admission process, academics, and more.</p>
        </div>
      </section>

      {/* FAQ Categories */}
      <div className="container">
        {faqData.map((category) => (
          <div key={category.id} className="faq-category">
            <div className="section-header">
              <h2>{category.category}</h2>
            </div>
            <div className="faq-list">
              {category.questions.map((item) => (
                <div key={item.id} className="faq-item">
                  <button 
                    className={`faq-question ${activeQuestion === item.id ? 'active' : ''}`}
                    onClick={() => toggleQuestion(item.id)}
                  >
                    <span>{item.question}</span>
                    {activeQuestion === item.id ? 
                      <FaChevronUp className="faq-icon" /> : 
                      <FaChevronDown className="faq-icon" />
                    }
                  </button>
                  <div 
                    className="faq-answer" 
                    style={{
                      maxHeight: activeQuestion === item.id ? '500px' : '0',
                      transition: 'max-height 0.3s ease-out'
                    }}
                  >
                    <div className="faq-answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Information */}
        <div className="contact-info">
          <div className="section-header">
            <h2>Still Have Questions?</h2>
            <p>If you can't find the answer you're looking for, feel free to contact us.</p>
          </div>
          <div className="contact-options">
            <div className="contact-option">
              <FaQuestionCircle className="contact-icon" />
              <h3>Admission Office</h3>
              <p>Phone: +91-XXXXXXXXXX</p>
              <p>Email: admissions@llrsss.edu.in</p>
              <p>Timing: 9:00 AM - 4:00 PM (Monday to Saturday)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
