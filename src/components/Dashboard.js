import React, { useState, useEffect } from 'react';
import Metrics from './Metrics'; // metrics component
import RecentJobPosts from './RecentJobPosts'; // Component - list recent job posts
import SideMenu from './SideMenu'; // Component - side navigation menu
import ApplyJobHistory from './ApplyJobHistory'; // Component - display job application history
import '../css/Dashboard.css'; // CSS file for styling the Dashboard component

function Dashboard() {
  // State to store job posts and metrics data
  const [jobPosts, setJobPosts] = useState([]);
  const [metrics, setMetrics] = useState({
    totalJobPosts: 0,
    totalApplications: 0,
    totalMeetings: 0,
    totalHirings: 0,
  });

  // Function to fetch job posts and update metrics
  const fetchJobPosts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/jobs'); // Fetch job posts from API
      const data = await response.json();
      setJobPosts(data);

      // fetch data not implemented
      const totalJobPosts = data.length;
      const totalMeetings = 12; // Mock value
      const totalHirings = 24; // Mock value

      setMetrics((prevMetrics) => ({
        ...prevMetrics,
        totalJobPosts,
        totalMeetings,
        totalHirings,
      }));
    } catch (error) {
      console.error('Error fetching job posts:', error); // Log any errors
    }
  };

  // Function to fetch total job applications
  const fetchTotalApplications = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/total-applications'); // Fetch total applications from API
      const totalApplications = await response.json();

      // Update metrics with the fetched total applications
      setMetrics((prevMetrics) => ({
        ...prevMetrics,
        totalApplications,
      }));
    } catch (error) {
      console.error('Error fetching total applications:', error); // Log any errors
    }
  };

  // Use effect to fetch data when the component mounts
  useEffect(() => {
    fetchJobPosts();
    fetchTotalApplications();
  }, []);

  // Handler to update the application count in metrics
  const handleApplicationCountChange = (count) => {
    setMetrics((prevMetrics) => ({
      ...prevMetrics,
      totalApplications: count,
    }));
  };

  return (
    <div className="dashboard-container">
       {/* Side navigation menu */}
      <SideMenu />
      <div className="dashboard">
        <div className="metrics">
          {/* display various metrics */}
          <Metrics metrics={metrics} /> 
        </div>
        <div className="recent-job-posts">
          {/* list recent job posts */}
          <RecentJobPosts jobPosts={jobPosts} /> 
        </div>
        <div className="apply-job-history">
          {/* Component to display job application history */}
          <ApplyJobHistory onCountChange={handleApplicationCountChange} /> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
