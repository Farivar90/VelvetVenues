import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to Velvet Venues!</h1>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default MainPage;