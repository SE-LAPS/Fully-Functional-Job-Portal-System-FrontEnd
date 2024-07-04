import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Button, TextField } from '@material-ui/core';
import { getPostedJobs, postJob } from '../../services/api';

function EmployerDashboard() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getPostedJobs();
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching posted jobs:', error);
    }
  };

  const handlePostJob = async (e) => {
    e.preventDefault();
    try {
      await postJob(newJob);
      setNewJob({ title: '', description: '' });
      fetchJobs();
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Employer Dashboard
      </Typography>
      <form onSubmit={handlePostJob}>
        <TextField
          label="Job Title"
          fullWidth
          margin="normal"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          required
        />
        <TextField
          label="Job Description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={newJob.description}
          onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Post Job
        </Button>
      </form>
      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Posted Jobs
      </Typography>
      {jobs.map((job) => (
        <Card key={job.id} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{job.title}</Typography>
            <Typography variant="body2">{job.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default EmployerDashboard;