import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import axios from 'axios';



const LoginForm = () => {
  const [formData, setFormData] = useState({
    credential: '',
    password: ''
  });

  const dispatch = useDispatch(); // Get the dispatch function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
      <input
        type="text"
        name="credential"
        value={formData.credential}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
