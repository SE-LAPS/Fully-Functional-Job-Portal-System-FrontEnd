import React from 'react';
import '../css/AdminMetrics.css'; // Import custom CSS for styling

const AdminMetrics = ({ loginCount, registeredMembersCount, registeredCompaniesCount, jobCategoriesCount }) => {
  return (
    <div className="metrics-container">
      <div className="metric-card login-members">
        <h3>Login Members</h3>
        <p>{loginCount}</p>
      </div>
      <div className="metric-card registered-members">
        <h3>Registered Members</h3>
        <p>{registeredMembersCount}</p>
      </div>
      <div className="metric-card registered-companies">
        <h3>Registered Companies</h3>
        <p>{registeredCompaniesCount}</p>
      </div>
      <div className="metric-card job-categories">
        <h3>Job Categories</h3>
        <p>{jobCategoriesCount}</p>
      </div>
    </div>
  );
};

export default AdminMetrics;
