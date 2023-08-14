import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    credential: '',  // This can be either a username or an email now.
    password: ''
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/session', formData);
      const { user } = response.data;

      dispatch({ type: 'LOGIN_SUCCESS', payload: user.session_token });

      // Handle successful login (e.g., redirect)
    } catch (error) {
      // Handle login error (e.g., show error message)
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
    </form>
  );
};

export default LoginForm;
