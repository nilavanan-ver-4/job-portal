// src/components/PostJob.js

import React, { useState } from 'react';
import './PostJob.css';

const PostJob = () => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    company: '',
    location: '',
    description: '',
    requirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit job details to the server or handle the data as needed
    console.log(jobDetails);
  };

  return (
    <div className="post-job">
      <header className="header">
        <h1>Post a Job</h1>
      </header>
      <main className="main-content">
        <form className="job-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title:</label>
            <input type="text" id="jobTitle" name="jobTitle" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" name="company" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="requirements">Requirements:</label>
            <textarea id="requirements" name="requirements" onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="submit-button">Post Job</button>
        </form>
      </main>
    </div>
  );
};

export default PostJob;
