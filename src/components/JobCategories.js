import React from 'react';
import companyLogo1 from '../assets/companyLogos/dialog.png'; // Update with correct path
import companyLogo2 from '../assets/Logo.png'; // Update with correct path
import companyLogo3 from '../assets/companyLogos/optum.png';
import companyLogo4 from '../assets/companyLogos/codegen_logo.png';
import companyLogo5 from '../assets/companyLogos/ifs.png'; // Update with correct path

const companies = [
  {
    logo: companyLogo1,
    name: "Dialog",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo2,
    name: "SLIBTEC",
    location: "Homagama",
  },
  {
    logo: companyLogo3,
    name: "Optum",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo4,
    name: "Codegen",
    location: "Sri Lanka",
  },
  {
    logo: companyLogo5,
    name: "IFS",
    location: "Sri Lanka",
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
            <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
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
