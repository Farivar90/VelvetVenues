// LoginForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import csrfFetch from '../../store/csrf';
import { useHistory } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    credential: '',
    password: ''
  });

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
        // Handle login failure
      }
    } catch (error) {
      // Handle error
    }
  };

  const handleLoginDemoUser = async () => {
    const demoFormData = {
      credential: 'demo_user',
      password: 'Password!123'
    };

    try {
      const response = await csrfFetch('/api/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(demoFormData)
      });

      if (response.ok) {
        const user = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: user.session_token });
        history.push(`/users/${user.id}`);
      } else {
        // Handle demo user login failure
      }
    } catch (error) {
      // Handle error
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
    </form>
  );
};

export default LoginForm;
