import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, FormControl, InputLabel, MenuItem, Select, Button, Stack } from '@mui/material';

const SearchForm = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleFindJobsClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    navigate('/search', { state: { jobTitle, location, jobType } });
  };

  return (
    <section className="search-form">
      <div className="search-form-header">
        <h1>Join the Next Generation of Job Hunters</h1>
        <p>Upload your Video CV now and increase your chances of being found by top employers.</p>
        <button className="register-button">Register For Free</button>
      </div>

      <div className="search-fields">
        <Stack spacing={2} direction="row" justifyContent="center">
          <TextField
            label="Job Title"
            variant="outlined"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            fullWidth
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              label="Location"
            >
              <MenuItem value=""><em>Location</em></MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Colombo">Colombo</MenuItem>
              <MenuItem value="Kandy">Kandy</MenuItem>
              <MenuItem value="Galle">Galle</MenuItem>
              <MenuItem value="Jaffna">Jaffna</MenuItem>
              <MenuItem value="Negombo">Negombo</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="job-type-label">Job Type</InputLabel>
            <Select
              labelId="job-type-label"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              label="Job Type"
            >
              <MenuItem value=""><em>Job Type</em></MenuItem>
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleFindJobsClick}>
            Search Jobs
          </Button>
        </Stack>
      </div>
    </section>
  );
};

export default SearchForm;