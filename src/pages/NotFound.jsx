import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
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
      <h1>404 NotFound</h1>
      <Link to="/">go to home</Link>
    </div>
  );
}

export default NotFound;
