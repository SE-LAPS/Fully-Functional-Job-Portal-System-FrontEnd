import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/applyjobs.css'; //CSS styling

const ApplyJobs = () => {
  const location = useLocation();
  const job = location.state?.job; // Access job details from navigation state

  // state - manage form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  // Function - handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // form data prepare
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('companyName', job.companyName); // Use job.companyName from state
    formData.append('positionTitle', job.positionTitle); // Store job title in form data
    formData.append('resume', resume);

    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:8080/api/jobs/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('Application Submitted:', response.data);
        alert('Your application has been submitted successfully!');
      } else {
        alert('Failed to submit your application. Please try again.');
      }
    } catch (error) {
      console.error('There was an error submitting the application:', error);
      alert('An error occurred while submitting your application.');
    }
  };

  return (
    <div className="apply-jobs-container">
      <h1>Apply for a Job</h1>
      {job && (
        <div className="job-details-preview">
          <h2>Applying for: {job.positionTitle}</h2>
          <p><strong>Company:</strong> {job.companyName}</p>
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
            required
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyJobs;
