import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Header.css';

const SideNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const expandNav = () => setIsExpanded(true);
  const collapseNav = () => setIsExpanded(false);

  const handlePostJobClick = () => {
    navigate('/post-job');
  };

  return (
    <nav 
      className={`side-nav ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={expandNav}
      onMouseLeave={collapseNav}
    >
      <div className="toggle-btn">
        {isExpanded ? '▶' : '◀'}
      </div>
      <div className="nav-content">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/search" className="nav-item">Jobs</Link>
        <Link to="/job_alert" className="nav-item">Job Alerts</Link>
        <Link to="/employers" className="nav-item">Employers</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/faqs" className="nav-item">FAQs</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/signup" className="nav-item">Sign Up</Link>
        <button className="post-job-btn" onClick={handlePostJobClick}>Post a Job</button>
      </div>
    </nav>
  );
};

export default SideNav;
