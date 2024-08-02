import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import FeaturedCompanies from './components/FeaturedCompanies';
import JobCategories from './components/JobCategories';
import HowWeWork from './components/HowWeWork';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import SearchJobs from './pages/SearchJobs';
import JobAlerts from './pages/job_alert';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import JobDetails from './components/JobDetails';
import ApplyJobs from './pages/ApplyJobs';
import About from './pages/About';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import PostJobForm from './components/PostJobForm';
import Employers from './pages/Employee';
import ViewJobDetails from './pages/ViewJobDetails'; // Import the ViewJobDetails component
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SearchForm />
              <JobCategories />
              <FeaturedCompanies />
              <HowWeWork />
              <Testimonial />
            </>
          } />
          <Route path="/search" element={<SearchJobs />} />
          <Route path="/job_alert" element={<JobAlerts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/job_details" element={<JobDetails />} />
          <Route path="/apply_jobs" element={<ApplyJobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/post-job" element={<PostJobForm />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/view_job_details" element={<ViewJobDetails />} /> {/* Added route for ViewJobDetails */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;