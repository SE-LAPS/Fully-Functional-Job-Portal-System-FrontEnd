// src/pages/Register.js
import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
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

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('USER');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Registration Post Request
  const response = await axios.post('http://localhost:8080/api/v1/auth/register', 
    JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      role
    }), 
    {
      headers: {
        'Content-Type': 'application/json' // Explicitly setting the header (optional)
      }
    }
  );

      // Handle successful registration (e.g., redirect or show success message)
      setSuccess('Registration successful! You can now log in.');
      setError('');
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response.data);
        setError(error.response.data.message || 'Registration failed. Please try again.');
      } else if (error.request) {
        // No response from the server
        console.error('Error request:', error.request);
        setError('No response from the server. Please try again later.');
      } else {
        // Other errors
        console.error('Error:', error.message);
        setError('An unexpected error occurred. Please try again.');
      }
      setSuccess('');
    }
    
  };

  return (
    <Container>
      <RegisterBox>
        <Title>Register</Title>
        <Form onSubmit={handleRegister}>
          <InputGroup>
            <Label>Role</Label>
            <div>
              <input
                type="radio"
                id="applicant"
                name="role"
                value="APPLICANT"
                checked={role === 'APPLICANT'}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="applicant">Applicant</label>
            </div>
            <div>
              <input
                type="radio"
                id="company"
                name="role"
                value="COMPANY"
                checked={role === 'COMPANY'}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="company">Company</label>
            </div>
            <div>
              <input
                type="radio"
                id="admin"
                name="role"
                value="ADMIN"
                checked={role === 'ADMIN'}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="admin">Admin</label>
            </div>
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </Form>
        <LoginLink>
          Already have an account? <a href="/login">Login</a>
        </LoginLink>
      </RegisterBox>
    </Container>
  );
};

export default Register;