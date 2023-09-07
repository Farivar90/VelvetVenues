import React, { useState } from 'react';
import csrfFetch from '../../store/csrf';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './RegistrationForm.css';

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
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const [reEnteredPassword, setReEnteredPassword] = useState('');
  const [reEnteredPasswordError, setReEnteredPasswordError] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [error, setError] = useState(null);
  const [apiError, setApiError] = useState(''); 
  const [lowercaseRequirementMet, setLowercaseRequirementMet] = useState(false);
  const [uppercaseRequirementMet, setUppercaseRequirementMet] = useState(false);
  const [numericRequirementMet, setNumericRequirementMet] = useState(false);
  const [specialCharRequirementMet, setSpecialCharRequirementMet] = useState(false);
  const [lengthRequirementMet, setLengthRequirementMet] = useState(false);
  

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setLowercaseRequirementMet(/[a-z]/.test(value));
      setUppercaseRequirementMet(/[A-Z]/.test(value));
      setNumericRequirementMet(/[0-9]/.test(value));
      setSpecialCharRequirementMet(/[!@#]/.test(value));
      setLengthRequirementMet(value.length >= 6);
    }

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
    const isValid = passwordRegex.test(password);
  
    setLowercaseRequirementMet(/[a-z]/.test(password));
    setUppercaseRequirementMet(/[A-Z]/.test(password));
    setNumericRequirementMet(/[0-9]/.test(password));
    setSpecialCharRequirementMet(/[!@#]/.test(password));
    setLengthRequirementMet(password.length >= 6);

    return isValid;
  };
  

  const isValidUsername = username =>{
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUsernameError('');
    setInvitationError('');
    setEmailError('');
    setUsernameError('');
    setPasswordError('');
    setReEnteredPasswordError('');
    setError(null);

    if (!isValidUsername(formData.username)) {
      setUsernameError('Invalid username format');
      return;
    }

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
        // console.log(user.id, 'ui')
        dispatch({ type: 'session/setCurrentUser', payload: user.id});
        history.push(`/listings`);
      } else {
        let errorData;
        setError(errorData.errors || "An error occurred. Please try again.");
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
        console.error(errorData);
      } else {
        setError("Username or Email exist!");
      }
    }
  };

  return (
    <form className='rl-form' onSubmit={handleSubmit}>
      <div className='rl-div' >
        <label htmlFor="username">Username and Email</label>
        <input className='rl-input' type="text" name="username" placeholder="Enter your username" value={formData.username} onChange={handleInputChange} />
        {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
      </div>
      <div className='rl-div' >
        {/* <label htmlFor="email">Email</label> */}
        <input className='rl-input' type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      {/* <div className='rl-div' >
        <label htmlFor="fullName">Full Name (Optional)</label>
        <input className='rl-input' type="text" name="fullName" placeholder="Enter your full name (optional)" value={formData.fullName} onChange={handleInputChange} />
      </div> */}
      <div className='rl-div' >
        <label htmlFor="password">Password</label>
        <input className='rl-input' type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} onFocus={handlePasswordInputFocus} onBlur={handlePasswordInputBlur} />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      <div className='rl-div' >
        {/* <label htmlFor="reEnterPassword">Re-enter Password</label> */}
          <input className='rl-input'
            type="password" 
            name="reEnterPassword" 
            placeholder="Re-enter your password"
            value={reEnteredPassword} 
            onChange={(e) => setReEnteredPassword(e.target.value)} 
            />
          {reEnteredPasswordError && <p style={{ color: 'red' }}>{reEnteredPasswordError}</p>}
      </div>
            {showPasswordRequirements && (
            <div className="password-requirements">
            <p>
            * <span className={lowercaseRequirementMet ? 'requirement-met' : 'requirement'}>The password must contain at least one lowercase alphabetical character.</span><br />
            * <span className={uppercaseRequirementMet ? 'requirement-met' : 'requirement'}>The password must contain at least one uppercase alphabetical character.</span><br />
            * <span className={numericRequirementMet ? 'requirement-met' : 'requirement'}>The password must contain at least one numeric character.</span><br />
            * <span className={specialCharRequirementMet ? 'requirement-met' : 'requirement'}>The password must contain at least one special character from the set !@#.</span><br />
            * <span className={lengthRequirementMet ? 'requirement-met' : 'requirement'}>The password must be at least 6 characters long.</span>
             </p>
            </div>
            )}
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
      {error && <div style={{ color: 'red' }} className="error">{error}</div>}

      {showTermsModal && (
        <div className='terms-modal'>
          <div className='terms-content'>
            <h2 className='terms-heading' >VelvetVenues Terms of Use </h2>
            <div className='terms-text'>
              <p> <br /><br /><br />
             
Last updated: August 16, 2023 <br /><br /><br />


Welcome to VelvetVenues<br />
Step into the digital realm where opulence meets elegance. Before you immerse yourself in our luxury listings, please take a moment to acquaint yourself with our terms of use.
<br /><br />
By accessing or using our platform, you are agreeing to the terms outlined below. If you do not agree, kindly refrain from using the platform.
<br /><br />
Acceptance of Terms<br />
Your access to and use of VelvetVenues confirms your agreement to be bound by these terms.
<br /><br />
Eligibility<br />
To use our services, you must be at least 18 years old. By using VelvetVenues, you confirm that you are of legal age and have the capacity to form a binding contract.
<br /><br />
Account Security<br />
The security of your login credentials is your responsibility. Any activity conducted under your account will be attributed to you.
<br /><br />
Usage Authorization<br />
VelvetVenues is exclusively accessible through invitation codes. Utilizing someone else's invitation code for registration, especially for fraudulent purposes, may lead to charges of misdemeanor or felony.
<br /><br />
Intellectual Property<br />
All content, branding, and interfaces within VelvetVenues are the property of F.A. Imperial Estates and are safeguarded by copyright laws. Any unauthorized use, reproduction, or dissemination is strictly prohibited.
<br /><br />
Property Listings<br />
Every property listing on VelvetVenues must meet our minimum price guidelines. Listings not meeting our standards may be removed without prior notice.
<br /><br />
User Interactions<br />
You are solely responsible for your interactions with other users. VelvetVenues will not be held responsible for disputes or disagreements between users.
<br /><br />
Limitation of Liability<br />
VelvetVenues provides a platform for luxury property listings but does not guarantee the accuracy, completeness, or reliability of any content on the platform. VelvetVenues will not be liable for any losses or damages incurred due to reliance on platform content.
<br /><br />
Privacy<br />
We highly value your privacy. Detailed information on how we collect, use, and protect your data is available in our privacy policy.
<br /><br />
Modifications<br />
VelvetVenues reserves the right to amend these terms of use at any time. Continued use of the platform after changes indicates your agreement to the modified terms.
<br /><br />

 Termination <br />
We retain the right to suspend or terminate your account if you violate any of our terms.
<br />
<br />
Dispute Resolution<br />
Any disputes arising from your use of VelvetVenues will be governed by the laws of the jurisdiction in which VelvetVenues is based, without regard to conflict of law provisions.
<br /><br />
Contact Us<br />
For inquiries or concerns about these terms, please don't hesitate to reach out to us.
<br /><br />
By proceeding, you acknowledge and accept these terms, ensuring a seamless and luxurious experience for all VelvetVenues members. Remember, luxury thrives on respect—please use our platform responsibly.
<br /><br /><br />
© 2023 by F.A. Imperial Estates.<br />
 All rights reserved.
            </p>
            </div>
            <button className='terms-close-btn' onClick={() => setShowTermsModal(false)}>Close</button>
          </div>
        </div>
      )}
    
    </form>
  );
};

export default RegistrationForm;
