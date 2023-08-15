import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import csrfFetch from '../../store/csrf';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    credential: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await csrfFetch('/api/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const user = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: user.session_token });
        history.push(`/users/${user.id}`);
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const handleLoginDemoUser = async () => {
    setFormData({
      credential: 'user1', 
      password: 'Password!123'
    });

    try {
      const response = await csrfFetch('/api/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const user = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: user.session_token });
        history.push(`/users/${user.id}`);
      } else {
        setErrorMessage('Demo user login failed.');
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="credential">Email or Username</label>
        <input
          type="text"
          name="credential"
          placeholder="Enter your email or username"
          value={formData.credential}
          onChange={(e) => setFormData({ ...formData, credential: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={handleLoginDemoUser}>
        Login Demo User
      </button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </form>
  );
};

export default LoginForm;
