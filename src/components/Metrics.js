import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import '../css/Metrics.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347']; // Added a new color for the total job posts segment

function Metrics({ metrics }) {
  const data = [
    { name: 'Jan', applications: 4000, hirings: 2400 },
    { name: 'Feb', applications: 3000, hirings: 1398 },
    { name: 'Jan', applications: 4000, hirings: 2400 },
    { name: 'Feb', applications: 3000, hirings: 1398 },
    { name: 'Jan', applications: 4000, hirings: 2400 },
    { name: 'Feb', applications: 3000, hirings: 1398 },
    // Add more data as needed
  ];

  const categoryData = [
    { name: 'Total Application', value: metrics.totalApplications },
    { name: 'Total Job Posts', value: metrics.totalJobPosts }, // Added the total job posts segment
    // Add more categories as needed
  ];

  return (
    <div className="metrics">
      <h2>Dashboard Metrics</h2>
      <div className="metrics-summary">
        <div className="metric-item">
          <h3>Job Posts</h3>
          <p>{metrics.totalJobPosts}</p>
        </div>
        <div className="metric-item">
          <h3>Total Applications</h3>
          <p>{metrics.totalApplications}</p>
        </div>
        <div className="metric-item">
          <h3>Shortlisted Candidates</h3>
          <p>{metrics.totalMeetings}</p>
        </div>
        <div className="metric-item">
          <h3>Rejected Candidates</h3>
          <p>{metrics.totalHirings}</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="bar-chart-container">
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="applications" fill="#8884d8" />
            <Bar dataKey="hirings" fill="#FF8042" />
          </BarChart>
        </div>

        <div className="pie-chart-container">
          <PieChart width={400} height={400}>
            <Pie
              data={categoryData}
              cx={200}
              cy={200}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
