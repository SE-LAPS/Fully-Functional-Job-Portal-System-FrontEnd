// src/components/SearchForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleFindJobsClick = () => {
    navigate('/job_list', { state: { jobTitle, location, jobType } });
  };

  return (
    <section className="search-form">
      <div className="search-form-header">
        <h1>Join the Next Generation of Job Hunters</h1>
        <p>Upload your Video CV now and increase your chances of being found by top employers.</p>
        <button className="register-button">Read Me</button>
      </div>
    
      <div className="search-fields">
        <input 
          type="text" 
          placeholder="Job Title" 
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Full-Time / Part-Time" 
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        />
        <button className="find-jobs-button" onClick={handleFindJobsClick}>Find Jobs</button>
      </div>

      {/* Optional extra spacing */}
      <div className="spacer"></div>
    </section>
  );
};

export default SearchForm;
