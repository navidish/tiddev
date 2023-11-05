import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import PrivateRoutes from './PrivateRoutes';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
