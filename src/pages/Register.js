import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('JOB_SEEKER');
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ username, email, password, role });
      console.log('Registration successful', response);
      setMessage({ text: 'Registration successful! Redirecting to login...', type: 'success' });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration failed', error);
      setMessage({ 
        text: error.response?.data || 'Registration failed. Please try again.', 
        type: 'error' 
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          style={styles.select}
        >
          <option value="JOB_SEEKER">Job Seeker</option>
          <option value="COMPANY">Company</option>
        </select>
        <button type="submit" style={styles.button}>Register</button>
      </form>
      <p style={styles.linkText}>
        Already have an account? <Link to="/login" style={styles.link}>Login here</Link>
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
  select: {
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

export default Register;
