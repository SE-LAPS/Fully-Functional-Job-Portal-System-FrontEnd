import React from 'react';
import { useLocation } from 'react-router-dom';


const ViewJobDetails = () => {
  const location = useLocation();
  const { job } = location.state;

  return (
    <div className="view-job-details">
      <h1>{job.title}</h1>
      <img src={job.companyLogo} alt={`${job.title} logo`} className="company-logo" />
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <button className="apply-button">Apply for Job</button>
    </div>
  );
};

export default ViewJobDetails;
