// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Job Portal</h1>
      <nav>
        <ul>
          <li><Link to="/jobs">Job Listings</Link></li>
          <li><Link to="/employer-dashboard">Employer Dashboard</Link></li>
          <li><Link to="/candidate-dashboard">Candidate Dashboard</Link></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
