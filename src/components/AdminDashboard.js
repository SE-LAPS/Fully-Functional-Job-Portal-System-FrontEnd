import React, { useState, useEffect } from 'react';
import SideMenu from './AdminSideMenu'; // Sidebar for navigation
import AdminRegisterCompany from './AdminRegisterCompany'; // Registered companies component
import AdminJobCategory from './AdminJobCategory'; // Job categories component
import AdminMetrics from './AdminMetrics'; // Admin metrics component
import '../css/AdminDashboard.css'; // Custom styles

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);

  // Fetch job categories data
  useEffect(() => {
    fetch('http://localhost:8080/api/jobs')
      .then((response) => response.json())
      .then((data) => setJobCategories(data))
      .catch((error) => console.error('Error fetching job categories:', error));
  }, []);

  // Example data for companies (replace with actual API call if needed)
  useEffect(() => {
    setCompanies([
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
    ]);
  }, []);

  // Metrics data (can be dynamically updated in a real app)
  const loginCount = 123; // Example data for logged-in members
  const registeredMembersCount = 200; // Example data for registered members
  const registeredCompaniesCount = companies.length; // Calculate the number of registered companies
  const jobCategoriesCount = jobCategories.length; // Dynamically calculate the number of job categories

  return (
    <div className="dashboard-container">
      <SideMenu /> {/* Navigation Sidebar */}
      <div className="dashboard-content">
        <AdminMetrics
          loginCount={loginCount}
          registeredMembersCount={registeredMembersCount}
          registeredCompaniesCount={registeredCompaniesCount}
          jobCategoriesCount={jobCategoriesCount} // Pass the dynamically calculated count
        />

        <div className="register-company-section">
          <AdminRegisterCompany companies={companies} />
        </div>
        <div className="job-category-section">
          <AdminJobCategory jobCategories={jobCategories} /> {/* Pass the fetched job categories */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
