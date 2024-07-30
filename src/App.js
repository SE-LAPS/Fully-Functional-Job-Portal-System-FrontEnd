// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import FeaturedCompanies from './components/FeaturedCompanies';
import JobCategories from './components/JobCategories';
import HowWeWork from './components/HowWeWork';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import SearchJobs from './pages/SearchJobs';
import JobAlerts from './pages/job_alert'; // Import job_alert with correct case
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import JobDetails from './pages/JobDetails';
import About from './pages/About';
import Contact from './pages/Contact'; // Import Contact component
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SearchForm />
              <JobCategories />
              <FeaturedCompanies />             
              <HowWeWork />
              <Testimonial />
            </>
          } />
          <Route path="/search" element={<SearchJobs />} />
          <Route path="/job_alert" element={<JobAlerts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/job_details" element={<JobDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Add route for Contact */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
