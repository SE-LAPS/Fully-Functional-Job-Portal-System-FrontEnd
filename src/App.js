import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import SearchForm from './components/SearchForm';
import JobListing from './components/JobListing';
import JobCategories from './components/JobCategories';
import HowWeWork from './components/HowWeWork';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import SearchJobs from './pages/SearchJobs';
import JobAlerts from './pages/job_alert';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import JobDetails from './components/JobDetails';
import ApplyJobs from './pages/ApplyJobs';
import About from './pages/About';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import PostJobForm from './components/PostJobForm';
import Employers from './pages/Employee';
import ViewJobDetails from './pages/ViewJobDetails';

import WantJob from './pages/WantJob';
import JobPositionTable from './components/JobPositionTable';
import ApplyJobHistory from './components/ApplyJobHistory';
import UserProfile from './components/UserProfileEditForm';
import EmployerProfile from './pages/EmployerProfile';
import AdminProfile from './pages/AdminProfile';
import EditProfile from './pages/EditProfiles';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import ManageJobs from './components/ManageJobs';
import GetMobileApps from './components/GetMobileApps';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a data fetch with a timeout to show the loader
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000); // 4 seconds delay
    };
    fakeDataFetch();
  }, []);

  // Show loader while data is loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <SideNav /> {/* Navigation sidebar */}
      <TopNav /> {/* Top navigation bar */}
      <Routes>
        {/* Home route with main components */}
        <Route path="/" element={
          <>
            <SearchForm /> {/* Search form */}
            <JobCategories /> {/* Job categories section */}
            <JobListing /> {/* Job listing section */}
            <HowWeWork /> {/* Section explaining how it works */}
            <Testimonial /> {/* User testimonials */}
            <GetMobileApps />
          </>
        } />
        <Route path="/search" element={<SearchJobs />} /> {/* Page for searching jobs */}
        <Route path="/admin_dashboard" element={<AdminDashboard />} /> {/* Admin dashboard */}
        <Route path="/job_alert" element={<JobAlerts />} /> {/* Job alerts page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/register" element={<Register />} /> {/* Registration page */}
        <Route path="/forgot_password" element={<ForgotPassword />} /> {/* Forgot password page */}
        <Route path="/job_details" element={<JobDetails />} /> {/* Job details page */}
        <Route path="/apply_jobs" element={<ApplyJobs />} /> {/* Apply for jobs page */}
        <Route path="/about" element={<About />} /> {/* About us page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact us page */}
        <Route path="/faqs" element={<Faqs />} /> {/* Frequently asked questions page */}
        <Route path="/post-job" element={<PostJobForm />} /> {/* Form for posting a new job */}
        <Route path="/employers" element={<Employers />} /> {/* Employers page */}
        <Route path="/admin" element={<Dashboard />} /> {/* Admin dashboard (updated route) */}
        <Route path="/view_job_details" element={<ViewJobDetails />} /> {/* View job details page */}
        <Route path="/user_profile" element={<UserProfile />} /> {/* User profile page */}
        <Route path="/employer_profile" element={<EmployerProfile />} /> {/* Employer profile page */}
        <Route path="/admin_profile" element={<AdminProfile />} /> {/* Admin profile page */}
        <Route path="/edit_profile" element={<EditProfile />} /> {/* Edit profile page */}
        <Route path="/want-job" element={<WantJob />} /> {/* Want job page */}
        <Route path="/job-positions" element={<JobPositionTable />} /> {/* Job position table */}
        <Route path="/apply-job-history" element={<ApplyJobHistory />} /> {/* Job application history */}
        <Route path="/manage-jobs" element={<ManageJobs />} />
      </Routes>
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default App;
