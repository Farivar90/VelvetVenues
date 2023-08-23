import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './EditProfile.css';
import csrfFetch from '../../store/csrf';

const EditProfile = () => {
  const currentUser = useSelector(state => state.session.user);
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (currentUser !== parseInt(userId)) {
      history.push('/');
      return;
    }

    axios.get(`/api/users/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, [userId, currentUser, history]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await csrfFetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
  
      if (response.ok) {
        history.push(`/users/${userId}`);
      } else {
        console.error('Error updating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  
  return (
    <div className="profile-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-field">
          <label>Username: </label>
          <input 
            type="text" 
            name="username" 
            value={user.username || ''} 
            onChange={handleChange} 
          />
        </div>
        <div className="profile-field">
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={user.email || ''} 
            onChange={handleChange} 
          />
        </div>
        <div className="profile-field">
          <label>Full Name: </label>
          <input 
            type="text" 
            name="full_name" 
            value={user.fullName || ''} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="profile-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
