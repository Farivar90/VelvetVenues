import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    fullName: '',
    invitationCode: '',
  });

  const [invitationError, setInvitationError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check invitation code validity before submitting
    const isValidInvitation = await checkInvitation(formData.invitationCode);
    if (!isValidInvitation) {
      setInvitationError('Invalid invitation code');
      return;
    }

    try {
      const response = await axios.post('/api/users', formData);
      if (response.data.success) {
        // Clear invitation error (if any)
        setInvitationError('');
        
        // Handle successful registration (e.g., show success message, redirect)
        // For example, you can show a success message and redirect the user
        alert('Registration successful! You can now log in.');
        // You might use a library like React Router to handle redirection
      } else {
        // Handle registration error (e.g., show error message)
        // This might occur if there's an issue with the registration process on the backend
        console.error('Registration error:', response.data.error);
      }
    } catch (error) {
      // Handle registration error (e.g., show error message)
      console.error('Registration error:', error);
    }
  };

  const checkInvitation = async (code) => {
    try {
      const response = await axios.get(`/api/check-invitation?code=${code}`);
      return response.data.isValid;
    } catch (error) {
      console.error('Error checking invitation:', error);
      return false;
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
        <label htmlFor="fullName">Full Name (Optional)</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="invitationCode">Invitation Code</label>
        <input type="text" name="invitationCode" value={formData.invitationCode} onChange={handleInputChange} />
        {invitationError && <p>{invitationError}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
