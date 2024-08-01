import React from 'react';

const PostJobForm = () => {
  return (
    <div className="post-job-form-container">
      <h2>Reach one of the largest remote job communities</h2>
      <h3>First, tell us about the position</h3>
      <form>
        <div>
          <label>Position Title</label>
          <input type="text" placeholder="Position Title" required />
        </div>
        <div>
          <label>Category</label>
          <select>
            <option value="Full-Stack Programming">Full-Stack Programming</option>
            <option value="Front-End Programming">Front-End Programming</option>
            <option value="Back-End Programming">Back-End Programming</option>
            <option value="DevOps and Sysadmin">DevOps and Sysadmin</option>
            <option value="UI/UX Engineer">UI/UX Engineer</option>
            <option value="Business Analysis">Business Analysis</option>
            <option value="Quality Assurance Engineer">Quality Assurance Engineer</option>
            <option value="Intern Software Engineer">Intern Software Engineer</option>
            <option value="All Other">All Other</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label>Salary Range</label>
          <input type="text" placeholder="Salary Range" />
        </div>
        <div>
          <label>Worldwide Position?</label>
          <input type="radio" name="worldwide" value="Yes" /> Yes
          <input type="radio" name="worldwide" value="No" /> No
        </div>
        <div>
          <label>Job Type</label>
          <input type="radio" name="jobType" value="Full-Time" /> Full-Time
          <input type="radio" name="jobType" value="Part-Time" /> Part-Time
          <input type="radio" name="jobType" value="Contract" /> Contract
        </div>
        <div>
          <label>Application Link or Email</label>
          <input type="text" placeholder="Application Link or Email" required />
        </div>
        <div>
          <label>Position Description</label>
          <textarea placeholder="Describe the job position here"></textarea>
        </div>
        <center><h3>Second, tell us about your company</h3></center>
        <div>
          <label>Company Name</label>
          <input type="text" placeholder="Company Name" required />
        </div>
        <div>
          <label>Company Website</label>
          <input type="text" placeholder="Company Website" />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" placeholder="Email Address" required />
        </div>
        <div>
          <label>Company Logo</label>
          <input type="file" accept="image/*" />
        </div>
        <div>
          <label>Company Description</label>
          <textarea placeholder="Describe your company here"></textarea>
        </div>
        <center><h3>Finally, confirm and pay</h3></center>
        <div>
          <center><input type="checkbox" name="jobType" value="Full-Time" /> Feature this position for $30</center>
          <center><p>Featured positions will appear on top of the list Preview</p></center>
        </div>
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default PostJobForm;
