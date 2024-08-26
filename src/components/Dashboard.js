import React, { useState, useEffect } from 'react';
import Metrics from './Metrics';
import RecentJobPosts from './RecentJobPosts';
import SideMenu from './SideMenu'; // Import the SideMenu component
import '../css/Dashboard.css';

function Dashboard() {
  const [jobPosts, setJobPosts] = useState([]);
  const [applicationCounts, setApplicationCounts] = useState({});
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

  const fetchApplicationCounts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/application-counts'); // Assume this endpoint exists
      const counts = await response.json();
      setApplicationCounts(counts);
    } catch (error) {
      console.error('Error fetching application counts:', error);
    }
  };

  useEffect(() => {
    fetchJobPosts();
    fetchTotalApplications();
    fetchApplicationCounts(); // Fetch application counts
  }, []);

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
      </div>
    </div>
  );
}

export default Dashboard;
