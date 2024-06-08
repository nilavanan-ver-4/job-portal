import React, { createContext, useState } from 'react';

export const JobContext = createContext();

const initialJobs = [
  {
    _id: { $oid: '1' },
    company: { companyId: 1, companyName: 'Company A' },
    jobTitle: 'Software Engineer',
    location: [37.7749, -122.4194], // San Francisco, CA, USA
    skills: ['JavaScript', 'React', 'Node.js'],
    formattedAddress: 'San Francisco, CA, USA'
  },
  {
    _id: { $oid: '2' },
    company: { companyId: 2, companyName: 'Company B' },
    jobTitle: 'Frontend Developer',
    location: [40.7128, -74.0060], // New York, NY, USA
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    formattedAddress: 'New York, NY, USA'
  },
  {
    _id: { $oid: '3' },
    company: { companyId: 3, companyName: 'Company C' },
    jobTitle: 'Full Stack Developer',
    location: [34.0522, -118.2437], // Los Angeles, CA, USA
    skills: ['Node.js', 'Express', 'MongoDB', 'React'],
    formattedAddress: 'Los Angeles, CA, USA'
  },
  {
    _id: { $oid: '4' },
    company: { companyId: 4, companyName: 'Company D' },
    jobTitle: 'Data Scientist',
    location: [51.5074, -0.1278], // London, UK
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    formattedAddress: 'London, UK'
  },
  {
    _id: { $oid: '5' },
    company: { companyId: 5, companyName: 'Company E' },
    jobTitle: 'Backend Developer',
    location: [52.5200, 13.4050], // Berlin, Germany
    skills: ['Java', 'Spring Boot', 'MySQL'],
    formattedAddress: 'Berlin, Germany'
  },
  {
    _id: { $oid: '6' },
    company: { companyId: 6, companyName: 'Company F' },
    jobTitle: 'UX Designer',
    location: [37.7749, -122.4194], // San Francisco, CA, USA
    skills: ['UI/UX Design', 'Adobe Creative Suite'],
    formattedAddress: 'San Francisco, CA, USA'
  },
  {
    _id: { $oid: '7' },
    company: { companyId: 7, companyName: 'Company G' },
    jobTitle: 'Product Manager',
    location: [40.7128, -74.0060], // New York, NY, USA
    skills: ['Product Management', 'Agile', 'Scrum'],
    formattedAddress: 'New York, NY, USA'
  },
  {
    _id: { $oid: '8' },
    company: { companyId: 8, companyName: 'Company H' },
    jobTitle: 'DevOps Engineer',
    location: [34.0522, -118.2437], // Los Angeles, CA, USA
    skills: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes'],
    formattedAddress: 'Los Angeles, CA, USA'
  },
  {
    _id: { $oid: '9' },
    company: { companyId: 9, companyName: 'Company I' },
    jobTitle: 'Software Development Manager',
    location: [51.5074, -0.1278], // London, UK
    skills: ['Software Development', 'Team Management'],
    formattedAddress: 'London, UK'
  },
  {
    _id: { $oid: '10' },
    company: { companyId: 10, companyName: 'Company J' },
    jobTitle: 'Technical Support Specialist',
    location: [52.5200, 13.4050], // Berlin, Germany
    skills: ['Technical Support', 'Troubleshooting'],
    formattedAddress: 'Berlin, Germany'
  },
  // Add more job objects here...
];
export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(initialJobs);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};
