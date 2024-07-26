// src/pages/ApplyJobs.js
import React, { useState } from 'react';


const ApplyJobs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Application Submitted:', { name, email, resume });
  };

  return (
    <div className="apply-jobs">
      <h1>Apply for a Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyJobs;
