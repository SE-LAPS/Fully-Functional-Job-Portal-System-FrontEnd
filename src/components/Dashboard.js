import React, { useState, useEffect } from 'react';
import Metrics from './Metrics';
import RecentJobPosts from './RecentJobPosts';

import '../css/Dashboard.css';

function Dashboard() {
  const [jobPosts, setJobPosts] = useState([]);

  const fetchJobPosts = async () => {
    const response = await fetch('http://localhost:8080/api/jobs');
    const data = await response.json();
    setJobPosts(data);
  };

  useEffect(() => {
    fetchJobPosts();
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Company Dashboard</h1>
        <p>Welcome back! Here’s a snapshot of the current status.</p>
      </div>
      <div className="dashboard-content">
        <div className="metrics-section">
          <Metrics />
        </div>
        <div className="recent-jobs-section">
          <RecentJobPosts jobPosts={jobPosts} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
