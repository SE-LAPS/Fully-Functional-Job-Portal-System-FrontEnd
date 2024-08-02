import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    companyLogo: require('../assets/companyLogos/codegen_logo.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$100 - $150',
  },
  {
    id: 2,
    title: 'UI/UX Engineer',
    companyLogo: require('../assets/companyLogos/ifs.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Part Time',
    salary: '$123 - $456',
  },
  {
    id: 3,
    title: 'Devops Engineer',
    companyLogo: require('../assets/companyLogos/dialog.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Part Time',
    salary: '$123 - $456',
  },
  {
    id: 4,
    title: 'Business Analysis',
    companyLogo: require('../assets/companyLogos/codegen_logo.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$123 - $456',
  },
  {
    id: 5,
    title: 'Quality Assurance',
    companyLogo: require('../assets/companyLogos/codegen_logo.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Part Time',
    salary: '$123 - $456',
  },
  {
    id: 6,
    title: 'Frontend Developer',
    companyLogo: require('../assets/companyLogos/codegen_logo.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$123 - $456',
  },
  {
    id: 7,
    title: 'Backend Developer',
    companyLogo: require('../assets/companyLogos/codegen_logo.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$123 - $456',
  },
  {
    id: 8,
    title: 'Wordpress Developer',
    companyLogo: require('../assets/companyLogos/codegen_logo.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$123 - $456',
  },
];

const JobListing = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };

  const filteredJobs = filter === 'All' 
    ? jobs 
    : jobs.filter((job) => job.type === filter);

  const handleViewDetailsClick = (job) => {
    navigate('/view_job_details', { state: { job } });
  };

  return (
    <div className="job-listing">
      <h2 className="heading">Job Listing</h2>
      <div className="filters">
        <button className="filter-button" onClick={() => handleFilterClick('All')}>Featured</button>
        <button className="filter-button" onClick={() => handleFilterClick('Full Time')}>Full Time</button>
        <button className="filter-button" onClick={() => handleFilterClick('Part Time')}>Part Time</button>
      </div>
      <div className="job-cards">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <img src={job.companyLogo} alt={`${job.title} logo`} className="company-logo" />
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <p>{job.type}</p>
              <p>{job.salary}</p>
            </div>
            <button className="view-details-button" onClick={() => handleViewDetailsClick(job)}>View Details</button>
          </div>
        ))}
      </div>
      <button className="browse-more-button">Browse More Jobs</button>
    </div>
  );
};

export default JobListing;