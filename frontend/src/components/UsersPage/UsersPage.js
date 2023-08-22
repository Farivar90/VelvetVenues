import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

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

  return (
    <div>
      Logged in as user with ID: {currentUser.id}. {/* Assuming currentUser has an id property */}
      <h1>User Profile</h1>
      {user && (
        <div>
          <p>Viewing profile for user with ID: {userId}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Full Name: {user.fullName}</p>
          <p>Created At: {new Date(user.createdAt).toLocaleString()}</p> {/* Formatted date */}
          <p>Updated At: {new Date(user.updatedAt).toLocaleString()}</p> {/* Formatted date */}
          <div>
            <img src={user.photo?.imageUrl} alt={`${user.fullName}'s profile`} style={{width: "200px"}} /> {/* Safely access imageUrl */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
