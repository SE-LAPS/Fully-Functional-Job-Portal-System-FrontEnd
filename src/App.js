// src/App.js
import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import FeaturedCompanies from './components/FeaturedCompanies';
import JobCategories from './components/JobCategories';
import HowWeWork from './components/HowWeWork';
import Testimonial from './components/ClientTestimonials';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchForm />
      <FeaturedCompanies />
      <JobCategories />
      <HowWeWork />
      <Testimonial/>
      <Footer />
    </div>
  );
};

export default App;
