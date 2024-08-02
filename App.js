import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JobSeekerDashboard from './components/JobSeeker/Dashboard';
import EmployerDashboard from './components/Employer/Dashboard';
import AdminDashboard from './components/Admin/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/jobseeker" component={JobSeekerDashboard} />
        <Route path="/employer" component={EmployerDashboard} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
    </div>
  );
}

export default App;