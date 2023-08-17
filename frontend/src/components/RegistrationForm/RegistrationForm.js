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
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const [reEnteredPassword, setReEnteredPassword] = useState('');
  const [reEnteredPasswordError, setReEnteredPasswordError] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordInputFocus = () => {
    setShowPasswordRequirements(true);
  };
  
  const handlePasswordInputBlur = () => {
    setShowPasswordRequirements(false);
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
    setReEnteredPasswordError('');


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

    if (formData.password !== reEnteredPassword) {
      setReEnteredPasswordError('Passwords do not match');
      return;
    }

    if (!acceptedTerms) {
      setApiError('You must accept the Terms of Use before registering.');
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
    <form className='rl-form' onSubmit={handleSubmit}>
      <div className='rl-div' >
        <label htmlFor="username">Username</label>
        <input className='rl-input' type="text" name="username" placeholder="Enter your username" value={formData.username} onChange={handleInputChange} />
        {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
      </div>
      <div className='rl-div' >
        <label htmlFor="email">Email</label>
        <input className='rl-input' type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div className='rl-div' >
        <label htmlFor="fullName">Full Name (Optional)</label>
        <input className='rl-input' type="text" name="fullName" placeholder="Enter your name (optional)" value={formData.fullName} onChange={handleInputChange} />
      </div>
      <div className='rl-div' >
        <label htmlFor="password">Password</label>
        <input className='rl-input' type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} onFocus={handlePasswordInputFocus} onBlur={handlePasswordInputBlur} />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      <div className='rl-div' >
        <label htmlFor="reEnterPassword">Re-enter Password</label>
          <input className='rl-input'
            type="password" 
            name="reEnterPassword" 
            placeholder="Re-enter your password"
            value={reEnteredPassword} 
            onChange={(e) => setReEnteredPassword(e.target.value)} 
            />
          {reEnteredPasswordError && <p style={{ color: 'red' }}>{reEnteredPasswordError}</p>}
      </div>
      <div className='rl-div' >
        <label htmlFor="invitationCode">Invitation Code</label>
        <input className='rl-input' type="text" name="invitationCode" placeholder="You must have an invitation code" value={formData.invitationCode} onChange={handleInputChange} />
        {invitationError && <p style={{ color: 'red' }}>{invitationError}</p>}
      </div>
      <div className='rl-div' >
        <input className='rl-input'
          type="checkbox" 
          id="termsCheckbox" 
          checked={acceptedTerms} 
         onChange={(e) => setAcceptedTerms(e.target.checked)} 
      />
    <label htmlFor="termsCheckbox"> 
        By signing in, I accept the 
        <span 
            style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer' }} 
            onClick={() => setShowTermsModal(true)}
        >
            Terms of Use
        </span>
    </label>
</div>

      <button  className='rl-button' type="submit">Register</button>
      {apiError && <div style={{ color: 'red' }} className="error">{apiError}</div>} 
      {showPasswordRequirements && (
        <div className="password-requirements">
          <p>
            * The password must contain at least one lowercase alphabetical character.<br />
            * The password must contain at least one uppercase alphabetical character.<br />
            * The password must contain at least one numeric character.<br />
            * The password must contain at least one special character from the set !@#.<br />
            * The password must be at least 8 characters long.
          </p>
        </div>
        )}
      {showTermsModal && (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            zIndex: 1000
        }}>
            <h2>Terms of Use</h2>
            <p>t </p>
            <button onClick={() => setShowTermsModal(false)}>Close</button>
        </div>
    )}
    
    </form>
  );
};

export default RegistrationForm;
