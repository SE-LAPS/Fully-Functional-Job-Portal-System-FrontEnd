import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', applications: 4000, hirings: 2400 },
  { name: 'Feb', applications: 3000, hirings: 1398 },
  { name: 'Mar', applications: 2000, hirings: 9800 },
  { name: 'Apr', applications: 2780, hirings: 3908 },
  { name: 'May', applications: 1890, hirings: 4800 },
  { name: 'Jun', applications: 2390, hirings: 3800 },
  { name: 'Jul', applications: 3490, hirings: 4300 },
  { name: 'Aug', applications: 3490, hirings: 4300 },
  { name: 'Sep', applications: 3490, hirings: 4300 },
  { name: 'Oct', applications: 3490, hirings: 4300 },
  { name: 'Nov', applications: 3490, hirings: 4300 },
  { name: 'Dec', applications: 3490, hirings: 4300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const categoryData = [
  { name: 'Engineering', value: 10 },
  { name: 'Marketing', value: 20 },
  { name: 'Finance', value: 15 },
  { name: 'Sales', value: 25 },
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

      <div className="charts-container">
        {/* Bar Chart */}
        <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="applications" fill="#8884d8" />
          <Bar dataKey="hirings" fill="#82ca9d" />
        </BarChart>

        {/* Pie Chart */}
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
  );
}

export default Metrics;
