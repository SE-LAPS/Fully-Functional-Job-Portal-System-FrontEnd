// src/App.js
import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import FeaturedCompanies from './components/FeaturedCompanies';
import JobCategories from './components/JobCategories';
import HowWeWork from './components/HowWeWork';
import Testimonial from './components/ClientTestimonials';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './pages/job_list';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/job_list" element={<JobList />} />
        </Routes>
        <FeaturedCompanies />
        <JobCategories />
        <HowWeWork />
        <Testimonial />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
