import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    fullName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData);
      // Handle successful registration (e.g., show success message, redirect)
    } catch (error) {
      // Handle registration error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="fullName">Full Name(Optional)</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </div>
        <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;