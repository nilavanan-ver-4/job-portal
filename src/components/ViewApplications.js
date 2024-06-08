// src/components/ViewApplications.js

import React from 'react';
import './ViewApplication.css';

const ViewApplications = () => {
  const applications = [
    { id: 1, applicantName: 'John Doe', jobTitle: 'Software Engineer' },
    { id: 2, applicantName: 'Jane Smith', jobTitle: 'Data Scientist' },
    // Add more applications here...
  ];

  return (
    <div className="view-applications">
      <header className="header">
        <h1>View Applications</h1>
      </header>
      <main className="main-content">
        <ul className="applications-list">
          {applications.map(application => (
            <li key={application.id} className="application-item">
              <div className="applicant-name">{application.applicantName}</div>
              <div className="job-title">{application.jobTitle}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ViewApplications;
