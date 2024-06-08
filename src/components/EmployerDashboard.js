// src/components/EmployerDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './EmployerDashboard.css';

const EmployerDashboard = () => {
  return (
    <div className="employer-dashboard">
      <header className="header">
        <h1>Employer Dashboard</h1>
      </header>
      <nav className="navigation">
        <ul>
          <li><Link to="/post-job" className="nav-link">Post a Job</Link></li>
          <li><Link to="/view-applications" className="nav-link">View Applications</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default EmployerDashboard;
