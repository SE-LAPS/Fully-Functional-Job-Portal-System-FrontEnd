// src/components/SearchForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();

  const handleFindJobsClick = () => {
    navigate('/job_list');
  };

  return (
    <section className="search-form">
      <div className="search-form-header">
        <h1>Join the Next Generation of Job Hunters</h1>
        <p>Upload your Video CV now and increase your chances of being found by top employers.</p>
        <button className="register-button">Register For Free</button>
      </div>
      
      <div className="search-fields">
        <input type="text" placeholder="Keywords / Job Title" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Distance" />
        <button className="find-jobs-button" onClick={handleFindJobsClick}>Find Jobs</button>
      </div>
      
      <button className="advanced-filters">Advanced Filters</button>
    </section>
  );
};

export default SearchForm;
