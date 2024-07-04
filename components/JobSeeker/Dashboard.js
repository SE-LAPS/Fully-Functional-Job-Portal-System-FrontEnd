import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Button } from '@material-ui/core';
import { getJobs, applyForJob } from '../../services/api';

function JobSeekerDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getJobs();
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleApply = async (jobId) => {
    try {
      await applyForJob(jobId);
      // Handle successful application (e.g., show success message, update UI)
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Job Seeker Dashboard
      </Typography>
      {jobs.map((job) => (
        <Card key={job.id} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{job.title}</Typography>
            <Typography variant="body2">{job.company}</Typography>
            <Typography variant="body2">{job.description}</Typography>
            <Button onClick={() => handleApply(job.id)} variant="contained" color="primary">
              Apply
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default JobSeekerDashboard;