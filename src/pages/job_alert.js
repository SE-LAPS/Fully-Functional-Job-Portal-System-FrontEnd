import React, { useEffect, useState } from 'react';
import '../css/jobalert.css';

const JobAlerts = () => {
  const [jobAlerts, setJobAlerts] = useState([]);
  const [visibleJobAlerts, setVisibleJobAlerts] = useState(6);

  useEffect(() => {
    const fetchJobPosts = async () => {
      const response = await fetch('http://localhost:8080/api/jobs');
      const data = await response.json();
      setJobAlerts(data);
    };

    fetchJobPosts();
  }, []);

  const showMoreJobs = () => {
    setVisibleJobAlerts(prev => prev + 6);
  };

  return (
    <div className="job-alerts-page">
      <main>
        <h1>Job Alerts</h1>
        <div className="job-alerts">
          {jobAlerts.slice(0, visibleJobAlerts).map((alert, index) => (
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
        {visibleJobAlerts < jobAlerts.length && (
          <button className="show-more-button" onClick={showMoreJobs}>
            Show All
          </button>
        )}
      </main>
    </div>
  );
};

export default JobAlerts;
