import React, { useEffect, useState } from 'react';
import '../css/jobalert.css';

const JobAlerts = () => {
  const [jobAlerts, setJobAlerts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const alertsPerPage = 6;

  useEffect(() => {
    const fetchJobPosts = async () => {
      const response = await fetch('http://localhost:8080/api/jobs');
      const data = await response.json();
      setJobAlerts(data);
    };

    fetchJobPosts();
  }, []);

  // Calculate indices for the current page
  const indexOfLastAlert = currentPage * alertsPerPage;
  const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;
  const currentJobAlerts = jobAlerts.slice(indexOfFirstAlert, indexOfLastAlert);

  // Calculate total number of pages
  const totalPages = Math.ceil(jobAlerts.length / alertsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="job-alerts-page">
      <main>
        <h1>Job Alerts</h1>
        <div className="job-alerts">
          {currentJobAlerts.map((alert, index) => (
            <div key={index} className="job-alert">
              {alert.jobImage && <img src={alert.jobImage} alt={alert.title} className="job-image" />}
              <h2 className="job-title">{alert.positionTitle}</h2>
              <p className="job-details">
                <strong>Type:</strong> {alert.jobType} <br />
                <strong>Company Name:</strong> {alert.companyName} <br />
                <strong>Location:</strong> {alert.location}
              </p>
              <button className="apply-button">APPLY NOW</button>
            </div>
          ))}
        </div>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default JobAlerts;