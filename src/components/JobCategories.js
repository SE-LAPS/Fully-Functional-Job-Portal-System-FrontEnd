// src/components/JobCategories.js
import React from 'react';
import companyLogo1 from '../assets/campanyimg1.jpg'; // Update with correct path
import companyLogo2 from '../assets/campanyimg1.jpg'; // Update with correct path
import companyLogo3 from '../assets/campanyimg1.jpg'; // Update with correct path

const companies = [
  {
    logo: companyLogo1,
    name: "Company One",
    location: "New York, USA",
  },
  {
    logo: companyLogo2,
    name: "Company Two",
    location: "San Francisco, USA",
  },
  {
    logo: companyLogo3,
    name: "Company Three",
    location: "London, UK",
  },
   {
    logo: companyLogo3,
    name: "Company Three",
    location: "London, UK",
  },

 
  // Add more companies as needed
];

const JobCategories = () => {
  return (
    <section className="job-categories">
      <h2>Top Companies</h2>
      <div className="companies-list">
        {companies.map((company, index) => (
          <div key={index} className="company-item">
            <img src={company.logo} alt={company.name} className="company-logo" />
            <div className="company-info">
              <h3 className="company-name">{company.name}</h3>
              <p className="company-location">{company.location}</p>
              <button className="open-positions-button">Open Positions</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategories;
