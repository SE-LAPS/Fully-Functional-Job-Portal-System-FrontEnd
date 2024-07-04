import React, { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem } from '@material-ui/core';
import { register } from '../services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ name, email, password, userType });
      console.log(response.data);
      // Handle successful registration (e.g., show success message, redirect to login)
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          select
          label="User Type"
          fullWidth
          margin="normal"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          required
        >
          <MenuItem value="jobseeker">Job Seeker</MenuItem>
          <MenuItem value="employer">Employer</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
}

export default Register;