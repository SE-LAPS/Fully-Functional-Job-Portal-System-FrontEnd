import React, { useEffect, useState } from 'react';
import '../css/ApplyJobHistory.css';  // Import the CSS file

function ApplyJobHistory() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/jobs')
      .then((response) => response.json())
      .then((data) => setJobPositions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="Apply-job-position-table-container">
      <h2>Apply Job Positions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Company</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {jobPositions.map((job) => (
            <tr key={job.id}> {/* Use a unique id for the key */}
              <td>{job.name || 'N/A'}</td>
              <td>{job.positionTitle || 'N/A'}</td>
              <td>{job.companyName || 'N/A'}</td>
              <td>{job.email || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplyJobHistory;
