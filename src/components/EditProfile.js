// src/components/EditProfile.js

import React from 'react';
import './EditProfile.css';

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <header className="header">
        <h1>Edit Profile</h1>
      </header>
      <main className="main-content">
        <form className="edit-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" name="bio"></textarea>
          </div>
          <button type="submit" className="save-button">Save Changes</button>
        </form>
      </main>
    </div>
  );
};

export default EditProfile;
