import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import axios from 'axios';



const LoginForm = () => {
  const [formData, setFormData] = useState({
    credential: '',
    password: ''
  });

  const dispatch = useDispatch(); // Get the dispatch function


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/session', formData);
      // Assuming your API returns a user object with session_token on successful login
      const { user } = response.data;

      // Dispatch an action to update authentication state (pseudo code)
      dispatch({ type: 'LOGIN_SUCCESS', payload: user.session_token });

      // Handle successful login (e.g., redirect)
    } catch (error) {
      // Handle login error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p>
        Don't have an account?{' '}
        <a href="/register">Register</a>
      </p>
      <div>
        <label htmlFor="credential">Email</label>
        <input
          type="text"
          name="credential"
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
