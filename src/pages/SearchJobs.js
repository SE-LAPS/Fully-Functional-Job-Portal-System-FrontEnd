import React, { useState } from 'react';
import JobList from '../components/JobList';
import JobDetails from '../components/JobDetails'; 
import jobs from '../api/jobs_api'; 

import Container from '@mui/material/Container';

function SearchJobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  return (
    <div>
      <header>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <form>
            <input
              style={{ width: '200px', margin: '0 10px', padding: '10px' }}
              type="text"
              placeholder="Keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
              style={{ width: '200px', margin: '0 10px', padding: '10px' }}
              type="text"
              placeholder="Location"
            />
            <input
              style={{ width: '200px', margin: '0 10px', padding: '10px' }}
              type="number"
              placeholder="Distance"
            />
            <button style={{ margin: '0 10px', padding: '10px, 20px' }} type="submit">
              Find Jobs
            </button>
          </form>
        </div>
      </header>
      <Container maxWidth="md">
        <h3>Jobs Found</h3>
        <main style={{ display: 'flex' }}>
            <div style={{ flex: 2 }}>
              <JobList jobs={jobs} searchTerm={searchTerm} onJobSelect={handleJobSelect} />
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
