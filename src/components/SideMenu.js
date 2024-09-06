import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SideMenu.css';

function SideMenu() {
  return (
    <div className="side-menu">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/post-job">Post a Job</Link></li>
        <li><Link to="/manage-jobs">Manage Jobs</Link></li>  {/* Corrected link for Manage Jobs */}
        <li><Link to="/job-positions">Job Post History</Link></li>
        <li><Link to="/apply-job-history">Apply Job History</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
}

export default SideMenu;