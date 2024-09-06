import React, { useEffect, useState } from 'react';
import '../css/JobPositionTable.css';  // Import the CSS file

function JobPositionTable() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/jobs')
      .then((response) => response.json())
      .then((data) => setJobPositions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="job-position-table-container">
      <h2>Job Positions</h2>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Job Type</th>
            <th>Position Description</th>
            <th>Company Name</th>
            <th>Company Website</th>
          </tr>
        </thead>
        <tbody>
          {jobPositions.map((job) => (
            <tr key={job.id}> {/* Use a unique id for the key */}
              <td>{job.positionTitle || 'N/A'}</td>
              <td>{job.category || 'N/A'}</td>
              <td>{job.location || 'N/A'}</td>
              <td>{job.jobType || 'N/A'}</td>
              <td>{job.positionDescription || 'N/A'}</td>
              <td>{job.companyName || 'N/A'}</td>
              <td>
                {job.companyWebsite ? (
                  <a href={job.companyWebsite} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobPositionTable;
