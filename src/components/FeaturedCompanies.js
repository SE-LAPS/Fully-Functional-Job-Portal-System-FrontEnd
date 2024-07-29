import React, { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    companyLogo: 'path/to/techcom-logo.png',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    dateLine: '01 Jan, 2045',
  },
  {
    id: 2,
    title: 'Marketing Manager',
    companyLogo: 'path/to/international-plants-logo.png',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    dateLine: '01 Jan, 2045',
  },
  {
    id: 3,
    title: 'Product Designer',
    companyLogo: 'path/to/dataxchange-logo.png',
    location: 'New York, USA',
    type: 'Part Time',
    salary: '$123 - $456',
    dateLine: '01 Jan, 2045',
  },
  {
    id: 4,
    title: 'Creative Director',
    companyLogo: 'path/to/fuzion-logo.png',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    dateLine: '01 Jan, 2045',
  },
  {
    id: 5,
    title: 'Wordpress Developer',
    companyLogo: 'path/to/bluephare-logo.png',
    location: 'New York, USA',
    type: 'Part Time',
    salary: '$123 - $456',
    dateLine: '01 Jan, 2045',
  },
  {
    id: 6,
    title: 'Wordpress Developer',
    companyLogo: 'path/to/bluephare-logo.png',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    dateLine: '01 Jan, 2045',
  },
  {
    id: 7,
    title: 'Wordpress Developer',
    companyLogo: 'path/to/bluephare-logo.png',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    dateLine: '01 Jan, 2045',
  },
  {
    id: 8,
    title: 'Wordpress Developer',
    companyLogo: 'path/to/bluephare-logo.png',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$123 - $456',
    dateLine: '01 Jan, 2045',
  },
];

const JobListing = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };

  const filteredJobs = filter === 'All' 
    ? jobs 
    : jobs.filter((job) => job.type === filter);

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
              <p>Date Line: {job.dateLine}</p>
            </div>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
      <button className="browse-more-button">Browse More Jobs</button>
    </div>
  );
};

export default JobListing;
