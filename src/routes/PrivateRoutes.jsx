import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const state = useSelector((state) => state);
  const AccessToken = state.accessToken || localStorage.getItem('Access-Token');

  if (AccessToken) {
    return true;
  } else {
    return false;
  }
};

function PrivateRoutes() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
