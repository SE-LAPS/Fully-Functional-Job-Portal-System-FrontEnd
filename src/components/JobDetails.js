import React from 'react';
import { useNavigate } from 'react-router-dom';


const JobDetails = ({ job }) => {
  const navigate = useNavigate();

  if (!job) {
    return <p>No job details available. Please select a job from the list.</p>;
  }

  const handleApplyNow = () => {
    navigate('/apply_jobs', { state: { job } }); // Pass job details to ApplyJobs page if needed
  };

  return (
    <div className="job-details">
      <div className="job-header">
        <h1>{job.title}</h1>
        <p>@ {job.company}</p>
        <span className="badge full-time">{job.jobType}</span>
      </div>
      <div className="job-overview">
        <h2>Job Overview</h2>
        <ul>
          <li><strong>Salary (USD):</strong> ${job.salary}</li>
          <li><strong>Job Location:</strong> {job.location}</li>
          <li><strong>Job Posted:</strong> {job.postedDate}</li>
          <li><strong>Job Expires in:</strong> {job.expiryDate}</li>
          <li><strong>Experience:</strong> {job.experience}</li>
          <li><strong>Education:</strong> {job.education}</li>
          <li><strong>Job Level:</strong> {job.level}</li>
        </ul>
      </div>

      <div className="job-description">
        <h2>Job Description</h2>
        <p>Join Velstar, a leading Shopify Plus agency, where we create exceptional digital experiences. As a Full Stack Developer, you'll translate project specifications into clean, test-driven code while collaborating with designers, developers, and strategists. You'll be involved in all stages of development, from creating innovative features to maintaining secure, scalable solutions on the Shopify platform.</p>
      </div>

      <div className="job-requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
          <li>3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications</li>
          <li>Experience with HTML, JavaScript, CSS, PHP, Symfony and/or Laravel</li>
          <li>Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc)</li>
          <li>Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management</li>
        </ul>
      </div>

      <div className="job-benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your choice from the bar!)</li>
          <li>28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day off on your birthday</li>
          <li>Generous annual bonus</li>
          <li>Healthcare package</li>
          <li>Paid community days to volunteer for a charity of your choice</li>
          <li>£100 contribution for your own personal learning and development</li>
          <li>Free Breakfast on Mondays and free snacks in the office</li>
          <li>Access to Perkbox with numerous discounts plus free points from the company to spend as you wish</li>
          <li>Cycle 2 Work Scheme</li>
          <li>Brand new MacBook Pro</li>
          <li>Joining an agency on the cusp of exponential growth and being part of this exciting story</li>
        </ul>
      </div>

      <div className="Job-Details-apply-button">
        <button onClick={handleApplyNow}>Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
