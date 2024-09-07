import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      console.log('Login successful', response);
      
      // Store user information in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Set success message
      setMessage({ text: 'Login successful! Redirecting...', type: 'success' });
      
      // Redirect to home page or dashboard after a short delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Login failed', error);
      setMessage({ 
        text: error.response?.data || 'Invalid username or password. Please try again.', 
        type: 'error' 
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      {message.text && (
        <p style={{ ...styles.message, color: message.type === 'success' ? 'green' : 'red' }}>
          {message.text}
        </p>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.linkText}>
        Don't have an account? <Link to="/register" style={styles.link}>Register here</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#f4f4f9',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  message: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  linkText: {
    textAlign: 'center',
    marginTop: '15px',
    color: '#333',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Login;
