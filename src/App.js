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
import Dashboard from './components/Dashboard'; 
import GetMobileApps from './components/GetMobileApps';
import ManageJobs from './components/ManageJobs';
import HelpDesk from "./components/HelpDesk";
import ChatBotUI from './components/ChatBotUI'; // Import ChatBotUI component

import AdminDashboard from './components/AdminDashboard'; // Admin Dashboard containing all sections
import AdminJobCategory from './components/AdminJobCategory'; // Separate page for job categories
import AdminRegisterCompany from './components/AdminRegisterCompany';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDataFetch();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const toggleChatVisibility = () => {
    setChatVisible(prev => !prev);
  };

  return (
    <div className="app">
      <SideNav />
      <TopNav />
      <Routes>
        <Route path="/" element={
          <>
            <SearchForm />
            <JobCategories />
            <JobListing />
            <HowWeWork />
            <Testimonial />
            <GetMobileApps />
          </>
        } />
        <Route path="/search" element={<SearchJobs />} />
        <Route path="/job_alert" element={<JobAlerts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/job_details" element={<JobDetails />} />
        <Route path="/apply_jobs" element={<ApplyJobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/help" component={HelpDesk} />
        <Route path="/post-job" element={<PostJobForm />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/view_job_details" element={<ViewJobDetails />} />
        <Route path="/job-positions" element={<JobPositionTable />} />
        <Route path="/apply-job-history" element={<ApplyJobHistory/>} />
        <Route path="/want-job" element={<WantJob />} /> 
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/adminJobCategory" element={<AdminJobCategory />} />
        <Route path="/register-company" element={<AdminRegisterCompany />} />
      </Routes>
      <Footer />
      <div className="chat-icon" onClick={toggleChatVisibility}>
        <i className="fas fa-comments"></i>
      </div>
      <ChatBotUI isVisible={chatVisible} onClose={() => setChatVisible(false)} />
    </div>
  );
};

export default App;
