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
      <div className="metrics">
        <Metrics />
        <RecentJobPosts jobPosts={jobPosts} />
      </div>
    </div>
  );
}

export default Dashboard;
