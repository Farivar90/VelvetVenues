import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './EditProfile.css';
import csrfFetch from '../../store/csrf';
import DemoUserModal from './DemoUserModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const EditProfile = () => {
  const currentUser = useSelector(state => state.session.user);
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();

  const [profileImage, setProfileImage] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false)


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
  
    const formData = new FormData();
    formData.append('user[username]', user.username);
    formData.append('user[email]', user.email);
    formData.append('user[full_name]', user.fullName);
    if (profileImage) {
      formData.append('user[photo]', profileImage);
    }
  
    try {
      const response = await csrfFetch(`/api/users/${userId}`, {
        method: 'PUT',
        body: formData
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
  

  const handleConfirmDelete = async () => {
    try {
      const response = await csrfFetch(`/api/users/${userId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        history.push('/logout');
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
    setShowDeleteModal(false);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  if (!currentUser) {
    return <Redirect to="/" />;
  }
  
  return (
    <div className="profile-container">
        <DemoUserModal show={showMessage} onClose={closeModal} />
        <DeleteConfirmationModal 
          show={showDeleteModal}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      <h1>Edit Profile</h1>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-field">
          <label>Profile Picture: </label>
          <input type="file" onChange={e => setProfileImage(e.target.files[0])} />
        </div>

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
            name="fullName" 
            value={user.fullName || ''} 
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
          onClick={handleDeleteClick}
          disabled={showMessage}
        >
          Delete Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
