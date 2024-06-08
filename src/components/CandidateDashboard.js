// src/components/CandidateDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CandidateDashboard.css';

const CandidateDashboard = () => {
  return (
    <div className="candidate-dashboard">
      <header className="header">
        <h1>Candidate Dashboard</h1>
        <nav>
          <ul className="nav-list">
            <li><Link to="/edit-profile" className="nav-link">Edit Profile</Link></li>
            <li><Link to="/applied-jobs" className="nav-link">Applied Jobs</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {/* Add content for the candidate dashboard here */}
      </main>
    </div>
  );
};

export default CandidateDashboard;
