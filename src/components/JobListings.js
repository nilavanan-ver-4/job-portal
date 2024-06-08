import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../context/JobContext';
import './JobListings.css';

const JobListings = () => {
  const { jobs } = useContext(JobContext);

  return (
    <div className="job-listings">
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id.$oid} className="job-item">
             <Link to={`/job/${job._id.$oid}`} className="job-link"> 
              <div className="job-title">{job.jobTitle}</div>
              <div className="job-company">{job.company.companyName}</div>
              <div className="job-location">{job.formattedAddress}</div>
              <div className="job-skills">Skills: {job.skills.join(', ')}</div>
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
