import React from 'react';
import '../App.css';

const Profile = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        padding: '20px',
      }}
    >
      <h1>welcome to Profile Page</h1>

      <h3 style={{ color: 'blueviolet' }}>
        Hi {localStorage.getItem('username') || 'unknown user!!'}
      </h3>
    </div>
  );
};

export default Profile;
