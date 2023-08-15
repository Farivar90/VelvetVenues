import React, { useState } from 'react';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import './MainPage.css';

const MainPage = () => {
  const [activeForm, setActiveForm] = useState('login'); // 'login' or 'registration'

  const toggleForm = () => {
    setActiveForm(activeForm === 'login' ? 'registration' : 'login');
  };

  return (
    <div>
      <img src="/resfiles/head.png" alt="headmain" className="headmain-image" />
      <h1>Welcome to Velvet Venues!</h1>
      <div className="registration-login-container">
        <div className="form-container">
          <h2>{activeForm === 'login' ? 'Login' : 'Register'}</h2>
          {activeForm === 'login' ? <LoginForm /> : <RegistrationForm />}
        </div>
      </div>
      <div className="toggle-button-container">
        <button onClick={toggleForm}>
          Switch to {activeForm === 'login' ? 'Registration' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default MainPage;
