// src/pages/Register.js
import React from 'react';
import styled from 'styled-components';

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
  background: #6c63ff;
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
  return (
    <Container>
      <RegisterBox>
        <Title>Register</Title>
        <Form>
          <InputGroup>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter your full name" required />
          </InputGroup>
          <InputGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" required />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" required />
          </InputGroup>
          <Button type="submit">Register</Button>
        </Form>
        <LoginLink>
          Already have an account? <a href="/login">Login</a>
        </LoginLink>
      </RegisterBox>
    </Container>
  );
};

export default Register;
