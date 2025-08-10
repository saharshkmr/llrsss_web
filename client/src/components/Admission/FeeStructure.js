import React from 'react';
import { FaInfoCircle, FaRegCreditCard, FaUniversity, FaMoneyBillWave } from 'react-icons/fa';
import './FeeStructure.css';

const FeeStructure = () => {
  // Sample fee structure data
  const feeStructure = [
    { 
      class: 'Nursery to UKG', 
      admissionFee: '25,000', 
      tuitionFee: '12,000', 
      developmentFee: '3,000',
      total: '40,000'
    },
    { 
      class: 'Class I to V', 
      admissionFee: '30,000', 
      tuitionFee: '15,000', 
      developmentFee: '4,000',
      total: '49,000'
    },
    { 
      class: 'Class VI to VIII', 
      admissionFee: '35,000', 
      tuitionFee: '18,000', 
      developmentFee: '5,000',
      total: '58,000'
    },
    { 
      class: 'Class IX to X', 
      admissionFee: '40,000', 
      tuitionFee: '20,000', 
      developmentFee: '6,000',
      total: '66,000'
    },
    { 
      class: 'Class XI to XII (Science)', 
      admissionFee: '45,000', 
      tuitionFee: '25,000', 
      developmentFee: '8,000',
      total: '78,000'
    },
    { 
      class: 'Class XI to XII (Commerce/Arts)', 
      admissionFee: '42,000', 
      tuitionFee: '22,000', 
      developmentFee: '7,000',
      total: '71,000'
    }
  ];

  const paymentOptions = [
    {
      title: 'One-Time Payment',
      icon: <FaMoneyBillWave className="payment-icon" />,
      benefits: [
        '5% discount on total annual fee',
        'No monthly payment hassles',
        'Priority admission consideration',
        'Early access to school facilities'
      ]
    },
    {
      title: 'Quarterly Installments',
      icon: <FaUniversity className="payment-icon" />,
      benefits: [
        'Pay in 4 equal installments',
        'No additional charges',
        'Auto-debit facility available',
        'Flexible payment dates'
      ]
    },
    {
      title: 'Monthly Installments',
      icon: <FaRegCreditCard className="payment-icon" />,
      benefits: [
        'Pay in 12 monthly installments',
        'Minimal processing fee applies',
        'Auto-debit facility available',
        'Convenient payment options'
      ]
    }
  ];

  return (
    <div className="fee-structure">
      {/* Hero Section */}
      <section className="fee-structure-hero">
        <div className="container">
          <h1>Fee Structure</h1>
          <p>Transparent and competitive fee structure designed to provide quality education for all</p>
        </div>
      </section>

      <div className="container">
        {/* Fee Structure Table */}
        <section>
          <div className="section-header">
            <h2>Annual Fee Structure (2024-25)</h2>
            <p>Our fee structure is designed to be transparent and all-inclusive, with no hidden charges</p>
          </div>
          
          <div className="fee-table-container">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Admission Fee</th>
                  <th>Tuition Fee (Annual)</th>
                  <th>Development Fee</th>
                  <th>Total Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index}>
                    <td><strong>{fee.class}</strong></td>
                    <td>₹{fee.admissionFee}*</td>
                    <td>₹{fee.tuitionFee}</td>
                    <td>₹{fee.developmentFee}</td>
                    <td className="fee-amount">₹{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="fee-note">
            <p><FaInfoCircle className="info-icon" /> * Admission fee is a one-time payment for new admissions only.</p>
            <p><FaInfoCircle className="info-icon" /> The above fees are inclusive of all academic expenses, laboratory fees, and library charges.</p>
          </div>
        </section>

        {/* Payment Options */}
        <section>
          <div className="section-header">
            <h2>Flexible Payment Options</h2>
            <p>Choose a payment plan that works best for your family's financial situation</p>
          </div>
          
          <div className="payment-options">
            {paymentOptions.map((option, index) => (
              <div key={index} className="payment-option">
                <div className="payment-icon">{option.icon}</div>
                <h3>{option.title}</h3>
                <ul>
                  {option.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Have Questions About Fees?</h2>
          <p>Our admission team is here to help you understand our fee structure and available financial assistance options.</p>
          <a href="/contact" className="cta-button">Contact Admission Office</a>
        </section>
      </div>
    </div>
  );
};

export default FeeStructure;
