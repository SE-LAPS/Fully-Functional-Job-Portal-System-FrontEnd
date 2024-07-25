// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import FeaturedCompanies from './components/FeaturedCompanies';
import JobCategories from './components/JobCategories';
import HowWeWork from './components/HowWeWork';
import Testimonial from './components/ClientTestimonials';
import Footer from './components/Footer';
import JobList from './pages/job_list';
import JobAlerts from './pages/job_alert';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword'; // Import ForgotPassword component
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
              <FeaturedCompanies />
              <JobCategories />
              <HowWeWork />
              <Testimonial />
            </>
          } />
          <Route path="/job_list" element={<JobList />} />
          <Route path="/job_alert" element={<JobAlerts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot_password" element={<ForgotPassword />} /> {/* Add route for ForgotPassword */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
