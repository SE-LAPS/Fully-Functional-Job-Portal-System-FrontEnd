import React, { useState, useEffect } from 'react';
import Metrics from './Metrics';
import RecentJobPosts from './RecentJobPosts';
import SideMenu from './SideMenu'; 
import ApplyJobHistory from './ApplyJobHistory'; 
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

      const totalJobPosts = data.length;
      const totalMeetings = 12; // Replace with dynamic data if available
      const totalHirings = 24; // Replace with dynamic data if available

      setMetrics((prevMetrics) => ({
        ...prevMetrics,
        totalJobPosts,
        totalMeetings,
        totalHirings,
      }));
    } catch (error) {
      console.error('Error fetching job posts:', error);
    }
  };

  const fetchTotalApplications = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/total-applications');
      const totalApplications = await response.json();

      setMetrics((prevMetrics) => ({
        ...prevMetrics,
        totalApplications,
      }));
    } catch (error) {
      console.error('Error fetching total applications:', error);
    }
  };

  useEffect(() => {
    fetchJobPosts();
    fetchTotalApplications();
  }, []);

  const handleApplicationCountChange = (count) => {
    setMetrics((prevMetrics) => ({
      ...prevMetrics,
      totalApplications: count,
    }));
  };

  return (
    <div className="dashboard-container">
      <SideMenu />
      <div className="dashboard">
        <div className="metrics">
          <Metrics metrics={metrics} />
        </div>
        <div className="recent-job-posts">
          <RecentJobPosts jobPosts={jobPosts} />
        </div>
        <div className="apply-job-history">
          <ApplyJobHistory onCountChange={handleApplicationCountChange} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;