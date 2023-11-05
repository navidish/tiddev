import React from 'react';
import { Outlet } from 'react-router';
function Home() {
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
      <h1> welcome to Home page</h1>
      <Outlet />
    </div>
  );
}

export default Home;
