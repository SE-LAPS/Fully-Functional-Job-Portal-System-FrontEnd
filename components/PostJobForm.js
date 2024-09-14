import React, { useState } from 'react';
// import SideMenu from './SideMenu'; 
import SideMenu from './SideMenu';
import '../css/Dashboard.css';

const PostJobForm = ({ onJobPosted }) => {
  // manage form data and submission status
  const [formData, setFormData] = useState({
    positionTitle: '',
    category: '',
    salaryRange: '',
    worldwidePosition: false,
    jobType: '',
    applicationLinkOrEmail: '',
    positionDescription: '',
    companyName: '',
    companyWebsite: '',
    emailAddress: '',
    companyDescription: '',
    location: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle - changes in form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle-  form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the API
    const response = await fetch('http://localhost:8080/api/job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Job position submitted successfully');
      setSubmitted(true);

      // Trigger callback if provided (e.g., to re-fetch job posts)
      if (onJobPosted) onJobPosted();
    } else {
      console.error('Failed to submit job position');
    }
  };

  return (
    <div className="dashboard-container">
      <SideMenu />
      <div className="post-job-form-container">
        <h2>Reach one of the largest remote job communities</h2>
        <h3>First, tell us about the position</h3>
        <form onSubmit={handleSubmit}>
          {/* Position Title Input */}
          <div>
            <label>Position Title</label>
            <input
              type="text"
              name="positionTitle"
              placeholder="Position Title"
              value={formData.positionTitle}
              onChange={handleChange}
              required
            />
          </div>
          {/* Category Select */}
          <div>
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="Full-Stack Programming">Full-Stack Development</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Devops Engineer">Devops Engineer</option>
              <option value="UI/UX Engineer">UI/UX Engineer</option>
              <option value="QA Engineer">QA Engineer</option>
            </select>
          </div>
          {/* Salary Range Input */}
          <div>
            <label>Salary Range</label>
            <input
              type="text"
              name="salaryRange"
              placeholder="Salary Range"
              value={formData.salaryRange}
              onChange={handleChange}
            />
          </div>
          {/* Job Type Radio Buttons */}
          <div>
            <label>Job Type</label>
            <input
              type="radio"
              name="jobType"
              value="Full-Time"
              checked={formData.jobType === "Full-Time"}
              onChange={handleChange}
            /> Full-Time
            <input
              type="radio"
              name="jobType"
              value="Part-Time"
              checked={formData.jobType === "Part-Time"}
              onChange={handleChange}
            /> Part-Time
            <input
              type="radio"
              name="jobType"
              value="Contract"
              checked={formData.jobType === "Contract"}
              onChange={handleChange}
            /> Contract
          </div>
          {/* Application Link or Email Input */}
          <div>
            <label>Application Link or Email</label>
            <input
              type="text"
              name="applicationLinkOrEmail"
              placeholder="Application Link or Email"
              value={formData.applicationLinkOrEmail}
              onChange={handleChange}
              required
            />
          </div>
          {/* Position Description Textarea */}
          <div>
            <label>Position Description</label>
            <textarea
              name="positionDescription"
              placeholder="Describe the job position here"
              value={formData.positionDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <center><h3>Second, tell us about your company</h3></center>
          {/* Company Name Input */}
          <div>
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Company Website Input */}
          <div>
            <label>Company Website</label>
            <input
              type="text"
              name="companyWebsite"
              placeholder="Company Website"
              value={formData.companyWebsite}
              onChange={handleChange}
            />
          </div>
          {/* Email Address Input */}
          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>
          {/* Company Description Textarea */}
          <div>
            <label>Company Description</label>
            <textarea
              name="companyDescription"
              placeholder="Describe your company here"
              value={formData.companyDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          {/* Location Input */}
          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location Name"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <center><h3>Finally, confirm and pay</h3></center>
          <div>
            <center><p>Featured positions will appear on top of the list Preview</p></center>
          </div>
          {/* Submit Button */}
          <button type="submit">Proceed to Job Post</button>
        </form>

        {/* Success message after submission */}
        {submitted && (
          <div className="submitted-message">
            <h3>Job position submitted successfully!</h3>
          </div>
        )}
      </div>
      </div>
    
  );
};

export default PostJobForm;
