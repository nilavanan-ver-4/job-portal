// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file
import { useState } from 'react';

const HomePage = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email address to your backend server or API
    fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Handle successful subscription, e.g., display a success message
        alert('Subscribed successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, e.g., display an error message
        alert('Subscription failed. Please try again.');
      });
  };
  return (
    <div className="container">
      <header>
        <h1>Welcome to the Job Portal</h1>
      </header>
      <nav>
          <ul>
            <li><Link to="/jobs">Job Listings</Link></li>
            <li><Link to="/employer-dashboard">Employer Dashboard</Link></li>
            <li><Link to="/candidate-dashboard">Candidate Dashboard</Link></li>
          </ul>
        </nav>
        <br>
        </br>
      <main>
        <section className="search-bar">
          <form action="#">
            <label htmlFor="skills"><b>Skills / Designations / Companies</b></label>
            <input type="text" id="skills" name="skills" />
            <label htmlFor="experience"><b>Experience</b></label>
            <select id="experience" name="experience">
              <option value="">Select</option>
              <option value="entry_level">Entry Level</option>
              <option value="mid_level">Mid Level</option>
              <option value="senior_level">Senior Level</option>
            </select>
            <label htmlFor="location"><b>Location</b></label>
            <input type="text" id="location" name="location" />
            <button type="submit">Search</button>
          </form>
        </section>
        <section className="about-us">
          <h2>Introducing nila jobdoor</h2>
          <p>Discover powerful tools & tips that help you prepare for every stage of your career.</p>
          <a href="#">Start exploring</a>
        </section>
        <section className="job-categories">
          <h2>Job Categories</h2>
          <ul>
            <li><a href="#">Remote</a></li>
            <li><a href="#">MNC</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Sales</a></li>
          </ul>
        </section>
        <div className="email-subscription">
        <h2>Subscribe to Email Notifications</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleChange} required />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      </div>
        
      </main>
    </div>
  );
};

export default HomePage;

