import React from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(sessionActions.logout());
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
