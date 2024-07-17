import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EmployerDashboard.css';
import { Link } from 'react-router-dom';

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${jobId}`)
      .then(response => response.json())
      .then(data => setJob(data));
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{job.jobTitle}</h2>
      <p><strong>Company:</strong> {job.company.companyName}</p>
      <p><strong>Location:</strong> {job.formattedAddress}</p>
      <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
      {/* Add more job details as needed */}
      <div className="job-detail">
      {/* Job details content */}
      <Link to="/apply-job" className="apply-button">Apply for this job</Link>
      <style>
        
      </style>
    </div>
    </div>
    
  );
};

export default JobDetail;
