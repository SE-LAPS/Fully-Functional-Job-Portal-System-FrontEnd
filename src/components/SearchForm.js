// src/components/SearchForm.js
import React from 'react';


const SearchForm = () => {
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
        <button className="find-jobs-button">Find Jobs</button>
      </div>
      
      <button className="advanced-filters">Advanced Filters</button>
    </section>
  );
};

export default SearchForm;
