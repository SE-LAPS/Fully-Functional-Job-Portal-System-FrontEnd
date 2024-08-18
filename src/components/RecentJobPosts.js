import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RecentJobPosts = ({ jobPosts }) => {
  // Prepare data for the pie chart
  const categoryData = jobPosts.reduce((acc, job) => {
    const existingCategory = acc.find(item => item.name === job.category);
    if (existingCategory) {
      existingCategory.value += 1;
    } else {
      acc.push({ name: job.category, value: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="recent-job-posts">
      <div className="filter-options">
        {/* You can add filter options if needed */}
      </div>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Category</th>
            <th>Applications</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobPosts.map((job, index) => (
            <tr key={index}>
              <td>{job.positionTitle}</td>
              <td>{job.category}</td>
              <td>{job.applications || 0}</td> {/* Assuming you have an applications field */}
              <td>{job.status || 'Active'}</td> {/* Default to 'Active' if status is not provided */}
            </tr>
          ))}
        </tbody>
      </table>
      

    </div>
  );
};

export default RecentJobPosts;
