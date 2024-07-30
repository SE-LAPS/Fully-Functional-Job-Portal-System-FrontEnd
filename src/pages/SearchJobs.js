import React, { useState } from 'react';
import JobList from '../components/JobList';
import JobDetails from '../components/JobDetails'; 
import jobs from '../api/jobs_api'; 
import Container from '@mui/material/Container';

function SearchJobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleFindJobsClick = (e) => {
    e.preventDefault();
    const filtered = jobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.jobType.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <header>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <form>
            <input
              style={{ width: '300px', margin: '0 10px', padding: '10px' }}
              type="text"
              placeholder="Search for jobs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
              style={{ width: '150px', margin: '0 10px', padding: '10px' }}
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              style={{ width: '150px', margin: '0 10px', padding: '10px' }}
              type="text"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <button className="find-jobs-button" onClick={handleFindJobsClick}>Find Jobs</button>
          </form>
        </div>
      </header>
      <Container maxWidth="md">
        <h3>Jobs Found</h3>
        <main style={{ display: 'flex' }}>
          <div style={{ flex: 2 }}>
            <JobList 
              jobs={filteredJobs} 
              searchTerm={searchTerm} 
              type={type} 
              location={location} 
              onJobSelect={handleJobSelect} 
            />            
          </div>
          <div style={{ flex: 3 }}>
            {selectedJob ? <JobDetails job={selectedJob} /> : <p>Please select a job to view details</p>}
          </div> 
        </main>
      </Container>
    </div>
  );
}

export default SearchJobs;