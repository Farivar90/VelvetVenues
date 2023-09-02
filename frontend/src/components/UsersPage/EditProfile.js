import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './EditProfile.css';
import csrfFetch from '../../store/csrf';
import DemoUserModal from './DemoUserModal';

const EditProfile = () => {
  const currentUser = useSelector(state => state.session.user);
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();

  const closeModal = () => {
    setShowMessage(false);
    history.push(`/users/${userId}`);
  };

  useEffect(() => {
    if (currentUser === 1) {
      setShowMessage(true);
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

  const handleDelete = async () => {
    try {
      const response = await csrfFetch(`/api/users/${userId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        history.push('/');
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (!currentUser) {
    return <Redirect to="/" />;
  }
  
  return (
    <div className="profile-container">
        <DemoUserModal show={showMessage} onClose={closeModal} />
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
            value={user.full_name || ''} 
            onChange={handleChange} 
          />
        </div>
        <button
          type="submit"
          className="profile-button"
          disabled={showMessage}
        >
          Save Changes
        </button>
        <button
          type="button"
          className="profile-button-delete-button"
          onClick={handleDelete}
          disabled={showMessage}
        >
          Delete Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
