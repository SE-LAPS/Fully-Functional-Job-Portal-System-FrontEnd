import React, { useState } from 'react';

const RecentJobPosts = () => {
  const [filter, setFilter] = useState('monthly');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Sample data for recent job posts
  const jobPosts = [
    { title: 'Software Engineer', category: 'IT', applications: 100, status: 'Active' },
    { title: 'Product Manager', category: 'Management', applications: 50, status: 'Inactive' },
    { title: 'Data Scientist', category: 'Data', applications: 80, status: 'Active' },
    { title: 'Marketing Specialist', category: 'Marketing', applications: 60, status: 'Active' },
  ];

  return (
    <div className="recent-job-posts">
      <div className="filter-options">
        <button onClick={() => setFilter('today')} className={filter === 'today' ? 'active' : ''}>Today</button>
        <button onClick={() => setFilter('weekly')} className={filter === 'weekly' ? 'active' : ''}>Weekly</button>
        <button onClick={() => setFilter('monthly')} className={filter === 'monthly' ? 'active' : ''}>Monthly</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Category</th>
            <th>Applications</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobPosts.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.category}</td>
              <td>{job.applications}</td>
              <td>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentJobPosts;
