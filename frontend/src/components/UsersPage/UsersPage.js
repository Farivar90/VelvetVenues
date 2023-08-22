import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './UsersPage.css';

const UsersPage = () => {
  const currentUser = useSelector(state => state.session.user);
  const { userId } = useParams();
  const [user, setUser] = useState(null);

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
      <h1>User Profile</h1>
      {user && (
        <div className="user-details">
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Full Name: {user.fullName}</p>
          <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
          <p>Updated At: {new Date(user.updatedAt).toLocaleString()}</p>
          <div className="user-image">
            <img 
              src={user.photo?.imageUrl || '/resfiles/navlogo.png'} 
              alt={`${user.fullName}'s profile`} 
            />
          </div>
          {/* {console.log(currentUser, user.id, 'user')} */}
          {currentUser === user.id && (
            <Link to={`/users/${user.id}/edit`} className="edit-profile-btn">
              Edit Profile
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
