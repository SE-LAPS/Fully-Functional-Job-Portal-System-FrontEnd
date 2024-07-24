// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">JobHunter</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/search">Search Jobs</a>
        <a href="/job_alert">Job Alerts</a>
        <a href="/employers">Employers</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
  );
};

export default Header;
