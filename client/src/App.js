import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import StripNavbar from './components/Navbar/StripNavbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home/Home';
import NoticesPage from './components/Home/NoticesPage';
import AchieversPage from './components/Home/AchieversPage';
import AcademicCurriculum from './components/Academic/AcademicCurriculum';
import SchoolTimings from './components/Academic/SchoolTimings';
import AcademicCalendar from './components/Academic/AcademicCalendar';
import SubjectDepartments from './components/Academic/SubjectDepartments';
import ExaminationSystem from './components/Academic/ExaminationSystem';
import ResultsAnalysis from './components/Academic/ResultsAnalysis';
import Scholarships from './components/Academic/Scholarships';
import AcademicResources from './components/Academic/AcademicResources';
import ContactUs from './components/ContactUs/ContactUs';
import WhyChooseUs from './components/Admission/WhyChooseUs';
import AdmissionProcedure from './components/Admission/AdmissionProcedure';
import FeeStructure from './components/Admission/FeeStructure';
import EligibilityCriteria from './components/Admission/EligibilityCriteria';
// import About from './pages/About';
// import Admissions from './pages/Admissions';
// import Contact from './pages/Contact';

function App() {
  // Set initial theme based on system preference if no theme is saved
  useEffect(() => {
    if (!localStorage.getItem('theme') &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <StripNavbar />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/achievers" element={<AchieversPage />} />
            <Route path="/academics/curriculum" element={<AcademicCurriculum />} />
            <Route path="/academics/timings" element={<SchoolTimings />} />
            <Route path="/academics/calendar" element={<AcademicCalendar />} />
            <Route path="/academics/departments" element={<SubjectDepartments />} />
            <Route path="/academics/examinations" element={<ExaminationSystem />} />
            <Route path="/academics/results" element={<ResultsAnalysis />} />
            <Route path="/academics/scholarships" element={<Scholarships />} />
            <Route path="/academics/resources" element={<AcademicResources />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/admissions/why-us" element={<WhyChooseUs />} />
            <Route path="/admissions/procedure" element={<AdmissionProcedure />} />
            <Route path="/admissions/fees" element={<FeeStructure />} />
            <Route path="/admissions/eligibility" element={<EligibilityCriteria />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
