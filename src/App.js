// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobListings from './components/JobListings';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import EditProfile from './components/EditProfile';
import AppliedJobs from './components/AppliedJobs';
import PostJob from './components/PostJob';
import ViewApplications from './components/ViewApplications';
import JobDetail from './components/JobDetail';
import JobApplicationProcess from './components/JobApplicationProcess'; // Import the new component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/applied-jobs" element={<AppliedJobs />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/view-applications" element={<ViewApplications />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/apply-job" element={<JobApplicationProcess />} /> {/* Add this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
