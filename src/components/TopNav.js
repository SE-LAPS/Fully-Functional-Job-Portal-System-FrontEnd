import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/TopNav.css';
import logoImage from '../assets/companyLogos/2.png';

const TopNav = () => {
  const navigate = useNavigate();

  const handlePostJobClick = () => {
    navigate('/admin-dashboard');
  };

  const handleWantJobClick = () => {
    navigate('/want-job');
  };

  return (
    <nav className="top-nav">
      <div className="logo-container">
        <div className="icon-container"></div>
        <img src={logoImage} alt="Company Logo" className="company-logo" />
      </div>
      <div className="nav-buttons">
        <div className="top-nav-buttons">
          <Link to="/login" className="btn-shine">Register / Login</Link>
        </div>
        <button className="top-nav-btn post-job-btn" onClick={handlePostJobClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
            <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
          </svg>
          POST A JOB
        </button>
        <button className="top-nav-btn post-job-btn" onClick={handleWantJobClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
            <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
          </svg>
          WANT A JOB
        </button>
      </div>
    </nav>
  );
};

export default TopNav;