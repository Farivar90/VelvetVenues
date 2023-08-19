import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'; // You need to import axios or any other HTTP client library you prefer.

const UsersPage = () => {
  const currentUser = useSelector(state => state.session.user);
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user information when the component mounts
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
console.log(user);
  return (
    <div>
      Logged in as user with ID: {currentUser}.
      <h1>User Profile</h1>
      {user && (
        <div>
          <p>Viewing profile for user with ID: {userId}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Full Name: {user.fullName}</p>
          <p>Created At: {user.createdAt}</p>
          <p>Updated At: {user.updatedAt}</p>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
