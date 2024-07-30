import React from 'react';
import companyLogo1 from '../assets/ibm.jpeg'; // Update with correct path
import companyLogo2 from '../assets/sap.jpeg'; // Update with correct path
import companyLogo3 from '../assets/flipkart.jpeg';
import companyLogo4 from '../assets/cloud-mentor.jpeg';
import companyLogo5 from '../assets/tech-mahindra.png'; // Update with correct path

const companies = [
  {
    logo: companyLogo1,
    name: "IBM",
    location: "New York, USA",
  },
  {
    logo: companyLogo2,
    name: "Myntra",
    location: "San Francisco, USA",
  },
  {
    logo: companyLogo3,
    name: "naukri",
    location: "London, UK",
  },
  {
    logo: companyLogo4,
    name: "Cloud Mentor",
    location: "Tokyo, Japan",
  },
    {
    logo: companyLogo5,
    name: "Tech mahindra",
    location: "Tokyo, Japan",
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
