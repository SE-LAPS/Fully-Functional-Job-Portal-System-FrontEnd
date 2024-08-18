import React, { useEffect, useState } from 'react';
import '../css/jobalert.css';

const JobAlerts = () => {
  const [jobAlerts, setJobAlerts] = useState([]);

  useEffect(() => {
    const fetchJobPosts = async () => {
      const response = await fetch('http://localhost:8080/api/jobs');
      const data = await response.json();
      setJobAlerts(data);
    };

    fetchJobPosts();
  }, []);

  return (
    <div className="job-alerts-page">
      <main>
        <h1>Job Alerts</h1>
        <div className="job-alerts">
          {jobAlerts.map((alert, index) => (
            <div key={index} className="job-alert">
              {alert.jobImage && <img src={alert.jobImage} alt={alert.title} className="job-image" />}
              <h2 className="job-title">{alert.positionTitle}</h2>
              <p className="job-details">
                <strong>Type:</strong> {alert.jobType} <br />
                <strong>Company:</strong> {alert.companyName} <br />
                <strong>Location:</strong> {alert.location}
              </p>
              <p className="job-description">{alert.positionDescription}</p>
              <button className="apply-button">APPLY NOW</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobAlerts;
