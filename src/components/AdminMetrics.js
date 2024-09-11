import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faClipboardList, faBookmark, faTimesCircle } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
import '../css/Metrics.css';

const COLORS = ['#dc3545', '#007bff', '#28a745',' #ffc107']; // Colors for pie chart segments

function AdminMetrics({ metrics }) {


  const categoryData = [
    { name: 'Total Applications', value: metrics.totalApplications },
    { name: 'Total Job Posts', value: metrics.totalJobPosts },
    { name: 'Shortlisted Candidates', value: metrics.totalMeetings },
    { name: 'Rejected Candidates', value: metrics.totalHirings },
  ];

  return (
    <div className="metrics">
      <h2>Dashboard Metrics</h2>
    <div className="metrics-summary">
    <div className="metric-item job-posts">
      <FontAwesomeIcon icon={faBriefcase} size="2x" color="#fff" /> {/* Icon for Job Posts */}
      <h3>Job Posts</h3>
      <p>{metrics.totalJobPosts}</p>
    </div>
    <div className="metric-item apply-jobs">
      <FontAwesomeIcon icon={faClipboardList} size="2x" color="#fff" /> {/* Icon for Total Apply Jobs */}
      <h3>Total Apply Jobs</h3>
      <p>{metrics.totalApplications}</p>
    </div>
    <div className="metric-item shortlisted">
      <FontAwesomeIcon icon={faBookmark} size="2x" color="#fff" /> {/* Icon for Shortlisted Candidates */}
      <h3>Shortlisted Candidates</h3>
      <p>{metrics.totalMeetings}</p>
    </div>
    <div className="metric-item rejected">
      <FontAwesomeIcon icon={faTimesCircle} size="2x" color="#fff" /> {/* Icon for Rejected Candidates */}
      <h3>Rejected Candidates</h3>
      <p>{metrics.totalHirings}</p>
    </div>
  </div>

    </div>
  );
}

export default AdminMetrics;
