import React from 'react';
import '../css/RecentJobPosts.css';

const RecentJobPosts = ({ jobPosts }) => {
  return (
    <div className="recent-job-posts">
      <h2>Recent Job Posts</h2>
      <table className="job-posts-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Company Website</th>
          </tr>
        </thead>
        <tbody>
          {jobPosts.map((job, index) => (
            <tr key={index}>
              <td>{job.positionTitle}</td>
              <td>{job.category}</td>
              <td>{job.location || 'N/A'}</td>
              <td><a href={job.companyWebsite} target="_blank" rel="noopener noreferrer">Visit</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentJobPosts;
