import React, { useState } from 'react';
import { FaUser, FaSchool, FaFileAlt, FaCheck, FaUpload, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './OnlineApplication.css';

const OnlineApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    
    // Contact Information
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Academic Information
    currentSchool: '',
    gradeApplyingFor: '',
    previousGrade: '',
    board: '',
    
    // Parent/Guardian Information
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    fatherEmail: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    motherEmail: '',
    
    // Documents
    documents: []
  });

  const steps = [
    { id: 1, title: 'Student Information', description: 'Basic details about the student', icon: <FaUser /> },
    { id: 2, title: 'Contact Details', description: 'Address and contact information', icon: <FaUser /> },
    { id: 3, title: 'Academic Information', description: 'Current and previous school details', icon: <FaSchool /> },
    { id: 4, title: 'Parent/Guardian Details', description: 'Information about parents/guardians', icon: <FaUser /> },
    { id: 5, title: 'Documents Upload', description: 'Required documents for admission', icon: <FaFileAlt /> },
    { id: 6, title: 'Review & Submit', description: 'Verify all information and submit', icon: <FaCheck /> }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'documents') {
      setFormData(prev => ({
        ...prev,
        documents: [...prev.documents, ...Array.from(files)]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Application submitted successfully!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step active">
            <h2>Student Information</h2>
            <p className="text-gray-600 mb-6">Please provide the student's basic information.</p>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="required">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="required">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dateOfBirth" className="required">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="form-control"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender" className="required">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="form-control"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                className="form-control"
                value={formData.bloodGroup}
                onChange={handleInputChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="form-step active">
            <h2>Contact Information</h2>
            <p className="text-gray-600 mb-6">Please provide contact details for communication.</p>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="required">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="required">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="address" className="required">Address</label>
              <textarea
                id="address"
                name="address"
                className="form-control"
                rows="3"
                value={formData.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city" className="required">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state" className="required">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="form-control"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pincode" className="required">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="form-control"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="form-step active">
            <h2>Academic Information</h2>
            <p className="text-gray-600 mb-6">Please provide details about the student's academic background.</p>
            
            <div className="form-group">
              <label htmlFor="currentSchool" className="required">Current School Name</label>
              <input
                type="text"
                id="currentSchool"
                name="currentSchool"
                className="form-control"
                value={formData.currentSchool}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gradeApplyingFor" className="required">Grade Applying For</label>
                <select
                  id="gradeApplyingFor"
                  name="gradeApplyingFor"
                  className="form-control"
                  value={formData.gradeApplyingFor}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Grade</option>
                  {Array.from({length: 12}, (_, i) => i + 1).map(grade => (
                    <option key={grade} value={`Grade ${grade}`}>Grade {grade}</option>
                  ))}
                  <option value="Pre-K">Pre-Kindergarten</option>
                  <option value="K">Kindergarten</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="previousGrade" className="required">Previous Grade Completed</label>
                <select
                  id="previousGrade"
                  name="previousGrade"
                  className="form-control"
                  value={formData.previousGrade}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Previous Grade</option>
                  {Array.from({length: 12}, (_, i) => i).map(grade => (
                    <option key={grade} value={`Grade ${grade}`}>
                      {grade === 0 ? 'Pre-School' : `Grade ${grade}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="board" className="required">Board/Curriculum</label>
              <select
                id="board"
                name="board"
                className="form-control"
                value={formData.board}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Board/Curriculum</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
                <option value="IB">International Baccalaureate (IB)</option>
                <option value="IGCSE">IGCSE</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="achievements">Academic Achievements (if any)</label>
              <textarea
                id="achievements"
                name="achievements"
                className="form-control"
                rows="3"
                placeholder="List any academic achievements, awards, or recognitions"
              ></textarea>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="form-step active">
            <h2>Parent/Guardian Information</h2>
            <p className="text-gray-600 mb-6">Please provide details of the student's parents or legal guardians.</p>
            
            <h3 className="text-lg font-semibold mb-4 text-primary-700">Father's Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fatherName" className="required">Full Name</label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  className="form-control"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fatherOccupation">Occupation</label>
                <input
                  type="text"
                  id="fatherOccupation"
                  name="fatherOccupation"
                  className="form-control"
                  value={formData.fatherOccupation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fatherPhone" className="required">Phone Number</label>
                <input
                  type="tel"
                  id="fatherPhone"
                  name="fatherPhone"
                  className="form-control"
                  value={formData.fatherPhone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fatherEmail">Email Address</label>
                <input
                  type="email"
                  id="fatherEmail"
                  name="fatherEmail"
                  className="form-control"
                  value={formData.fatherEmail}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mt-8 mb-4 text-primary-700">Mother's Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="motherName" className="required">Full Name</label>
                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  className="form-control"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="motherOccupation">Occupation</label>
                <input
                  type="text"
                  id="motherOccupation"
                  name="motherOccupation"
                  className="form-control"
                  value={formData.motherOccupation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="motherPhone">Phone Number</label>
                <input
                  type="tel"
                  id="motherPhone"
                  name="motherPhone"
                  className="form-control"
                  value={formData.motherPhone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="motherEmail">Email Address</label>
                <input
                  type="email"
                  id="motherEmail"
                  name="motherEmail"
                  className="form-control"
                  value={formData.motherEmail}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="form-group mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-primary-600"
                  name="sameAsAbove"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData(prev => ({
                        ...prev,
                        motherName: prev.fatherName,
                        motherOccupation: prev.fatherOccupation,
                        motherPhone: prev.fatherPhone,
                        motherEmail: prev.fatherEmail
                      }));
                    }
                  }}
                />
                <span className="ml-2 text-gray-700">Same as Father's Information</span>
              </label>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="form-step active">
            <h2>Documents Upload</h2>
            <p className="text-gray-600 mb-6">Please upload the required documents for the admission process.</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-primary-700">Required Documents</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Birth Certificate (PDF, JPG, or PNG, max 2MB)</li>
                <li>Previous Year's Report Card (PDF, max 5MB)</li>
                <li>Transfer Certificate (if applicable)</li>
                <li>Passport Size Photograph (JPG or PNG, max 1MB)</li>
                <li>Address Proof (Aadhar Card/Passport/Utility Bill)</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Birth Certificate <span className="text-red-500">*</span>
                </label>
                <div className="upload-area">
                  <FaUpload className="mx-auto text-3xl text-gray-400 mb-2" />
                  <p className="font-medium">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PDF, JPG or PNG (max 2MB)</p>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleInputChange}
                    name="birthCertificate"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Previous Year's Report Card <span className="text-red-500">*</span>
                </label>
                <div className="upload-area">
                  <FaUpload className="mx-auto text-3xl text-gray-400 mb-2" />
                  <p className="font-medium">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PDF (max 5MB)</p>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleInputChange}
                    name="reportCard"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Passport Size Photograph <span className="text-red-500">*</span>
                </label>
                <div className="upload-area">
                  <FaUpload className="mx-auto text-3xl text-gray-400 mb-2" />
                  <p className="font-medium">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">JPG or PNG (max 1MB)</p>
                  <input
                    type="file"
                    className="hidden"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleInputChange}
                    name="photograph"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Address Proof <span className="text-red-500">*</span>
                </label>
                <div className="upload-area">
                  <FaUpload className="mx-auto text-3xl text-gray-400 mb-2" />
                  <p className="font-medium">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PDF, JPG or PNG (max 2MB)</p>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleInputChange}
                    name="addressProof"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Additional Documents (if any)
                </label>
                <div className="upload-area">
                  <FaUpload className="mx-auto text-3xl text-gray-400 mb-2" />
                  <p className="font-medium">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PDF, JPG, or PNG (max 5MB each)</p>
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleInputChange}
                    name="additionalDocuments"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Important Notes:</h4>
              <ul className="list-disc pl-5 text-blue-700 space-y-1 text-sm">
                <li>Ensure all documents are clear and legible</li>
                <li>File names should be descriptive (e.g., 'Birth_Certificate_John_Doe.pdf')</li>
                <li>Combined file size should not exceed 20MB</li>
                <li>You can upload multiple files by selecting them together</li>
              </ul>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="form-step active text-center py-8">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheck className="text-green-500 text-4xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Review Your Application</h2>
              <p className="text-gray-600 mb-8">Please review all the information before submitting your application.</p>
              
              <div className="bg-gray-50 p-6 rounded-lg text-left max-w-2xl mx-auto">
                <h3 className="font-semibold text-lg mb-4">Application Summary</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Student Information</h4>
                    <p className="text-gray-600">{formData.firstName} {formData.lastName}</p>
                    <p className="text-gray-600">DOB: {formData.dateOfBirth}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Contact Information</h4>
                    <p className="text-gray-600">{formData.email}</p>
                    <p className="text-gray-600">{formData.phone}</p>
                  </div>
                  {/* Add more summary information as needed */}
                </div>
              </div>
            </div>
            
            <div className="form-group flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I certify that all the information provided is accurate to the best of my knowledge.
              </label>
            </div>
          </div>
        );
      
      default:
        return <div>Step not found</div>;
    }
  };

  return (
    <div className="online-application">
      {/* Hero Section */}
      <section className="online-application-hero">
        <div className="container">
          <h1>Online Application</h1>
          <p>Begin your child's journey with us by completing the online application form</p>
        </div>
      </section>

      <div className="container">
        <form onSubmit={handleSubmit} className="application-container">
          {/* Form Steps */}
          <div className="form-steps">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={`step-indicator ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
                onClick={() => setCurrentStep(step.id)}
              >
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Form Content */}
          <div className="form-content">
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={prevStep}
                >
                  <FaArrowLeft className="mr-2" /> Previous
                </button>
              )}
              
              {currentStep < steps.length ? (
                <button 
                  type="button" 
                  className="btn btn-primary ml-auto"
                  onClick={nextStep}
                >
                  Next <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="btn btn-primary ml-auto"
                >
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnlineApplication;
