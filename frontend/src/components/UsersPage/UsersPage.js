import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Modal from '../Modal/Modal';
import csrfFetch from '../../store/csrf';
import './UsersPage.css';

const UsersPage = () => {
  const currentUser = useSelector(state => state.session.user);
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const navigation = useHistory();
  const [messageContent, setMessageContent] = useState('');

  const handleSendMessage = (messageContent) => {
    csrfFetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sender_id: currentUser,
        receiver_id: user.id,
        content: messageContent
      })
    })
    .then(response => {
      setShowMessageModal(false);
    })
    .catch(error => {
      console.error('Error sending message:', error);
     
    });
  };
  
  const goToInbox = () => {
    navigation.push('/inbox');
  };
  
  useEffect(() => {
    axios.get(`/api/users/${userId}`)
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      console.error('Error fetching user:', error);
    });
  }, [userId]);
  
  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  if (!user) {
    return <div className="loading">
      <img src="/resfiles/R.gif" alt="loading" />
    </div>;
  }

  return (
    <div className="user-profile-container">
          {currentUser === user.id ? (
           <h1>Welcome {user.fullName? user.fullName : user.username}</h1>
          ) : (
            <h1> User Profile</h1>
          )}
      
      
      <div className="top-section">
        <div className="user-image">
          <img 
            src={user.photo?.imageUrl || '/resfiles/default-profile-image.png'} 
            alt={`${user.fullName}'s profile`} 
          />
        </div>
  
      <div className="user-details">
        <p class="detail-label">Username:</p> 
        <p class="detail-value">{user.username}</p>
        <p class="detail-label">Email:</p>
        <p class="detail-value"> {user.email}</p>
        <p class="detail-label">Full Name:</p>
        <p class="detail-value"> {user.fullName}</p>
        <p class="detail-label">Created At: </p>
        <p class="detail-value">{new Date(user.createdAt).toLocaleString()}</p>
        <p class="detail-label">Updated At:</p>
        <p class="detail-value"> {new Date(user.updatedAt).toLocaleString()}</p>
      
        {currentUser === user.id && (
          <Link to={`/users/${user.id}/edit`} className="edit-profile-btn">
            Edit Profile
          </Link>
        )}
      </div>
        <div className="actions">
          {currentUser === user.id ? (
            <button onClick={goToInbox} className="inbox-btn">Inbox</button>
          ) : (
            <button onClick={() => setShowMessageModal(true)}>Send Message</button>
          )}
        </div>
      </div>
      
  
      <Modal showModal={showMessageModal} closeModal={() => setShowMessageModal(false)}>
        <h2>Send Message to {user.username}</h2>
        <textarea
          placeholder="Write your message here..."
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        ></textarea>            
        <button onClick={() => handleSendMessage(messageContent)}>Send</button>
      </Modal>
    </div>
  );
};

export default UsersPage;
