import React from 'react';

const JobDetails = ({ job }) => {
  if (!job) {
    return <p>No job details available. Please select a job from the list.</p>;
  }

  return (
    <div className="job-details">
      <div className="job-header">
        <h1>{job.title}</h1>
        <p>@ {job.company}</p>
        <span className="badge full-time">{job.jobType}</span>
      </div>

      <div className="job-overview">
        <h2>Job Overview</h2>
        <ul>
          <li><strong>Location:</strong> {job.location}</li>
          <li><strong>Category:</strong> {job.category}</li>
        </ul>
      </div>

      <div className="job-description">
        <h2>Job Description</h2>
        <p>Details about the job will be here...</p>
      </div>
    </div>
  );
};

export default JobDetails;
