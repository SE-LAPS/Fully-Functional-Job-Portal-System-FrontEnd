import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
`;

const LoginBox = styled.div`
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

const RegisterLink = styled.div`
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

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = new URLSearchParams(location.search).get('redirect') || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
    localStorage.setItem('authToken', 'dummy-token'); // Example token, replace with real authentication
    navigate(redirectTo);
  };

  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" required />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" required />
          </InputGroup>
          <Button type="submit">Login</Button>
        </Form>
        <RegisterLink>
          Don't have an account? <a href="/register">Register</a>
        </RegisterLink>
      </LoginBox>
    </Container>
  );
};

export default Login;