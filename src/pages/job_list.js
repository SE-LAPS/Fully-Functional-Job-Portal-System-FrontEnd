import React from 'react';


const jobs = [
  { company: 'AMAZON', title: 'Fullstack Developer', location: 'Remote', category: 'Fullstack' },
  { company: 'FLP', title: 'Digital Marketing', location: 'Remote', category: 'Digital Marketing' },
  { company: 'PAYTM', title: 'Jr. Frontend Developer', location: 'Mumbai', category: 'Frontend' },
  { company: 'TESLA', title: 'Software Engineer', location: 'Gurugram', category: 'Full Stack' },
  { company: 'ELASTIC RUN', title: 'Jr. Backend Developer', location: 'Jaipur', category: 'Backend' },
  { company: 'TCS', title: 'Jr. Devops Engineer', location: 'Bangalore', category: 'Devops' },
  { company: 'MYNTRA', title: 'Jr. Frontend Developer', location: 'Remote', category: 'Frontend' },
  { company: 'SYNOPSYS', title: 'Full Stack Engineer', location: 'Hyderabad', category: 'Fullstack' },
  { company: 'OPTUM', title: 'Front-End Developer', location: 'New Delhi', category: 'Frontend' },
  { company: 'INFOSYS', title: 'React Developer', location: 'Bangalore', category: 'Frontend' },
  { company: 'TECH MAHINDRA', title: 'NodeJS Developer', location: 'Jaipur', category: 'Backend' },
  { company: 'CLOUD MENTOR', title: 'Software Engineer', location: 'Surat', category: 'Full Stack' },
  { company: 'FLIPKART', title: 'Sr. Devops Engineer', location: 'Mumbai', category: 'Devops' },
  { company: 'COGNIZANT', title: 'Front-End Developer', location: 'Hyderabad', category: 'Frontend' },
  { company: 'IBM', title: 'Jr. Backend Developer', location: 'Bangalore', category: 'Backend' },
  { company: 'ACCENTURE', title: 'Sr. Devops Engineer', location: 'New Delhi', category: 'Devops' },
  { company: 'ORACLE', title: 'Digital Marketing', location: 'Noida', category: 'Digital Marketing' },
  { company: 'DELLOITE', title: 'Full Stack Engineer', location: 'Mumbai', category: 'Full Stack' },
  { company: 'SAP LABS', title: 'Sr. Devops Engineer', location: 'Gurugram', category: 'Devops' },
  { company: 'FACEBOOK', title: 'Full Stack Engineer', location: 'Mumbai', category: 'Full Stack' },
];

const JobList = () => {
  return (
    <div className="job-list-container">
      <h1 className="title">Job Listings</h1>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <img src={`path/to/${job.company.toLowerCase()}.png`} alt={`${job.company} logo`} className="job-logo" />
            <div className="job-info">
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.category}</p>
            </div>
            <div className="job-actions">
              <button className="favorite-btn">★</button>
              <button className="save-btn">Save</button>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
