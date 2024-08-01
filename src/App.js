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
import JobDetails from './pages/JobDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import PostJobForm from './components/PostJobForm'; // Import the PostJobForm component
import SideNav from './components/Header'; // Import the SideNav component
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <SideNav /> {/* Add the SideNav component */}
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/post-job" element={<PostJobForm />} /> {/* Add route for Job Posting Form */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
