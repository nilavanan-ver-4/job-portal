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
     
      <main className="dashboard-content">
        <section className="info-card">
          <h2>Post a Job</h2>
          <p>Reach out to a wide audience by posting your job listings here.</p>
          <Link to="/post-job" className="cta-button">Get Started</Link>
        </section>
        <section className="info-card">
          <h2>View Applications</h2>
          <p>Manage and review the applications submitted by candidates.</p>
          <Link to="/view-applications" className="cta-button">View Now</Link>
        </section>
      </main>
    </div>
  );
};

export default EmployerDashboard;
