import React from 'react';
import { TextField, Button } from '@mui/material';

const ResumeForm = ({ resumeData, setResumeData }) => {
  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <TextField 
        label="Full Name" 
        name="fullName" 
        onChange={handleChange} 
        fullWidth 
      /><br /><br />
      <TextField 
        label="Email" 
        name="email" 
        onChange={handleChange} 
        fullWidth 
      /><br /><br />
      <TextField 
        label="Phone Number" 
        name="phone" 
        onChange={handleChange}
        fullWidth 
      /><br /><br />
      <TextField 
        label="Summary" 
        name="summary" multiline rows={4} 
        onChange={handleChange} 
        fullWidth 
        />
    </form>
  );
};

export default ResumeForm;
