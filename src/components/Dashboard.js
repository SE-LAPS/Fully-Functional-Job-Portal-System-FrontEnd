import React, { useState, useEffect } from 'react';
import Metrics from './Metrics';
import RecentJobPosts from './RecentJobPosts';

import '../css/Dashboard.css';

function Dashboard() {
  const [jobPosts, setJobPosts] = useState([]);
  const [metrics, setMetrics] = useState({
    totalJobPosts: 0,
    totalApplications: 0,
    totalMeetings: 0,
    totalHirings: 0,
  });

  const fetchJobPosts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/jobs');
      const data = await response.json();
      setJobPosts(data);

      // Calculate metrics based on job posts data
      const totalJobPosts = data.length;
      const totalApplications = data.reduce((acc, job) => acc + job.applications, 0); // Assuming `applications` is a field in your job data
      const totalMeetings = 12; // You can replace this with dynamic data if available
      const totalHirings = 24; // Replace with dynamic data if available

      setMetrics({
        totalJobPosts,
        totalApplications,
        totalMeetings,
        totalHirings,
      });
    } catch (error) {
      console.error('Error fetching job posts:', error);
    }
  };

  useEffect(() => {
    fetchJobPosts();
  }, []);

  return (
    <div className="dashboard">
      <div className="metrics">
        <Metrics metrics={metrics} />
      </div>
      <div className="recent-job-posts">
        <RecentJobPosts jobPosts={jobPosts} />
      </div>
    </div>
  );
}

export default Dashboard;