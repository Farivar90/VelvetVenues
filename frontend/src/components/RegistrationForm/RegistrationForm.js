import React, { useState } from 'react';
import csrfFetch from '../../store/csrf';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    fullName: '',
    invitationCode: '',
  });



  const [invitationError, setInvitationError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState(''); 
  const [apiError, setApiError] = useState(''); 

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setInvitationError('');
    setEmailError('');
    setPasswordError('');

    if (!isValidEmail(formData.email)) {
      setEmailError('Invalid email format');
      return;
    }

    if (!isValidPassword(formData.password)) {
      setPasswordError('Invalid password format');
      return;
    }

    if (formData.invitationCode !== 'Test') {
      setInvitationError('Invalid invitation code');
      return;
    }

    if (formData.username.trim().length < 1) {
      setInvitationError('Invalid Username');
      return;
    }

    try {
      const response = await csrfFetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const user = await response.json();
        dispatch({ type: 'session/setCurrentUser', payload: user.id});
        history.push(`/users/${user.id}`);
      } else {
        const errorData = await response.json();
        console.error('Registration error:', errorData);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div>
        <label htmlFor="fullName">Full Name (Optional)</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="password">Password*</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      <div>
        <label htmlFor="invitationCode">Invitation Code</label>
        <input type="text" name="invitationCode" value={formData.invitationCode} onChange={handleInputChange} />
        {invitationError && <p style={{ color: 'red' }}>{invitationError}</p>}
      </div>
      <button type="submit">Register</button>
      {apiError && <div style={{ color: 'red' }} className="error">{apiError}</div>} 
      <div>
        <p>
          * The password must contain at least one lowercase alphabetical character.<br />
          * The password must contain at least one uppercase alphabetical character.<br />
          * The password must contain at least one numeric character.<br />
          * The password must contain at least one special character from the set !@#.<br />
          * The password must be at least 8 characters long.
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
