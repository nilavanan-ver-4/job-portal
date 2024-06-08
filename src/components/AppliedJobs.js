// src/components/AppliedJobs.js

import React from 'react';
import './AppliedJobs.css';

const AppliedJobs = () => {
  return (
    <div className="applied-jobs">
      <header className="header">
        <h1>Applied Jobs</h1>
      </header>
      <main className="main-content">
        <ul className="job-list">
          <li className="job-item">Job 1 - Company A</li>
          <li className="job-item">Job 2 - Company B</li>
          <li className="job-item">Job 3 - Company C</li>
          {/* Add more applied jobs here */}
        </ul>
      </main>
    </div>
  );
};

export default AppliedJobs;
