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
      setError("An error occurred. Please try again.", error)
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
      setError("An error occurred. Please try again.");
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
      {error && <div style={{ color: 'red' }} className="error">{error}</div>}
    </form>
  );
};

export default LoginForm;
