import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchForm = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleFindJobsClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    navigate('/search', { state: { jobTitle, location, jobType } });
  };
  
  return (
    <section className="search-form">
      <div className="search-form-header">
        <h1>Join the Next Generation of Job Hunters</h1>
        <p>Upload your Video CV now and increase your chances of being found by top employers.</p>
        <button className="register-button">Register For Free</button>
      </div>
      
      <div className="search-fields">
          <input 
            type="text" 
            placeholder="Job Title" 
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Location</option>
            <option value="Remote">Remote</option>
            <option value="Colombo">Colombo</option>
            <option value="Kandy">Kandy</option>
            <option value="Galle">Galle</option>
            <option value="Jaffna">Jaffna</option>
            <option value="Negombo">Negombo</option>
          </select>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}   
          >
            <option value="">Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
        <button className="find-jobs-button" onClick={handleFindJobsClick}>Find Jobs</button>
      </div>
      
      <button className="advanced-filters">Advanced Filters</button>
    </section>
  );
};

export default SearchForm;
