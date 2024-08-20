import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import '../css/Metrics.css';

const data = [
  { name: 'Jan', applications: 4000, hirings: 2400 },
  { name: 'Feb', applications: 3000, hirings: 1398 },
  // ... Add more data as needed
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const categoryData = [
  { name: 'Engineering', value: 10 },
  { name: 'Marketing', value: 20 },
  // ... Add more categories as needed
];

function Metrics() {
  return (
    <div className="metrics">
      <h2>Dashboard Metrics</h2>
      <div className="metrics-summary">
        <div className="metric-item">
          <h3>Job Posts</h3>
          <p>2,456</p>
        </div>
        <div className="metric-item">
          <h3>Applications</h3>
          <p>4,561</p>
        </div>
        <div className="metric-item">
          <h3>Meetings</h3>
          <p>125</p>
        </div>
        <div className="metric-item">
          <h3>Hirings</h3>
          <p>2,456</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-item">
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="applications" fill="#8884d8" />
            <Bar dataKey="hirings" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="chart-item">
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
