import React from 'react';
import { useLocation } from 'react-router-dom';


const JobDetails = () => {
  const location = useLocation();
  const { job } = location.state || {};

  return (
    <div className="job-details">
      {job ? (
        <>
          <div className="job-header">
            <h1>{job.title}</h1>
            <p>@ {job.company}</p>
            <span className="badge full-time">Full-Time</span>
            <span className="badge featured">Featured</span>
          </div>

          <div className="job-overview">
            <h2>Job Overview</h2>
            <ul>
              <li><strong>Salary (USD):</strong> $100,000 - $120,000 Yearly salary</li>
              <li><strong>Job Location:</strong> Dhaka, Bangladesh</li>
              <li><strong>Job Posted:</strong> 14 Jun, 2021</li>
              <li><strong>Job Expires in:</strong> 14 Aug, 2021</li>
              <li><strong>Experience:</strong> $50k - 80k/month</li>
              <li><strong>Education:</strong> Graduation</li>
              <li><strong>Job Level:</strong> Entry Level</li>
            </ul>
          </div>

          <div className="job-description">
            <h2>Job Description</h2>
            <p>Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!</p>
            <p>Here at Velstar, we don’t just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.</p>
            <p>The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform.</p>
            <p>Want to work with us? You’re in good company!</p>
          </div>

          <div className="job-requirements">
            <h2>Requirements</h2>
            <ul>
              <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
              <li>3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications</li>
              <li>Experience with HTML, JavaScript, CSS, PHP, Symfony and/or Laravel</li>
              <li>Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc)</li>
              <li>Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management</li>
              <li>Familiarity with version control and project management systems (e.g., Github, Jira)</li>
              <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
              <li>Ambitious and hungry to grow your career in a fast-growing agency</li>
            </ul>
          </div>

          <div className="job-desirable">
            <h2>Desirable</h2>
            <ul>
              <li>Working knowledge of eCommerce platforms, ideally Shopify but also others e.g., Magento, WooCommerce, Visualsoft to enable seamless migrations</li>
              <li>Working knowledge of payment gateways</li>
              <li>API platform experience / Building restful APIs</li>
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
          <div className="apply-button">
            <button>Apply Now</button>
          </div>
        </>
      ) : (
        <p>No job details available. Please go back to the job list and select a job.</p>
      )}
    </div>
  );
};

export default JobDetails;
