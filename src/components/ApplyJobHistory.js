import React, { useEffect, useState } from 'react';
import '../css/ApplyJobHistory.css';

function ApplyJobHistory({ onCountChange }) {
  const [jobPositions, setJobPositions] = useState([]);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/jobs/apply/total-applications')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);  // Debugging: Check the fetched data
        setJobPositions(data);
        if (onCountChange) {
          onCountChange(data.length); // Notify parent component of the count
        }
      })
      .catch((error) => setError(`Error fetching data: ${error.message}`));
  }, [onCountChange]);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/jobs/apply/applications/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setJobPositions((prevJobPositions) =>
          prevJobPositions.filter((job) => job.id !== id)
        );
        if (onCountChange) {
          onCountChange(jobPositions.length - 1); // Update count after delete
        }
      })
      .catch((error) => setError(`Error deleting data: ${error.message}`));
  };

  const handleEdit = (job) => {
    setCurrentJob(job);
    setEditMode(true);
  };

  const handleChange = (e) => {
    setCurrentJob({
      ...currentJob,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/jobs/apply/applications/${currentJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentJob),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((updatedJob) => {
        setJobPositions((prevJobPositions) =>
          prevJobPositions.map((job) =>
            job.id === updatedJob.id ? updatedJob : job
          )
        );
        setEditMode(false);
        setCurrentJob(null);
      })
      .catch((error) => setError(`Error updating data: ${error.message}`));
  };

  return (
    <div className="Apply-job-position-table-container">
      <h2>Apply Job Positions</h2>
      {error && <p className="error">{error}</p>}

      {editMode ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <h3>Edit Job Position</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={currentJob.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="positionTitle"
              value={currentJob.positionTitle}
              onChange={handleChange}
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="companyName"
              value={currentJob.companyName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={currentJob.email}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
        </form>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Company</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobPositions.map((job) => (
              <tr key={job.id}>
                <td>{job.name || 'N/A'}</td>
                <td>{job.positionTitle || 'N/A'}</td>
                <td>{job.companyName || 'N/A'}</td>
                <td>{job.email || 'N/A'}</td>
                <td>
                  <button onClick={() => handleEdit(job)}>Edit</button>
                  <button onClick={() => handleDelete(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApplyJobHistory;
