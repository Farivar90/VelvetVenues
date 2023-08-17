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
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
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
        dispatch({ type: 'session/setCurrentUser', payload: user.id});
        history.push(`/users/${user.id}`);
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          errorData = "An error occurred. Please try again.";
        }
        setError(errorData.errors || errorData);
      }
    } catch (error) {
      if (error.response) {
        const errorData = await error.response.json();
        setError(errorData.errors || "An error occurred. Please try again.");
      } else {
        setError('The provided credentials were invalid.');
      }
    }
  };
  
  const handleLoginDemoUser = async () => {
    const demoFormData = {
      credential: 'demo_user',
      password: 'Password!123'
    };
    setError(null);
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
        dispatch({ type: 'session/setCurrentUser', payload: user.id });
        history.push(`/users/${user.id}`);
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          errorData = "An error occurred. Please try again.";
        }
        setError(errorData.errors || errorData);
        console.error(errorData);
      }
    } catch (error) {
      if (error.response) {
        const errorData = await error.response.json();
        setError(errorData.errors || "An error occurred. Please try again.");
        console.error(errorData);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <form className='rl-form' onSubmit={handleSubmit}>
      <div className='rl-div'>
        <label className='rl-label' htmlFor="credential">Email or Username</label>
        <input className='rl-input'
          type="text"
          name="credential"
          placeholder="Enter your email or username"
          value={formData.credential}
          onChange={(e) => setFormData({ ...formData, credential: e.target.value })}
        />
      </div>
      <div className='rl-div'>
        <label className='login-label' htmlFor="password">Password</label>
        <input className='rl-input'
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <button className='rl-button' id='login-button' type="submit">Login</button>
      <button className='rl-button' id='demo-login-button' type="button" onClick={handleLoginDemoUser}>
        Login Demo User
      </button>
      {error && <div style={{ color: 'red' }} className="error">{error}</div>}
    </form>
  );
};

export default LoginForm;
