import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'; // Import from react-router-dom, not the cjs min version
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import './MainPage.css';

const MainPage = () => {
  const [activeForm, setActiveForm] = useState('login'); // 'login' or 'registration'

  const currentUser = useSelector(state => state.session.user);

  if (currentUser) return <Redirect to={`/users/${currentUser.id}`} />; // Use currentUser instead of user

  const toggleForm = () => {
    setActiveForm(activeForm === 'login' ? 'registration' : 'login');
  };

  return (
    <div>
      <img src="/resfiles/head.png" alt="headmain" className="headmain-image" />
      <h1> Welcome to VelvetVenues</h1>
      <h2>Please Login to "Discover Luxury, Your Way"</h2>
      <div className="registration-login-container">
        <div className="form-container">
          <h2>{activeForm === 'login' ? 'Login' : 'Register'}</h2>
          {activeForm === 'login' ? <LoginForm /> : <RegistrationForm />}
        </div>
      </div>
      <div className="toggle-button-container">
        <button onClick={toggleForm}>
          {activeForm === 'login' ? 'Don`t have an accout? Please Register' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default MainPage;
