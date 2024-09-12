import React, { useState, useEffect } from 'react';
import '../css/AdminJobCategory.css'; // Ensure appropriate styles

const AdminJobCategory = () => {
  const [jobPositions, setJobPositions] = useState([]);

  // Fetch job positions data
  useEffect(() => {
    fetch('http://localhost:8080/api/jobs')
      .then((response) => response.json())
      .then((data) => setJobPositions(data))
      .catch((error) => console.error('Error fetching job positions:', error));
  }, []);

  return (
    <div className="admin-job-category">
      <h2>Job Category</h2>
      {jobPositions.length === 0 ? (
        <p>No job positions available.</p>
      ) : (
        <table className="job-position-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {jobPositions.map((job) => (
              <tr key={job.id}>
                <td>{job.positionTitle || 'N/A'}</td>
                <td>{job.category || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminJobCategory;
