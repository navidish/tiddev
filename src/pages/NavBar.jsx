import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../redux/auth/action';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const handleSignup = () => {
    dispatch(removeToken());
    localStorage.removeItem('Access-Token');
    navigate('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '20%',
        borderTopLeftRadius: '24px',
        borderBottomLeftRadius: '24px',
        backgroundColor: '#f5f5f5',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div style={{ padding: '20px' }}>
          <NavLink to="/">Home</NavLink>
        </div>
        <div style={{ padding: '20px' }}>
          <NavLink to="/about">About</NavLink>
        </div>
        {!(!!localStorage.getItem('Access-Token') || state.accessToken) && (
          <div style={{ padding: '20px' }}>
            <NavLink to="/login">Login</NavLink>
          </div>
        )}

        <div style={{ padding: '20px' }}>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </div>

      {(!!localStorage.getItem('Access-Token') || state.accessToken) && (
        <button onClick={() => handleSignup()}>sign up</button>
      )}
    </div>
  );
};

export default NavBar;
