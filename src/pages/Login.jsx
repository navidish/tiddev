import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/auth/action';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    localStorage.setItem('username', userName);
    localStorage.setItem('password', password);
  }, [userName, password]);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.get('./loginData.json').then((res) => {
      console.log('res', res);
      dispatch(setToken(res.data.token));
      localStorage.setItem('Access-Token', res.data.token);
      navigate('/profile');
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
      }}
    >
      <h1>Login</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '35%',
          gap: '16px',
          justifyContent: 'center',
        }}
      >
        <input
          name="username"
          placeholder="input your username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          name="password"
          placeholder="input your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleLogin(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
