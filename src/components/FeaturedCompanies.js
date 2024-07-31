// src/components/FeaturedCompanies.js
import React from 'react';
import favoriteIcon from '../assets/22.jpeg'; // Update with correct path
import companyImage1 from '../assets/campanyimg1.jpg'; // Update with correct path
import companyImage2 from '../assets/campanyimg1.jpg'; // Update with correct path
import companyImage3 from '../assets/campanyimg1.jpg'; // Update with correct path
import companyImage4 from '../assets/campanyimg1.jpg'; // Update with correct path
import companyImage5 from '../assets/campanyimg1.jpg'; // Update with correct path
import companyImage6 from '../assets/campanyimg1.jpg'; // Update with correct path

const companies = [
  { name: "Company 1", image: companyImage1 },
  { name: "Company 2", image: companyImage2 },
  { name: "Company 3", image: companyImage3 },
  { name: "Company 4", image: companyImage4 },
  { name: "Company 5", image: companyImage5 },
  { name: "Company 6", image: companyImage6 }
];

const jobs = [
  { title: "Technical Support Specialist", type: "PART-TIME", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Junior Graphic Designer", type: "INTERNSHIP", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Software Engineer", type: "FULL-TIME", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Front End Developer", type: "PART-TIME", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Senior UX Designer", type: "FULL-TIME", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Interaction Designer", type: "PART-TIME", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Visual Designer", type: "FULL-TIME", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Senior UX Designer", type: "FULL-TIME", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Marketing Officer", type: "INTERNSHIP", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Project Manager", type: "FULL-TIME", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
];

const FeaturedCompanies = () => {
  return (
    <section className="featured-companies">
      <h2>Featured Companies</h2>
      <div className="company-list">
        {companies.map((company, index) => (
          <div key={index} className="company">
            <img src={company.image} alt={company.name} className="company-image" />
            <p>{company.name}</p>
          </div>
        ))}
      </div>

      <h2>Featured Jobs</h2>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-item">
            <img src={favoriteIcon} alt="Favorite" className="icon favorite-icon" />
            <h3>{job.title}</h3>
            <p>{job.type} Salary: {job.salary}</p>
            <p>{job.company} <br /> {job.location}</p>
          </div>
        ))}
      </div>

      <button>View All</button>
    </section>
  );
};

export default FeaturedCompanies;
