import React from 'react';
import SideMenu from './AdminSideMenu'; // Sidebar for navigation
import AdminRegisterCompany from './AdminRegisterCompany'; // Registered companies component
import AdminJobCategory from './AdminJobCategory'; // Job categories component
import '../css/AdminDashboard.css'; // Custom styles

const AdminDashboard = () => {
  const companies = [
    { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
    { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
  ];

  const jobCategories = [
    { id: 1, name: 'Software Development', description: 'Development of software products.' },
    { id: 2, name: 'Marketing', description: 'Promotion and advertising roles.' },
    // More job categories can be added
  ];

  return (
    <div className="dashboard-container">
      <SideMenu /> {/* Navigation Sidebar */}
      <div className="dashboard-content">
        <div className="register-company-section">
          <AdminRegisterCompany companies={companies} />
        </div>
        <div className="job-category-section">
          <AdminJobCategory jobCategories={jobCategories} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
