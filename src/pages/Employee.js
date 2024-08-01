import React from 'react';


const Employers = () => {
  const employers = new Array(16).fill({
    name: 'SLIBTEC',
    logo: 'path/to/slibtec-logo.png', // Replace with the actual path to your logo
    link: '#',
  });

  return (
    <div className="employers-container">
      <h2>Employers</h2>
      <div className="employers-grid">
        {employers.map((employer, index) => (
          <div key={index} className="employer-card">
            <img src={employer.logo} alt={employer.name} className="employer-logo" />
            <h3>{employer.name}</h3>
            <a href={employer.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employers;
