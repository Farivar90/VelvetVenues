import React from 'react';
// import { Link } from 'react-router-dom';
import RegistrationForm from '../store/RegistrationForm'; // Adjust the import path as needed
import LoginForm from '../store/LoginForm'; // Adjust the import path as needed
import './MainPage.css'; // Import your custom CSS file for styling

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to Velvet Venues!</h1>
      <div className="registration-login-container">
        <div className="registration-form">
          <h2>Register</h2>
          <RegistrationForm />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
