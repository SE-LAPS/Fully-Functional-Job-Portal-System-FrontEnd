import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const ApplyJobs = () => {
  const location = useLocation();
  const job = location.state?.job; // Access job details from navigation state

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Application Submitted:', { name, email, resume, job });
  };

  return (
    <div className="apply-jobs-container">
      <h1>Apply for a Job</h1>
      {job && (
        <div className="job-details-preview">
          <h2>Applying for: {job.title}</h2>
          <p><strong>Company:</strong> {job.company}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="apply-form">
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
