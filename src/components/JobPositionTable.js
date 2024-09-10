import React, { useEffect, useState } from 'react';
import '../css/JobPositionTable.css';  // Import the CSS file

function JobPositionTable() {
  const [jobPositions, setJobPositions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJob, setCurrentJob] = useState({
    id: null,
    positionTitle: '',
    category: '',
    location: '',
    jobType: '',
    positionDescription: '',
    companyName: '',
    companyWebsite: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/jobs')
      .then((response) => response.json())
      .then((data) => setJobPositions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEditClick = (job) => {
    setIsEditing(true);
    setCurrentJob(job);
  };

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:8080/api/jobs/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setJobPositions(jobPositions.filter((job) => job.id !== id));
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentJob({ ...currentJob, [name]: value });
  };

  const handleSaveClick = () => {
    fetch(`http://localhost:8080/api/jobs/${currentJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentJob),
    })
      .then((response) => response.json())
      .then((updatedJob) => {
        setJobPositions(
          jobPositions.map((job) =>
            job.id === updatedJob.id ? updatedJob : job
          )
        );
        setIsEditing(false);
        setCurrentJob({
          id: null,
          positionTitle: '',
          category: '',
          location: '',
          jobType: '',
          positionDescription: '',
          companyName: '',
          companyWebsite: '',
        });
      })
      .catch((error) => console.error('Error updating data:', error));
  };

  return (
    <div className="job-position-table-container">
      <h2>Job Positions</h2>
      {isEditing ? (
        <div className="edit-form">
          <h3>Edit Job Position</h3>
          <label>
            Job Title:
            <input
              type="text"
              name="positionTitle"
              value={currentJob.positionTitle}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={currentJob.category}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={currentJob.location}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Job Type:
            <input
              type="text"
              name="jobType"
              value={currentJob.jobType}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Position Description:
            <textarea
              name="positionDescription"
              value={currentJob.positionDescription}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={currentJob.companyName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Company Website:
            <input
              type="text"
              name="companyWebsite"
              value={currentJob.companyWebsite}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
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
              <th>Actions</th> {/* New column for actions */}
            </tr>
          </thead>
          <tbody>
            {jobPositions.map((job) => (
              <tr key={job.id}>
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
                <td>
                  <button onClick={() => handleEditClick(job)}>Edit</button>
                  <button onClick={() => handleDeleteClick(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default JobPositionTable;
