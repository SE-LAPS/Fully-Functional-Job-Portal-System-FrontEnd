import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import '../css/AdminDashboard.css';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState({ title: '', description: '', company: '', location: '', salary: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axiosInstance.get('/api/jobs');
      setJobs(response.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to fetch jobs. Please try again");
    }
  };

  const handleInputChange = (e) => {
    setCurrentJob({ ...currentJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axiosInstance.put(`/api/jobs/${currentJob.id}`, currentJob);
      } else {
        await axiosInstance.post('/api/jobs', currentJob);
      }
      setCurrentJob({ title: '', description: '', company: '', location: '', salary: '' });
      setIsEditing(false);
      fetchJobs();
    } catch (err) {
      console.error("Error submitting job:", err);
      setError("Failed to submit job. Please try again.");
    }
  };

  const handleEdit = (job) => {
    setCurrentJob(job);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job:", err);
      setError("Failed to delete job. Please try again.");
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" value={currentJob.title} onChange={handleInputChange} placeholder="Job Title" required />
        <input name="description" value={currentJob.description} onChange={handleInputChange} placeholder="Description" required />
        <input name="company" value={currentJob.company} onChange={handleInputChange} placeholder="Company" required />
        <input name="location" value={currentJob.location} onChange={handleInputChange} placeholder="Location" required />
        <input name="salary" value={currentJob.salary} onChange={handleInputChange} placeholder="Salary" type="number" required />
        <button type="submit">{isEditing ? 'Update' : 'Create'} Job</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>
                <button onClick={() => handleEdit(job)}>Edit</button>
                <button onClick={() => handleDelete(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;