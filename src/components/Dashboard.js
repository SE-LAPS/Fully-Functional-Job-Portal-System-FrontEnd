import React from 'react';
import Metrics from './Metrics';
import RecentJobPosts from './RecentJobPosts'; // Import the new component
import '../css/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Metrics />
      <RecentJobPosts /> {/* Add the RecentJobPosts component */}
    </div>
  );
}

export default Dashboard;
