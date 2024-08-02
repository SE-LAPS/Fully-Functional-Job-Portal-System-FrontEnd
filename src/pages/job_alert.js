import React from 'react';


const jobAlerts = [
  {
    title: "Software Engineer",
    type: "Full Time/Permanent",
    company: "Tech Company",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta."
  },
  {
    title: "Product Manager",
    type: "Full Time/Permanent",
    company: "Innovative Solutions",
    location: "New York, NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta."
  },
  {
    title: "UX Designer",
    type: "Full Time/Permanent",
    company: "Design Studio",
    location: "Remote",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta."
  }
];

const JobAlerts = () => {
  return (
    <div className="job-alerts-page">
      <main>
        <h1>Job Alerts</h1>
        <div className="job-alerts">
          {jobAlerts.map((alert, index) => (
            <div key={index} className="job-alert">
              <h2 className="job-title">{alert.title}</h2>
              <p className="job-details">
                <strong>Type:</strong> {alert.type} <br />
                <strong>Company:</strong> {alert.company} <br />
                <strong>Location:</strong> {alert.location}
              </p>
              <p className="job-description">{alert.description}</p>
              <button className="apply-button">APPLY NOW</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobAlerts;