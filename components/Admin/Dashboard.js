import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Button } from '@material-ui/core';
import { getAllUsers, getAllJobs } from '../../services/api';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchJobs();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="h5" gutterBottom>
        Users
      </Typography>
      {users.map((user) => (
        <Card key={user.id} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2">{user.email}</Typography>
            <Typography variant="body2">{user.userType}</Typography>
          </CardContent>
        </Card>
      ))}
      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Jobs
      </Typography>
      {jobs.map((job) => (
        <Card key={job.id} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{job.title}</Typography>
            <Typography variant="body2">{job.company}</Typography>
            <Typography variant="body2">{job.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default AdminDashboard;