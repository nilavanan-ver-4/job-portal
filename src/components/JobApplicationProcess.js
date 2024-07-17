// src/components/JobApplicationProcess.js

import React, { useState } from 'react';
import './JobApplicationProcess.css';


const JobApplicationProcess = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="application-form-container">
      <h1>Job Application Form</h1>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationProcess;
