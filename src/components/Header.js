import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">JobHunter</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/search">Jobs</Link>
        <Link to="/job_alert">Job Alerts</Link>
        <Link to="/employers">Employers</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faqs">FAQs</Link>
        <div className="auth-links">
          <Link to="/login" className="auth-link"><FaSignInAlt /> Login</Link>
          <Link to="/register" className="auth-link"><FaUserPlus /> Register</Link>
        </div>
        <Link to="/post-job" className="post-job-btn">Post a Job</Link> {/* Added Post a Job button */}
      </nav>
    </header>
  );
};

export default Header;
