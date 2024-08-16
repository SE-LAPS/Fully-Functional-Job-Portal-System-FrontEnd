import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for the bar chart
const data = [
  { name: 'Jan', applications: 4000, hirings: 2400 },
  { name: 'Feb', applications: 3000, hirings: 1398 },
  { name: 'Mar', applications: 2000, hirings: 9800 },
  { name: 'Apr', applications: 2780, hirings: 3908 },
  { name: 'May', applications: 1890, hirings: 4800 },
  { name: 'Jun', applications: 2390, hirings: 3800 },
  { name: 'Jul', applications: 3490, hirings: 4300 },
];

function Metrics() {
  return (
    <div className="metrics">
      <h2>Company Dashboard Metrics</h2>
      <div className="metrics-summary">
        <div className="metric-item">
          <h3>Job Posts</h3>
          <p>Total: 2,456</p>
          <p>Change: +2.5%</p>
        </div>
        <div className="metric-item">
          <h3>Applications</h3>
          <p>Total: 4,561</p>
          <p>Change: -4.4%</p>
        </div>
        <div className="metric-item">
          <h3>Meetings</h3>
          <p>Total: 125</p>
          <p>Change: +1.5%</p>
        </div>
        <div className="metric-item">
          <h3>Hirings</h3>
          <p>Total: 2,456</p>
          <p>Change: +4.5%</p>
        </div>
      </div>
      <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="applications" fill="#8884d8" />
        <Bar dataKey="hirings" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default Metrics;
