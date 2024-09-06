import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
  min-height: 100vh;
  padding: 20px;
`;

const RegisterBox = styled.div`
  width: 400px;
  padding: 40px;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  width: 100%;
`;

const RadioBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #574b90;
  }
`;

const LoginLink = styled.div`
  margin-top: 20px;
  color: #555;

  a {
    color: #6c63ff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: 10px;
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('JOB_SEEKER');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/users/register', 
        JSON.stringify({
          username,
          email,
          password,
          firstName,
          lastName,
          role
        }), 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      setSuccess('Registration successful! You can now log in.');
      setTimeout(() => navigate('/login'), 3000); // Redirect to login page after 3 seconds
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Registration failed. Please try again.');
      } else if (error.request) {
        setError('No response from the server. Please try again later.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <Container>
      <RegisterBox>
        <Title>Register</Title>
        <Form onSubmit={handleRegister}>
          <InputGroup>
            <Label>Role</Label>
            <RadioBox>
              <div>
                <Radio
                  id="jobseeker"
                  name="role"
                  value="JOB_SEEKER"
                  checked={role === 'JOB_SEEKER'}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="jobseeker">Job Seeker</label>
              </div>
              <div>
                <Radio
                  id="company"
                  name="role"
                  value="COMPANY"
                  checked={role === 'COMPANY'}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="company">Company</label>
              </div>
            </RadioBox>
          </InputGroup>
          <InputGroup>
            <Label>First Name</Label>
            <Input type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </InputGroup>
          <InputGroup>
            <Label>Last Name</Label>
            <Input type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </InputGroup>
          <InputGroup>
            <Label>Username</Label>
            <Input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </InputGroup>
          <InputGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </InputGroup>
          <InputGroup>
            <Label>Confirm Password</Label>
            <Input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </InputGroup>
          <Button type="submit">Register</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
        </Form>
        <LoginLink>
          Already have an account? <a href="/login">Login</a>
        </LoginLink>
      </RegisterBox>
    </Container>
  );
};

export default Register;